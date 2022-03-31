module.exports = {
  root: true,
  env: {
    browser: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    'plugin:vue/base'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    "class-methods-use-this": 0,
    "react/jsx-filename-extension": 0,
    "global-require": 0,
    "react/destructuring-assignment": 0,
    "linebreak-style": 0,
    "import/no-dynamic-require": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "semi": [2, "always"],
    "max-len": [
      "error",
      {
        "code": 120,
        "ignoreUrls": true,
        "ignoreComments": true,
        "ignoreStrings": true,
        "ignoreTemplateLiterals": true
      }
    ],
    "new-cap": [
      2,
      {
        "capIsNew": false,
        "newIsCap": true
      }
    ],
    "no-param-reassign": 0,
    "no-shadow": 0,
    "no-tabs": 2,
    "no-underscore-dangle": 0,
  }
};
