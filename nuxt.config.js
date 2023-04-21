export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'app',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/auth-next'],

  axios: {
    baseURL: 'http://localhost:1337',
  },
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: 'users/login',
            method: 'post',
            propertyName: 'token',
          },
          logout: false,
          user: {
            url: 'users/me',
            method: 'post',
            property: 'data',
          },
        },
        user: {
          property: 'data',
          // autoFetch: true
        },
        tokenRequired: true,
        tokenType: 'Bearer',
      },
    },
  },
  router: {
    middleware: ['auth'],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['defu'],
  },
}
