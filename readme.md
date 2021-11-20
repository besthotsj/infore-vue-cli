- commands  // 此文件夹用于放置自定义命令
- utils //下载及下载文件处理，模板参数
- index.js  // 项目入口

- commander：啥都不说，强大的库

- inquirer：高效脚本问答，基于此库编写对话脚本

- download-git-repo：进行模板下载，因为是githun的https经常会报128，后续处理

- fs-extra：复制，删除，读写文件，把用户输入的信息插入package.json

- update-notifier：检测更新

```
模板暂时不全，不过对脚手架执行不影响

# Installation
```
$ npm i infore-vue-cli -g
```
# Usage
Run the following command line to create the project:
```
$ infore-vue-cli init myproject
```
## upgrade
Check the new version is available or not:
```
$ infore-vue-cli upgrade
```