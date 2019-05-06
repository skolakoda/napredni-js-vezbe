export default Vue.component('dodaj-ime', {
  data() {
    return {
      poruka: ''
    }
  },

  methods: {
    posalji(e) {
      // console.dir(e.target)
      const ime = e.target[0].value
      fetch('http://192.168.0.104:8080/dodaj-ime', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ime}) // object property shorthand
      })
        .then(res => res.text())
        .then(res => this.poruka = res)
    }
  },

  template: `
  <form v-on:submit="this.posalji">
    <h2>Dodaj ime</h2>
    <input required>
    <button>Potvrdi</button>
    <p>{{poruka}}</p>
  </form>
  `
})
