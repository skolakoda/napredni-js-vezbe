new Vue({
  el: '#app',

  data() {
    return {
      filmovi: [],
    }
  },

  mounted() {
    fetch('https://baza-filmova.herokuapp.com/filmovi/')
      .then(response => response.json())
      .then(response => {
        this.filmovi = response
      })
  },

})
