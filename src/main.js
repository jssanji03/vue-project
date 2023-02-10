import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'
import App from './App.vue'
import './style/index.css'

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
