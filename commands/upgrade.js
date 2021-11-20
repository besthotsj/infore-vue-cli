/*
 * @Description: 
 * @Autor: sj
 * @Date: 2021-11-16 09:48:04
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-20 11:07:02
 */
const updateNotifier = require('update-notifier')
const chalk = require('chalk')
const pkg = require('../package.json')

const notifier = updateNotifier({
  pkg,
  updateCheckInterval: 1000
})

function updateChk() {
  if (notifier.update) {
    console.log(`New version available: ${chalk.cyan(notifier.update.latest)},
     it's recommended that you update before using`)
    notifier.notify()
  } else {
    console.log('No new version is available')
  }
}

module.exports = updateChk