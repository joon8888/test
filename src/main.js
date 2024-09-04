import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css' 

createApp(App).use(Viewer).use(router).mount('#app')
