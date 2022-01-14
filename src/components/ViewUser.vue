
<template>
<div>
  <div  class="container">
   <button @click="getAllusers" type="button" class="btn btn-primary">Show User Details</button>
   <br>
   <br>
    <table class="table table-bordered"> 
    <thead>
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
    </tr>
  </thead>

  <tbody>
    <tr v-for="user in users" v-bind:key="user.userId" >
    
      <th scope="row">{{user._id}}</th>
      <td>{{user.email}}</td>
      <td>{{user.password}}</td>
      <td> <button @click="DeleteUser(user._id)" type="button" class="btn btn-danger">DELETE</button>      </td>
      <td> <button @click="UpdateUser(user._id)" type="button" class="btn btn-success">UPDATE</button>      </td>
      
  
    </tr>
   
  </tbody>
    </table>
 </div>

<button @click=" AddUserPage" type="button" class="btn btn-primary">ADD USER</button>
  
 
</div>
  

</template>


<script>
import SubmitForm from '@/components/SubmitForm.vue'
import axios from "axios"

export default {
  name:'ViewUser',
  data(){
    return{
      users:[],
    }
  },

methods:{
  getAllusers(){
    axios.get('http://localhost:8080/getUsers').then((res)=>{
      this.users=res.data;
      console.log(res.data);

    }).catch(err=>console.log(err))
  },
  AddUserPage(){
    this.$router.push('/new');
  },

  UpdateUser(id)

  {

  
     this.$router.push('/update/'+id);
  },



DeleteUser(id)
  {
    axios.delete('http://localhost:8080/delete'+id).then((res)=>
    {
      console.log("Deleted"+" "+res.status)
      this.getAllusers();
    }).catch(err=>console.log(err))
  },





},
}

</script>
 
