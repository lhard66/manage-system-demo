// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/standard/standard/blob/master/docs/RULES-en.md
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  rules: {
    // allow async-await
    'generator-star-spacing': 'off',
    'no-unused-vars': 0,
    'arrow-parens': 0,
    'comma-dangle': 0,
    'global-require': 0,
    'linebreak-style': 0,
    'semicolon': 0,
    'semi': 0,
    'no-plusplus': 0,
    'quote-props': 0,
    'eqeqeq': 0,
    'max-len': 0,
    'prefer-rest-params': 0,
    'prefer-template': 0,
    'no-console': 0,
    'no-underscore-dangle': 0,
    'func-names': 0,
    'prefer-const': 0,
    'prefer-arrow-callback': 0,
    'operator-assignment': 0,
    'no-param-reassign': 0,
    'space-before-function-paren': 0,
    'no-useless-computed-key': 0,
    'prefer-promise-reject-errors': 0,
    'no-multi-spaces': 0,
    'padded-blocks': 0,
    'eol-last': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
