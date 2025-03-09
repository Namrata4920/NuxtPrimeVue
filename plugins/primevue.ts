import { defineNuxtPlugin } from '#app'
import PrimeVue from 'primevue/config'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(PrimeVue)
    nuxtApp.vueApp.component('InputText', InputText)
    nuxtApp.vueApp.component('Select', Select)
})