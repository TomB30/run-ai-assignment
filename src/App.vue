<script>
import { RouterLink, RouterView } from "vue-router";
import appHeader from "./cmps/app-header.vue";
export default {
  data(){
    return {
      
    }
  },
  components:{
    appHeader
  },
  created(){
    this.$store.dispatch({type:'loadCompanies'})
  }
}
</script>

<template>
  <app-header></app-header>
  <RouterView />
</template>
