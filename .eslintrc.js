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
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    'func-call-spacing': 'off',
    'no-console': 'off',
    'vue/require-prop-types': 'off'
  }
}
