import Vue from 'vue'
import login from './login.vue'
import VueRouter from "vue-router"
Vue.use(VueRouter)

import 'bootstrap/dist/css/bootstrap.css'
import './css/app.css' 

// import MintUi from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUi)
import { Button } from 'mint-ui'
Vue.component('mybtn', Button)

import './lib/mui/css/mui.min.css'
 
import router from './router.js'

var vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    render: c=>c(login),
    router
})