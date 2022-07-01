import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

// 定义全局组件
import HelloWorld from './components/HelloWorld'
import router from './router/index.js'

const app = createApp(App)
app.component('HelloWorld', HelloWorld) // 注册全局组件
app.use(router)
app.use(ElementPlus)
app.mount('#app')
