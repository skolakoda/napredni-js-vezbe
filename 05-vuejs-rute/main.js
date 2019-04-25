// definisemo komponente

const Home = {
  template: '<h2>Home</h2>'
}

const About = {
  template: '<h2>About</h2>'
}

const User = {
  template: '<h2>User {{ $route.params.id }}</h2>'
}

// definisemo putanje

const putanje = [{
    path: '/',
    component: Home
  },
  {
    path: '/about',
    component: About
  },
  {
    path: '/user/:id',
    component: User
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
