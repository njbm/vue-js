import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/css/bootstrap.css';

import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue' // main App component
import routes from './routes.js' // Import routes
import Vuex from 'vuex';
import { storage } from './store';

const store = new Vuex.Store(storage);

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

const app = createApp(App)

app.use(Vuex)
app.use(router)
app.use(store)

app.mount('#app')
