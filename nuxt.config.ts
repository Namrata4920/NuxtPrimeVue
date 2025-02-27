// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2024-02-25",
  devtools: { enabled: true },
  css: ['~/assets/css/main.css','primeicons/primeicons.css'],
  components: true,
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})