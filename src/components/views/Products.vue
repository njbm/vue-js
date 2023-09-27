<template>
<div  class="row">
    <div class="col-sm-6 col-md-4" style=" margin-top:20px;" v-for="(item, index) in items" :key="index">
      <div class="card">
        <img class="card-img-top" :src="item.image" alt="Product" height="350">
        <div class="card-body">
          <h5 class="card-title">{{ item.title}}</h5>
          <p class="card-text">{{ item.caption}}</p>
          <p class="card-text"><strong>Price : {{ item.price}} $</strong></p>
          <a @click="addToCart(item)" class="btn btn-primary">Add to Cart</a> &nbsp;
          <router-link class="btn btn-primary" :to="/item/ + item.id">Details</router-link>
        </div>
      </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'
   export default {     // props: ['items'],
      data(){
        return { items:[], loading:false }
      },
      mounted(){
        axios.get('http://localhost:3000/items').then(response =>{
            console.log(response)
            this.items = response.data 
          })
      },
      methods:{
        addToCart(item){
         this.$emit ('newItemAdded',item)
        },
       
      }

   }
</script>

<style scoped>

</style>