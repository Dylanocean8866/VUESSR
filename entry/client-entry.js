import {createApp}   from  '../src/app.js';
let app = createApp();
if(window.__STATE__){
    app.$store.replaceState(window.__STATE__);
}
window.onload = ()=>{
    app.$mount('.mainWrapper')
}