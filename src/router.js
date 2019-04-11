import Vue from 'vue';
import VueRouter from  'vue-router';
Vue.use(VueRouter);

import home from './components/home.vue'
import test from './components/test.vue'

export default function(){
    return new VueRouter({
        mode:'history',
        routes:[
            {
                path:'/',
                component:test
            },
            {
                path:'/home',
                component:home
            }
        ]
    })
}