// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/image'],
  css : [ "~/assets/styles/main.scss" ],
  runtimeConfig: {
    public: {
      siteUrl: '',
      contactFormEndpoint: 'https://contact-form.clementprevost.com',
      googleReviewsEndpoint: ''
    }
  },
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  devtools: { enabled: true },
  compatibilityDate: '2024-04-03',
  vite: {
    optimizeDeps: {
      include: ['gsap']
    }
  }
})
