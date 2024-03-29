module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:all",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true // 允许对jsx进行解析
    },
    ecmaVersion: 2018, // 允许解析最新 ECMAScript 特性
    sourceType: 'module' // 允许使用import
  },
  plugins: [
    "prettier",
    "@typescript-eslint",
    "react"
  ],
  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-debugger": process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
