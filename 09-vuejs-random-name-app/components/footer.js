export default Vue.component('vue-footer', {
  data() {
    return {
      naziv: 'Skolakoda'
    }
  },

  template: `
    <footer>
      <p>Created 2019. @ {{naziv}}</p>
    </footer>
  `
})