export default Vue.component('imena', {
  data() {
    return {
      imena: []
    }
  },

  mounted() {
    fetch('http://127.0.0.1:8080/sva-imena')
      .then(res => res.text())
      .then(res => this.imena = res.split(', '))
  },

  template: `
  <div>
    <h2>Sva imena</h2>
    <ul>
      <li v-for="ime in imena">
        {{ime}}
      </li>
    </ul>
  </div>
  `
})
