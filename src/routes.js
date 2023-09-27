// Import your route components
// import Home from './components/views/Home.vue'
import About from './components/views/About.vue'
import Contact from './components/views/Contact.vue'
import Products from './components/views/Products.vue'
import ProductDetails from './components/views/ProductDetails'


// Define your routes
const routes = [
//   { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact },
  { path: '/', component: Products },
  { path: '/item/:id', component: ProductDetails },
]

export default routes
