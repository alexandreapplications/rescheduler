module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'plugin:prettier/recommended',
    'prettier',
    'prettier/vue'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    // 'prettier/prettier': [
    //   'error',
    //   {
    //     htmlWhitespaceSensitivity: 'ignore',
    //     semi: false,
    //     singleQuote: true
    //   }
    // ]
  }
  // rules: {
  //   'prettier/prettier': [
  //     'error',
  //     {
  //       htmlWhitespaceSensitivity: 'ignore',
  //       semi: false,
  //       singleQuote: true
  //     }
  //   ],
  //   'vue/html-self-closing': [
  //     'error',
  //     {
  //       html: {
  //         void: 'any'
  //       }
  //     }
  //   ],
  //   'vue/no-use-v-if-with-v-for': ['off'],
  //   'vue/component-name-in-template-casing': ['off'],
  //   'vue/no-unused-components': ['off'],
  //   eqeqeq: ['off'],
  //   'no-new': ['off']
  // }
}
