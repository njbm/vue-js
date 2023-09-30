export const storage ={
   state:{
      products: [], cart:[]
   },
   getters:{
      getProducts(state){
         return state.products
      },
      getCart(state){
         return state.cart
      }
   },
   mutations:{
      addToCart(state, payload){
         state.cart.push(payload)
      },
      removeItem(state, payload){
         state.cart.splice(payload, 1)
      }
   }
}