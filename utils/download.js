/*
 * @Description: 
 * @Autor: sj
 * @Date: 2021-11-16 10:57:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-20 11:01:32
 */
const ora = require('ora')//node.js命令行环境的loading效果，和显示各种状态的图标等
const chalk = require('chalk')//命令行输出样式美化
const download = require('download-git-repo')
const dealData = require('./deal.js')
const fse = require('fs-extra')
async function dealwithTemplate(cmdMsg, projectName, targetPath, templatePath) {
  const {url, val} = cmdMsg.type
  if(!url){
    console.log(chalk.red(`${val} 该类型暂不支持...`));
    process.exit(1);
  }
  const spinner = ora('正在下载模板, 请稍后...');
  spinner.start();
  try {
    download(`direct:${url}`, templatePath, { clone: true }, async function (err) {
      if(err) {
        fse.rmdir(templatePath)//下载失败删除模板
        spinner.text = chalk.red(`Download template failed: ${err}`);
        spinner.fail()
        process.exit();
      }else {
        spinner.text = chalk.green(`Download template successfully`)
        spinner.succeed();
        dealData(cmdMsg, projectName, targetPath, templatePath, false)
      }
    })
  } catch (err) {
    spinner.text = chalk.red(`Download template failed. ${err}`);
    spinner.fail();
    process.exit();
  }
}

module.exports = dealwithTemplate;

