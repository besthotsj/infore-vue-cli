const CompressionWebpackPlugin = require('compression-webpack-plugin')
// 运行命令环境 用于 config 区分开发和生成环境
const shell = require('shelljs')
const apiEnv = process.env.API_ENV
shell.cp(`./src/configs/${apiEnv}.ts`, './src/configs/index.ts')
// const TerserPlugin = require('terser-webpack-plugin')

//引入等比适配插件
// const px2rem = require('postcss-px2rem-exclude')
// //配置基本大小
// const postcss = px2rem({
//   //基准大小baseSize，需要和rem.js中相同
//   remUnit: 16
// })

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,
  filenameHashing: true,
  // css 相关选项
  css: {
    extract: process.env.NODE_ENV !== 'development',
    sourceMap: process.env.NODE_ENV === 'development',
    loaderOptions: {
      // postcss: {
      //   plugins: [
      //     postcss
      //   ]
      // },
      less: {
        // 安装 babel-plugin-import 按需加载插件后报错
        // 解决报错问题：.bezierEasingMixin() ^Inline JavaScript is not enabled. Is it set in your options?
        javascriptEnabled: true
      }
    }
  },
  configureWebpack: config => {
    config.plugins.push(
      ...[
        // gzip压缩
        new CompressionWebpackPlugin({
          filename: info => {
            return `${info.path}.gz${info.query}`
          },
          test: new RegExp('\\.(' + ['js', 'css', 'svg'].join('|') + ')$'),
          minRatio: 0.8,
          deleteOriginalAssets: false // 删除原文件
        })
      ]
    )
  },
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  chainWebpack: config => {
    config/**
     * 删除懒加载模块的prefetch，降低带宽压力
     * https://cli.vuejs.org/zh/guide/html-and-static-assets.html#prefetch
     * 而且预渲染时生成的prefetch标签是modern版本的，低版本浏览器是不需要的
     */ .plugins
      .delete('prefetch')
      .end()
    config.when(process.env.NODE_ENV === 'production', config => {
      config.optimization
        .minimize(true) // js文件最小化处理
        .splitChunks({ chunks: 'all' }) // 分割代码
        .minimizer('terser')
        .tap(args => {
          //注释console
          args[0].terserOptions.compress.drop_console = true
          //remove debugger
          args[0].terserOptions.compress.drop_debugger = true
          //移除console.log
          args[0].terserOptions.compress.pure_funcs = ['console.log']
          //去掉注释
          args[0].terserOptions.output = {
            comments: false
          }
          args[0].test = /\.js(\?.*)?$/i
          args[0].parallel = true
          args[0].extractComments = false //将注释剥离到单独的文件
          return args
        })
    })
  }
}
