// definisemo komponente
import RandomIme from './components/random-ime.js';

const Imena = {
  template: '<h2>Imena</h2>'
}

const Dodaj = {
  template: '<h2>Dodaj ime</h2>'
}

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
    path: '/dodaj/:id',
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
