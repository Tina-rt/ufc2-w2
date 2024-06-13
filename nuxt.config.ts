// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Hiking Pro - Your Ultimate Guide to the Outdoors"
    }
  },
  plugins: ['@/plugins/fontawesome'],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
    ],
  },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
  css: ['@/assets/css/main.css'],
  devtools: { enabled: true }
})