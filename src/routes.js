// Import your route components
import Home from './components/views/Home.vue'
import About from './components/views/About.vue'
import Contact from './components/views/Contact.vue'

// Define your routes
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contact', component: Contact }
]

export default routes
