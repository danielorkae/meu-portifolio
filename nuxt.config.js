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
    ],
    link: [

    ]
  },
  meta:{
    theme_color:'#3273dc'
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
  manifest:{
    name: 'Mateus Cordeiro Full Stack Developer',
    short_name:'CordeiroDev',
    description: 'Esse app mostra as minhas habilidades e experiencias como desenvolvedor full stack.',
    lang: 'pt_BR',
    background_color: "#3273dc",
    theme_color:'#3273dc'
  },
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/language.js'
    
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
    '@nuxtjs/pwa',
    [
      'nuxt-i18n',
      {
        locales: [
          {
            code: 'br',
            iso: 'pt-BR',
            name: 'Português Brasileiro',
          },
          {
            code: 'us',
            iso: 'en-US',
            name: 'American English'
          } 
        ],
        defaultLocale: 'br',
        vueI18n: {
          fallbackLocale: 'br',
          messages: {
            us: require('./languages/en_US.json'),
            br: require('./languages/pt_BR.json')
          }
        }
      }
    ],
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
