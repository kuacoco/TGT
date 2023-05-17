import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

import Home from './views/Home.vue'
import CreateStrategy from './views/CreateStrategy.vue'
import Mine from './views/Mine.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/createStrategy', name: 'CreateStrategy', component: CreateStrategy },
    { path: '/mine', name: 'Mine', component: Mine },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)

app.use(ElementPlus)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(router)
app.mount('#app')