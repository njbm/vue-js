<template>
<table class="table">
  <thead>
    <tr>
      <th scope="col">Item</th>  <th scope="col">Image</th>  <th scope="col">Price</th> <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item,index) in items" :key="index">
      <td>{{ item.title }}</td>  <td><img class="rounded-circle" :src="item.image" height="30" width="30"></td>  
      <td>{{ item.price}} $</td> <td><button @click="removeItem(index)" class="btn btn-sm btn-danger">Delete</button></td>
    </tr>
  </tbody> 
     <tfoot >
      <td></td><td class="t">Total Price : </td> <td colspan="3">&nbsp; {{total}} $</td> 

    </tfoot>
    
</table>
<center ><div v-if="items.length>0" class="row col-md-6">
   <button @click="checkout" class="btn btn-outline-success btn-lg ">Checkout</button>
</div></center>
</template>

<script>
export default{

   computed:{

            items(){
               return this.$store.getters.getCart
            },
            total(){
               var total=0;
               this.items.forEach(item => {
                  total += parseFloat(item.price)
               });
               return total.toFixed(2);
            }

   },
   methods:{
      removeItem(index){
         this.$store.commit('removeItem', index)
      },
      checkout(){
         if(confirm("Are You Sure You want to checkout..?")){
            this.$store.commit('clearCart')
         }
         
      }
   }

}
</script>

<style lang="scss" scoped>

</style>