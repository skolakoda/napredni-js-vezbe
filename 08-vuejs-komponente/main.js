Vue.component('random-ime', {
  data () {
    return {
      ime: '',
    }
  },

  mounted() {
    this.ucitajIme()
  },

  methods: {
    ucitajIme() {
      fetch('http://127.0.0.1:8080/random')
        .then(res => res.text())
        .then(res => this.ime = res)
    }
  },

  template: `
  <div>
    <h2>{{ime}}</h2>
    <button v-on:click="this.ucitajIme">Novo ime</button>
  </div>
  `
})

new Vue({ el: '#app' })
