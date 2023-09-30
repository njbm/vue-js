<template>
   <div>
      <div v-if="item" class="container">
         <div class="row">
            <div class="col-md-6">
            <img :src="item.image" alt="Alt" class="product-image">
            </div>
            <div class="col-md-6">
            <h2>{{ item.title }}</h2>
            <p class="product-price">{{ item.price }}  TK</p>
            <p class="product-caption"> {{ item.caption }}</p>
            <p class="product-description">
               {{ item.description }}
            </p>
            <button @click="addToCart(item)" class="btn btn-primary">Add to Cart</button>
            </div>
         </div>
      </div><h3 v-else> Loading</h3>
   </div>
   
</template>

<script>
import axios from 'axios';
   export default {
      data(){
         return {
            item: null
         }
      },
      mounted(){
         this.ftechItem()
      },
      methods : {
         ftechItem(){
            var self = this
            axios.get('http://localhost:3000/item/' +this.$route.params.id).then(response=>{
               self.item= response.data
            });
         },
         addToCart(item){
            this.$store.commit('addToCart', item)
         }
      }
      
   }
</script>

<style scoped>
    .container{
      margin-top: 50px;
    }
    .product-image {
      max-width: 100%;
      height: auto;
    }

    .product-price {
      font-weight: bold;
      font-size: 20px;
      color: #f00;
    }

    .product-description {
      margin-top: 20px;
    }
</style>