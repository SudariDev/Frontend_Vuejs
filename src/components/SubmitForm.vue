<template>
<b-container>

  <b-card title="Card title" sub-title="Card subtitle">
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="text"
        class="form-control"
        id="email"
        required v-model="users.email"
        name="email"/>
      </div>

       <div class="form-group">
        <label for="password">Password</label>
        <input type="text"
          class="form-control"
          id="password"
          required
          v-model="users.password"
          name="password"
        />
      </div>

  <button @click="SaveUser" class="btn btn-success">Submit</button>
    </div>

       <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUser">Add</button>
    </div>
  </div>
  <b-link href="#" class="card-link">
  </b-link>
  </b-card>
</b-container>
</template>



<script>


import axios from "axios"

export default {
  name:"add-user",
  data(){
    return{
      users:{
        errors:[],
        id:null,
        email:"",
        password:"",
        published:false

      },
      submitted:false
    };
  },

methods:{
  SaveUser(){

    const data = {
    
        email: this.users.email,
        password: this.users.password,
    }

    axios.post('http://localhost:8080/createUser',data).then((res)=>{
      console.log(res);
      this.showAlert()

     

    }).catch(err=>console.log(err))
  },


   showAlert() {
    this.$swal.fire(
  'Good job!',
  'Successfully Submitted!!!'
)
    },

 DisplayUser()

  {

     this.$router.push('/display');
  },

 checkForm:function(e){
     this.errors=[];

     if(!this.email){
    this.errors.push("Email required. ");
    }else if(!this.validEmail(this.email)){
        this.errors.push('Valid email required. ');
      }
  
      if(!this.password){
        this.errors.push("Password required. ");
      }
      if(!this.errors.length){
        return true;
      }

      e.preventDefault();
 },
      validEmail:function(email){
          var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return re.test(email);
      }
  }
}
</script>
 
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>