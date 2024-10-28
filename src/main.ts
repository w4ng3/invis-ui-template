import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import InvisUI from '@w4ng3/invis-ui'
import '@w4ng3/invis-ui/dist/style.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(InvisUI)

app.mount('#app')
