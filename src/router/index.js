import {
    createRouter,
    createWebHashHistory,
    // createWebHistory
} from "vue-router";

const routes = [
    {
        path: '/G6/flowGraph/demo',
        name: 'flowGraph',
        component: () => import('@/views/G6/flowGraph.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
