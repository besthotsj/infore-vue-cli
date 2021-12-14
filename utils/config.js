/*
 * @Description: 
 * @Autor: sj
 * @Date: 2021-11-16 13:46:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021-11-19 16:02:19
 */
module.exports = {
  promptTypeList: [
    //inquirer 交互问答
    {
      name: 'description',
      message: '请输入项目描述：',
      default: 'a vue template'
    },
    {
      name: 'author',
      message: '请输入项目作者：',
      default: 'infore'
    },
    {
      name: 'type',
      type: 'list',
      message: '请选择初始化模板：',
      choices: [
        {
          name: 'inforePCTemplate',
          value: {
            url: 'https://github.com/besthotsj/inforePCTemplate.git',
            gitName: 'infore-pc',
            val: 'inforePCTemplate'
          }
        },
        {
          name: 'inforeH5Template',
          value: {
            url: 'https://github.com/besthotsj/mini-template.git',
            gitName: 'infore-h5',
            val: 'inforeH5Template'
          }
        },
        {
          name: 'inforeMiniTemplate',
          value: {
            url: 'https://github.com/besthotsj/mini-template.git',
            gitName: 'infore-mini',
            val: 'inforeMiniTemplate'
          }
        }
      ],
      default: 'inforePCTemplate'
    }
  ]
}