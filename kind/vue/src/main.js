import { createApp } from 'vue'
import App from './App.vue'
import '../css/general.css'

export const eventBus = createApp(App)

createApp(App).mount('#app')