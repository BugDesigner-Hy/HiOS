module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-inline-comments":0,//禁止行内备注
    "no-irregular-whitespace": 2,//不能有不规则的空格
    "no-multi-spaces": 0,//不能用多余的空格
    "no-multiple-empty-lines": [1, {"max": 3}],//空行最多不能超过2行
    "no-spaced-func": 2,//函数调用时 函数名与()之间不能有空格
    "no-trailing-spaces": 1,//一行结束后面不要有空格
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],//不能有声明后未被使用的变量或参数
    "key-spacing": [0, { "beforeColon": false, "afterColon": true }],//对象字面量中冒号的前后空格
    "space-before-function-paren": [0, "always"],//函数定义时括号前面要不要有空格

  },
  parserOptions: {
    parser: 'babel-eslint'
  }

}
