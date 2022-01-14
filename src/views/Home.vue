<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <br> -->
    <h1>Home</h1>
 <br>

    <router-link to="/display">Display Users</router-link>
  
  </div>
</template>

<script>
// @ is an alias to /src
import ViewUser from '@/components/ViewUser.vue'

export default {
  name: 'Home'
 
}
</script>
