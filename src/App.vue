<template>
  <div id="app">

<router-view></router-view>
    
    
    <Navbar />
    
    <div class="row d">
      <div class="col-sm-9">

      <Products @newItemAdded="addCartItem" :items="items" />

      </div>
      <div class="col-sm-3">
        <Cart @itemRemoved="removeItem" :items="cart" />
      </div>
    </div>
  </div>
</template>


<script>


import Navbar from './components/Navbar.vue';
import Products from './components/Products.vue';
import Cart from './components/Cart.vue';
import data from './data'

export default {
  name: 'App',
  components: { Navbar, Products, Cart },
  data(){
    return {
      items:[],cart:[]
    }
  },
  mounted(){
    this.items =data
  },
  methods: {
    addCartItem(item){
      this.cart.push(item)
    },
    removeItem(index){
      this.cart.splice(index, 1)
    },
    search(keyword){
      this.items = data.filter(item=>{
        return item.title.toLocaleLowerCase().indexOf(keyword.toLocaleLowerCase()) !== -1
      });
    }
  },

}
</script>

<style>
.d{padding: 20px;}
</style>
