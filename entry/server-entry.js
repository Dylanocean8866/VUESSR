import  {createApp}  from '../src/app.js';

export default function(config){
    return new Promise((resolve,reject)=>{
        let app = createApp();
        app.$router.push(config.url);
        let components = app.$router.getMatchedComponents()
        Promise.all(components.map(component=>{
            if(component.serverRequest){
                return component.serverRequest(app.$store)
            }else{
                return {code:404}
            }
        })).then(()=>{
            config.state = app.$store.state;
            resolve(app);
        }).catch(err=>reject(err))
    })
}