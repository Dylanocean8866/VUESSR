import Vue from 'vue'
import App from  './App.vue'
import createRouter from './router.js'
import createStore from './store.js';

export function createApp(){
    return new Vue({
        render: h => h(App),
        router:createRouter(),
        store:createStore()
    })
}