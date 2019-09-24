import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

this.axios.post('https://localhost:4000/votreAPI', {
  data: {
    sivousavezdeschamps: 'rentrez les ici'
  }
})
  .then((response) => {
    console.log('response', response)
  })
