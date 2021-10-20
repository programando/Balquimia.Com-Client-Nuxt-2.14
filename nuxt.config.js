//require('dotenv').config(); // process.env.variable-definida
import dotenv from "dotenv"; dotenv.config();

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Balquimia S.A.S.',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui' },
      { name: 'keywords', content: '' },
      { hid: 'http-equiv', name: 'http-equiv', content: 'text/html' },
      { hid: 'http-equiv', name: 'X-UA-Compatible', content: 'IE=edge' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
  env: {
      URL_BASE: process.env.URL_BASE,
      URL_API: process.env.URL_API,
      URL_WEB: process.env.URL_WEB,
      URL_RESET_PASS: process.env.URL_RESET_PASS,
    },
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
      '@/assets/css/app.css',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
      { src: '~/plugins/datepicker', ssr: false },
      { src: '~/plugins/persistedState.client.js' },
      { src: '~/plugins/filters.js' },

  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: false,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/dotenv',
    '@aceforth/nuxt-optimized-images',
  ],

    optimizedImages: {
          inlineImageLimit    : 1000,
          imagesName          : ({ isDev }) => isDev ? '[path][name][hash:optimized].[ext]'         : 'img/[contenthash:7].[ext]',
          responsiveImagesName: ({ isDev }) => isDev ? '[path][name]--[width][hash:optimized].[ext]': 'img/[contenthash:7]-[width].[ext]',
          handleImages        : ['jpeg', 'png', 'svg', 'webp', 'gif'],
          optimizeImages      : true,
          optimizeImagesInDev : false,
          defaultImageLoader  : 'img-loader',
          mozjpeg: {
            quality: 80,
          },
          optipng: {
            optimizationLevel: 5,
          },
          pngquant: false,
          gifsicle: {
            interlaced       : true,
            optimizationLevel: 2,
          },
          svgo: {
            // habilitar/deshabilitar plugins svgo aquí
          },
          webp: {
            preset : 'default',
            quality: 75,
          },
        },
    

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/dayjs',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
      ['nuxt-imagemin', {
          optipng: { optimizationLevel: 5 },
          gifsicle: { optimizationLevel: 2 }
        },
    ],
     ['nuxt-tailvue', {toast: true}],

  ],

 
  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
        /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    extractCSS: true,
  },

    purge: {

    content: [
      'node_modules/tv-*/dist/tv-*.umd.min.js',
    ],
  },
  
  purgeCSS: {
    mode: 'postcss',
    enabled: (process.env.NODE_ENV === 'production')
  },


    
}
