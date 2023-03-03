import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Boostrap
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

//PrimeVue
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/bootstrap4-light-blue/theme.css'
import 'primeicons/primeicons.css'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(PrimeVue)
app.use(ToastService)
app.use(router)

app.mount('#app')
