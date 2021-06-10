import Vue from 'vue'
import VueRouter from 'vue-router'
import QuestionCategories from '@/views/QuestionCategories'
import QuestionScreen from '@/views/QuestionScreen'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'categories',
        component: QuestionCategories
    },
    {
        path:'/categories/:id',
        name: 'questionBox',
        component: QuestionScreen
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router