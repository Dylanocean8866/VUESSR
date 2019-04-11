import  {createApp}  from '../src/app.js';

export default function(config){
    let app = createApp();
    app.$router.push(config.url);
    return app;
}