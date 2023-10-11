import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../pages/Home.vue')
    }, {
        path: '/users',
        name: 'users',
        component: () => import('../pages/TemplateUsers.vue'),
        children: [
            {
                path: '',
                name: 'users',
                component: () => import('../pages/Users.vue')
            },{
                path: ':id',
                name: 'userId',
                component: () => import('../pages/ShowUser.vue')
            },
        ],
    },
    {
        path: '/post',
        name: 'posts',
        component: () => import('../pages/TemplatePost.vue'),
        children: [
            {
                path: '',
                name: 'posts',
                component: () => import('../pages/Post.vue')
            },{
                path: ':id',
                name: 'postId',
                component: () => import('../pages/ShowPost.vue')
            },
        ],
    },

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
