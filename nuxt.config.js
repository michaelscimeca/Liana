const seoTitle = 'Red Square';
const seoDescription = 'default meta description.';
const seoImage = 'default/og/image';
// TODO: Need to swap out API url as well as query logic for your own dynamic pages
// TODO: Uncomment Prismic require as well as `route` in `generate` object at the
// bottom of this file

module.exports = {
  mode: 'universal',
  telemetry: false,
  /*
  ** Headers of the page
  */
  head: {
    title: seoTitle,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex, nofollow' },
      { hid: 'description', name: 'description', content: seoDescription },

      { property: 'og:site_name', content: seoTitle },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:type', content: 'website' },
      { hid: 'ogTitle', property: 'og:title', content: seoTitle },
      { hid: 'ogDescription', property: 'og:description', content: seoDescription },
      { hid: 'ogImage', property: 'og:image', content: seoImage },
      { hid: 'ogSecureImage', property: 'og:image:secure_url', content: seoImage },

      { property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitterTitle', property: 'twitter:title', content: seoTitle },
      { hid: 'twitterDescription', property: 'twitter:description', content: seoDescription },
      { hid: 'twitterImage', property: 'twitter:image', content: seoImage }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon-32.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32.png' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '16x16' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '32x32' },
      { rel: 'icon', type: 'image/png', href: '/favicon-32.png', sizes: '96x96' },
      { rel: 'apple-touch-icon', href: '/touch-icon-152.png' },
      { rel: 'apple-touch-icon', href: '/touch-icon-152.png', sizes: '152x152' },
      { rel: 'apple-touch-icon', href: '/touch-icon-152.png', sizes: '167x167' },
      { rel: 'apple-touch-icon', href: '/touch-icon-152.png', sizes: '180x180' }
    ],
    script: [
      { src: 'https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver', body: true }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/imports.scss'
  ],

  styleResources: {
    scss: [
      'assets/scss/_laconic.scss',
      'assets/scss/_variables.scss',
      'assets/scss/_foundation-settings.scss'
    ]
  },

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vue-observe-visibility', mode: 'client' },
    { src: '~/plugins/locomotive-component.js' },
    { src: '~/plugins/locomotive-plugin.js', mode: 'client' }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-user-agent',
    '@nuxtjs/style-resources',
    'nuxt-gsap-module',
    '@nuxt/content'
  ],
  content: {
    // Options
  },
  gsap: {
    extraPlugins: {
      scrollTrigger: true
    },
    extraEases: {
      // expoScaleEase: true
    },
  },

  /*
  ** Dynamic Route Construction
  */
  generate: {
    // routes,
    fallback: '404.html'
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    }
  }
};
