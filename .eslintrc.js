module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base'],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'implicit-arrow-linebreak': 'off',
    'max-len': 'off',
    'object-curly-newline': 'off',
    'operator-linebreak': 'off',
  },
  ignorePatterns: [
    'tests',
    'setupTests.js',
    '*.test.js',
    'migrations',
    'models',
  ],
};
