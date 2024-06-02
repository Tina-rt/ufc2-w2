// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  plugins: ['@/plugins/fontawesome'],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
    ],
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true }
})
