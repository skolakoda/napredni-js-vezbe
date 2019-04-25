// definisemo komponente

const Home = {
  template: '<h2>{{pozdrav}}</h2>',
  data() {
    return {
      pozdrav: 'Zdravo svete'
    }
  },
}

const About = {
  template: '<h2>About {{ime}}</h2>',
  data() {
    return {
      ime: 'Petar Petrovic'
    }
  },
}

const User = {
  template: '<h2>User {{ $route.params.id }}</h2>'
}

// definisemo putanje

const routes = [{
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
  routes
})

new Vue({
  el: '#app',
  router
})
