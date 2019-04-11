const express = require("express");
const server = express();
const fs = require('fs');
const serverRenderer = require('vue-server-renderer');
const createApp  = require('./dist/bundle-server.js')['default'];

const renderer = serverRenderer.createRenderer({
    template:require('fs').readFileSync('./index.template.html','utf8')
})

server.get('/api/getMsg',(req,res)=>{
    res.send('send Msg');
})

server.get('/dist/bundle-client.js',(req,res)=>{
    res.sendFile(__dirname + '/dist/bundle-client.js')
});


server.get('*',(req,res)=>{
    let config = {url:req.url};
    createApp(config).then(app=>{
        let state = JSON.stringify(config.state);
        console.log(state);
        renderer.renderToString(app,{
                    src:`<script src="/dist/bundle-client.js"></script>`,
                    init:`<script> window.__STATE__ = ${state} </script>`
            },(err,html)=>{
            if(err){
                console.log(err);
            }else{
                res.end(html);
            }
        })
    }).catch(err=>console.log(err))
})

server.listen(12306,()=>{
    console.log('server is running at 12306')
});
































// const http = require("http");
// const Vue = require("vue");
// const fs = require('fs');
// const ServerRenderer = require("vue-server-renderer");

// const app  = new Vue({
//     data:{
//         val:'server side Render'
//     },
//     template:`
//     <div>
//         <input v-model="val">
//         <p>{{val}}</p>
//     </div>
//     `
// })
// const renderer = ServerRenderer.createRenderer({
//     template:fs.readFileSync('./index.template.html','utf8')
// });

// http.createServer((req,res)=>{

//     renderer.renderToString(app,{
//         init:`<script> var a = 10; console.log(a)</script>`,
//     },(err,html)=>{
//         if(!err){
//             res.end(html);
//         }else{
//             console.log(err);
//         }
//     })
// }).listen(12306);
// console.log('server is running')