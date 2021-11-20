module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    //强制统一缩进
    'indent': [
      'warn',
      2,
      {
        SwitchCase: 1
      }
    ],
    "@typescript-eslint/ban-types": [
      "error",
      {
        "extendDefaults": true,
        "types": {
          "{}": false,
          "Function": false
        }
      }
    ],//屏蔽可以用object座位类型
    '@typescript-eslint/no-explicit-any': ["off"],//关闭any警告
    '@typescript-eslint/explicit-module-boundary-types': ['off'],
    '@typescript-eslint/no-var-requires': 0,
    'linebreak-style': 'off', //换行
    'no-extra-semi': 2, //禁止多余的冒号
    'no-extra-parens': 2, //禁止非必要的括号
    'no-func-assign': 2, //禁止重复的函数声明
    'no-implicit-coercion': 1, //禁止隐式转换
    'no-mixed-spaces-and-tabs': [2, false], //禁止混用tab和空格
    'linebreak-style': [0, 'windows'], //换行风格
    'no-multi-spaces': 1, //不能用多余的空格
    'no-spaced-func': 2, //函数调用时 函数名与()之间不能有空格
    'no-trailing-spaces': 2, //一行结束后面不要有空格
    'quotes': [2, 'single'], //引号类型 `` "" ''
    'no-undef': 2, //不能有未定义的变量
    'no-underscore-dangle': 0, //标识符不能以_开头或结尾
    'no-unreachable': 2, //不能有无法执行的代码
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }], //不能有声明后未被使用的变量或参数
    'no-use-before-define': 2, //未定义前不能使用
    'no-var': 2, //禁用var，用let和const代替
    'key-spacing': [2, { beforeColon: false, afterColon: true }], //对象字面量中冒号的前后空格
    'semi-spacing': [0, { before: false, after: true }], //分号前后空格
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
