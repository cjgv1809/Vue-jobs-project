import './assets/main.css'
import 'primeicons/primeicons.css'
import 'vue-toastification/dist/index.css'

import { createApp } from 'vue'
import App from './App.vue'
import Toast from 'vue-toastification'
import router from './router'

const app = createApp(App)

app.use(router)
app.use(Toast, {
  position: 'top-right',
  timeout: 5000
})

app.mount('#app')
