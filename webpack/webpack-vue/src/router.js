import VueRouter from "vue-router"

import account from './main/Accound.vue'
import goodlist from './main/GoodList.vue'

import deng from './subcom/deng.vue'
import register from './subcom/register.vue'

var router = new VueRouter({
    routes: [
        { 
            path: '/account',
            component: account,
            children: [
                { path: 'deng', component: deng },
                { path: 'register', component: register }
            ]
        },
        { path: '/goodlist',component:goodlist }
    ]
})  

export default router