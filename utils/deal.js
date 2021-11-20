/*
 * @Author: your name
 * @Date: 2021-11-20 09:31:33
 * @LastEditTime: 2021-11-20 14:20:45
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \infore-vue-cli\utils\deal.js
 */

const ora = require('ora')//node.js命令行环境的loading效果，和显示各种状态的图标等
const fse = require('fs-extra')
const chalk = require('chalk')//命令行输出样式美化
const handlebars = require('handlebars')
async function dealData(cmdMsg, projectName, targetPath, templatePath, temIsExists) {
  const spinner = ora(`正在处理，请稍后...`);//${temIsExists?'模板已存在':'模板已下载'} ，
  spinner.start();
  try {
    await fse.copy(templatePath, targetPath)
  } catch (e) {
    spinner.text = chalk.red(`Copy template failed. ${e}`);
    spinner.fail()
    process.exit()
  }
  const multiMeta = {
    project_name: projectName
  }
  const multiFiles = [`${targetPath}/package.json`]
  for (let i = 0; i < multiFiles.length; i++) {
    try {
      const multiFilesContent = await fse.readFile(multiFiles[i], 'utf8')
      let pckJson = JSON.parse(multiFilesContent)
      pckJson.name = projectName
      pckJson.author = cmdMsg.author
      pckJson.description = cmdMsg.description
      pckJson.private = false
      const multiFilesContentString = JSON.stringify(pckJson,"","\t")//格式化输出，直接转会变成一行样式，看起来很难受
      const multiFilesResult = await handlebars.compile(multiFilesContentString)(multiMeta)
      await fse.outputFile(multiFiles[i], multiFilesResult)
      spinner.text = chalk.green(`Project created successfully`)
      spinner.succeed()
    } catch (e) {
      // console.log(chalk.red(`Initialize project failed. ${e}`))
      spinner.text = chalk.red(`Initialize project failed. ${e}`)
      spinner.fail()
      process.exit()
    }
  }
  console.log(`To get started: cd ${chalk.blue(projectName)}
    ${chalk.blue('npm install')} or ${chalk.blue('yarn install')}
    ${chalk.blue('npm run start:dev')} or ${chalk.blue('yarn run start:dev')}`)
}

module.exports = dealData