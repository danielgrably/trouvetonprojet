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
  data () {
    return {
      color: 'red'
    }
  }
}
</script>
