<template>
  <v-container>
    <v-layout align-center justify-center class="mt-5">
      <h2>Bonjour, {{username}} !</h2>
    </v-layout>
    <v-layout align-center justify-center>
      Ces projets pourraient t'intéresser :
    </v-layout>
    
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  props: {
    username: {
      type: String,
      default: '[USER]'
    }
  },
  data: () => ({
    color: 'red',
    projects: [],
    model: '',
    description: ''
  }),
  created: function () {
    setTimeout(this.getProjects(), 500)
  },
  methods: {

    getProjects () {
      let data = {
        tags: ['web', 'c']
      }
      this.axios.post('http://localhost:4000/api/getprojects', {
        data: data
      })
        .then((response) => {
          if (response.data.message === 'ok') {
            this.projects = response.data.matchingProjects
            console.log(response.data.matchingProjects)
          } else {
            // Si on ne peut pas charger de projet, alors on retourne sur la page welcome
            this.$router.push('Welcome')
          }
        })
    },
    toggle () {
      console.log('sdqfsdf')
      this.description = 'qsfdqsdf'
    }
  }
}
</script>
