import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Contact from './components/Contact.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/home', redirect: '/' },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
