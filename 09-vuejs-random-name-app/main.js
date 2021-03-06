// uvozimo komponente
import RandomIme from './components/random-ime.js';
import Imena from './components/imena.js';
import Dodaj from './components/dodaj-ime.js';
import './components/footer.js';

// inicijalizujemo ruter i aplikaciju

const router = new VueRouter({
  routes: [{
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
  },
]})

new Vue({
  el: '#app',
  router,
})
