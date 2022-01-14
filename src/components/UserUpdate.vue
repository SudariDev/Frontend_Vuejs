<template>
  <div class="submit-form">

      <div class="form-group">
        <label for="email">Email</label>
        <input type="text"
        class="form-control"
        id="email"
        required v-model="user.email"
        name="email"/>
      </div>

       <div class="form-group">
        <label for="password">Password</label>
        <input type="text"
          class="form-control"
          id="password"
          required
          v-model="user.password"
          name="password"
        />
      </div>

  <button @click="UpdateUser" class="btn btn-success">Submit</button>

  </div>
</template>



<script>


import axios from "axios"
import { useRoute } from 'vue-router'

export default {
  name:"update-user",
  data(){
    return{
      user:{
        id:null,
        email:"",
        password:"",
        published:false

      }

    };
  },

created(){
  const route = useRoute()
    const id =route.params.id  

    console.log(id)
    axios.get('http://localhost:8080/find'+id).then((res)=>{


      this.user.id = res.data._id;
      this.user.email = res.data.email;
      this.user.password = res.data.password
 
     
      

    }).catch(err=>console.log(err))
},

methods:{



  UpdateUser(){

    const data = {
    
        email: this.user.email,
        password: this.user.password,
    }


   
    axios.put('http://localhost:8080/update'+this.user.id,data).then((res)=>{
      console.log(res);
      this.DisplayUser();
    }).catch(err=>console.log(err))
  },

  
   showAlert() {
    this.$swal.fire(
  'Your Data Updated'
)
    },

 DisplayUser()

  {

     this.$router.push('/display');
  },



},
}

</script>
 
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>