#!/usr/bin/env node
// #! 符号的名称叫 Shebang，用于指定脚本的解释程序
// Node CLI 应用入口文件必须要有这样的文件头
// 如果是Linux 或者 macOS 系统下还需要修改此文件的读写权限为 755
// 具体就是通过 chmod 755 cli.js ./commands/upgrade.js

// 为简化使用，Commander 提供了一个全局对象
const { program } = require('commander')//命令行工具
const inquirer = require('inquirer')//命令行交互
const { version } = require('./package.json')
const initProject = require('./commands/init.js')
const updateChk = require('./commands/upgrade.js')
const { promptTypeList } = require('./utils/config.js')
const chalk = require('chalk')

program.version(version, '-v, --version')
// init配置
program.command('init <name>')
  .description('init a project')
  // .option('-t, --type <type>', 'type of the project to init')
  .action(name => {
    console.log(`模板初始化：${chalk(name)}`)
    inquirer.prompt(promptTypeList)
    .then(res => {
      initProject(name, res)
    })
  })
program.command('upgrade')
  .description('Check the infore-vue-cli version.')
  .action(() => {
    updateChk()
  })
// 解析用户执行命令传入参数
program.parse(process.argv)
