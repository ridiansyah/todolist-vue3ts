import './assets/styles/index.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Pages from './Pages.vue'

const app = createApp(Pages)

app.use(createPinia())

app.mount('#app')
