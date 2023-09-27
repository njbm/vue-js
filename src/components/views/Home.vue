<template>
   <div>
      <Products @newItemAdded="addCartItem" :items="items" />
   </div>
</template>

<script>
import Products from './Products.vue';

import data from '@/data';
   export default {
      components: {
         Products, 
      },
      data() {
         return {
            items: [], cart:[]// Initialize the items data property if needed
         };
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
    }
      },
   };
</script>

<style lang="scss" scoped>

</style>