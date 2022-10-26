<script>
  export default{
    name:'App',
    methods:{
      afficherUser(unId){
        this.$router.push({name:'User', params:{id:unId}})
      }
    }
  }
</script>

<template>


  <nav>
    <router-link to="/">Acceuil</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/testAPI">API</router-link> |
    <router-link to="/testApiAsync">APIAsync</router-link> |
    <router-link to="/testApiHeaders">APIHeaders</router-link> |
    <router-link to="/testApiHandle">APIHandle</router-link> |
    <router-link to="/testApiPost">APIPost</router-link> |
    <router-link :to="{name:'User', params:{id:'JCVD'}}">User</router-link>
    <!-- Version alternative on utilise le router plutot dans une fonction-->
    <button @click="afficherUser('Canal du midi')">Utilisateur 2</button>
  </nav>
  
  <router-view>
    
  </router-view>

</template>

<style scoped>
.router-link-active{
  font-weight: bold;
  color: lightcoral;
}
</style>
