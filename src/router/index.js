import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import CreateStrategy from '../views/CreateStrategy.vue'
import Mine from '../views/Mine.vue'
import Footer from '../components/Footer.vue'

const routes = [
    { path: '/', name: 'Home', components: { default: Home, footer: Footer } },
    { path: '/createStrategy', name: 'CreateStrategy', component: CreateStrategy },
    { path: '/mine', name: 'Mine', components: { default: Mine, footer: Footer } },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router