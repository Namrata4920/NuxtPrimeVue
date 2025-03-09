import tailwindcss from "@tailwindcss/vite"
import Aura from '@primeuix/themes/aura'

export default defineNuxtConfig({
  compatibilityDate: "2024-02-25",
  devtools: { enabled: true },
  modules: [
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
        theme: {
            preset: Aura
        }
    }
  },
  build: {
    transpile: ['primevue']
  },
  css: [
    '~/assets/css/main.css',
    'primeicons/primeicons.css'
  ],
  components: true,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  }
})
