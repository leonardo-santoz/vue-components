import Vue from 'vue'

Vue.component('lps-component', {
  data() {
    return {
      titulo: 'Curso de vuejs'
    }
  },
  template: '<h1>{{titulo}}</h1>'
})

new Vue({
  el: '#app',
})
