<template>
    <div class="wrapper">
        <p>{{msg}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return {
           
        }
    },
    computed:{
        msg(){
            return this.$store.state.msg
        }
    },
    serverRequest(store){
    
        return store.dispatch('getMsg');
    }
}
</script>
