/*
 * @Description: 
 * @Autor: sj
 * @Date: 2021-11-16 09:47:48
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-20 10:23:40
 */
const fse = require('fs-extra')
const chalk = require('chalk')//命令行输出样式美化
const path = require('path')
const dealwithTemplate = require('../utils/download.js')
const dealData = require('../utils/deal.js')
async function initProject(name, cmdMsg) {
  try {
    const exists = await fse.pathExists(name)// 检测创建项目文件夹是否存在
    if(exists) {
      console.log(chalk.red('failed! The project already exists.'))
    }else {
      // const initSpinner = ora(chalk.cyan('Initializing project...'))
      // initSpinner.start()
      
      const templatePath = path.resolve(__dirname, `../template/${cmdMsg.type.val}/`)
      const processPath = process.cwd()// 当前命令行选择的目录
      const projectName = name.toLowerCase()
      const targetPath = `${processPath}/${projectName}`//目录地址
      const exists = await fse.pathExists(templatePath)

      if(!exists) {
        // 模板未下载去下载模板
        dealwithTemplate(cmdMsg, projectName, targetPath, templatePath)
      }else {
        //模板已下载直接copy修改
        dealData(cmdMsg, projectName, targetPath, templatePath, true)
      }
    }
  } catch (e) {
    console.error(chalk.red(e))
    process.exit()
  }
}

module.exports = initProject