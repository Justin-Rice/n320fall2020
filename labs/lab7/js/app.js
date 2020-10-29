


fetch('data/data.json')
.then(response => response.json())
.then(data => console.log(data));



new Vue({
        el: '#app',
        data () {
          return {
            characters: null
          }
        },
        mounted () {
          axios
            .get('data/data.json')
            .then(response => (this.characters = response.characters))
        }
    })
    