// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  image: {
    format: ['webp'],
    dir: 'assets/images',
    domains: ['dummyjson.com'],
  },
  css: ['~/assets/scss/main.scss'],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
        },
      },
    },
  },
  modules: ['@pinia/nuxt', 'nuxt-typed-router', '@vueuse/nuxt', '@nuxt/image'],
});