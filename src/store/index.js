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
      setProduct(state, payload){
         state.products = payload
      },
      addToCart(state, payload){
         state.cart.push(payload)
      },
      removeItem(state, payload){
         state.cart.splice(payload, 1)
      },
      clearCart(state){
         state.cart =[]
      }
   }
}