import  Vue from 'vue';
import Vuex  from 'vuex';
import axios from 'axios';
Vue.use(Vuex);

export  default  function(){
    return new Vuex.Store({ 
        state:{
            msg:'hello Vue'
        },
        mutations:{
            setMsg(state,msg){
      
                state.msg = msg;
            }
        },
        actions:{
            getMsg(){
              return axios.get('http://127.0.0.1:12306/api/getMsg').then(res=>{
                    this.commit('setMsg',res.data);
                })
            }
        }
    })
}