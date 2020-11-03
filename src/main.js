import Vue from 'vue'

// Vue.component('lps-component', {
//   data() {
//     return {
//       titulo: 'Curso de vuejs',
//       contador: 0
//     }
//   },
//   methods: {
//     incrementar: function () {
//       this.contador++
//     }
//   },
//   template: `
//   <div>
//     <h1>{{titulo}}</h1>
//     <button @click="incrementar"> Clicado {{ contador }} vezes</button> 
//   </div>
//   `
// })

const lpsComponent = {
  data() {
    return {
      titulo: 'Curso de vuejs',
      contador: 0
    }
  },
  methods: {
    incrementar: function () {
      this.contador++
    }
  },
  template: `
  <div>
    <h1>{{titulo}}</h1>
    <button @click="incrementar"> Clicado {{ contador }} vezes</button> 
  </div>
  `
}

new Vue({
  el: '#app',
  components: {
    'lps-component': lpsComponent
  }
})

new Vue({
  el: '#app1',
})
