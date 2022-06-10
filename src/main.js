import { createApp } from 'vue'
import App from './App.vue'

// 定义全局组件
import HelloWorld from './components/HelloWorld'
import router from './router/index.js'

const app = createApp(App)
app.component('HelloWorld', HelloWorld)
app.use(router).mount('#app')
