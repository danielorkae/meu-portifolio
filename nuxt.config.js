module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: "Mateus Cordeiro Full Stack Developer",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Programador Full Stack com Experiência nas linguagens PHP, Javascript e seus frameworks: Codeigniter,Laravel,VueJS e NuxtJS." },
      { name: 'msapplication-TileColor', content: '#ffffff'},
      { name: 'msapplication-TileImage', content: '/icon/ms-icon-144x144.png'},
      { name: 'theme-color', contant: '#ffffff'}
    ],
    link: [
      { rel: 'apple-touch-icon',sizes: '57x57', href: '/icon/apple-icon-57x57.png' },
      { rel: 'apple-touch-icon',sizes: '60x60', href: '/icon/apple-icon-60x60.png' },
      { rel: 'apple-touch-icon',sizes: '72x72', href: '/icon/apple-icon-72x72.png' },
      { rel: 'apple-touch-icon',sizes: '76x76', href: '/icon/apple-icon-76x76.png' },
      { rel: 'apple-touch-icon',sizes: '114x114', href: '/icon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon',sizes: '120x120', href: '/icon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon',sizes: '144x144', href: '/icon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon',sizes: '152x152', href: '/icon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon',sizes: '180x180', href: '/icon/apple-icon-180x180.png' },
      { rel: 'icon', type: 'image/png',sizes: '192x192', href: '/icon/android-icon-192x192.png' },
      { rel: 'icon', type: 'image/png',sizes: '32x32', href: '/icon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png',sizes: '96x96', href: '/icon/favicon-96x96.png' },
      { rel: 'icon', type: 'image/png',sizes: '16x16', href: '/icon/favicon-16x16.png' },
      { rel: 'manifest', href: '/manifest.json' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/font-awesome',
    '@nuxtjs/pwa'
   ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
    }
  }
}
