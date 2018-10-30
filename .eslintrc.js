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
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  "overrides": [
    {
      "files": [ "bin/*.js", "lib/*.js" ],
      "excludedFiles": "store.js",
      "rules": {
        "quotes": [ 2, "single" ]
      }
    }
  ]
}
