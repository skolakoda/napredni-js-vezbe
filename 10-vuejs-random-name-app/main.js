// uvozimo komponente
import RandomIme from './components/random-ime.js';
import Imena from './components/imena.js';
import Dodaj from './components/dodaj-ime.js';

// definisemo putanje

const putanje = [{
    path: '/',
    component: RandomIme
  },
  {
    path: '/imena',
    component: Imena
  },
  {
    path: '/dodaj',
    component: Dodaj
  }
]

// inicijalizujemo ruter i aplikaciju

const router = new VueRouter({
  routes: putanje
})

new Vue({
  el: '#app',
  router,
})
