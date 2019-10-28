<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title class="headline text-uppercase">
        <span>Trouve ton projet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-5 cyan with white--text">Inscription</v-btn>
      <v-btn class="cyan with white--text">Connexion</v-btn>
    </v-app-bar>

    <v-content>
      <Welcome/>
      <Login/>
    </v-content>
  </v-app>
</template>

<script>
import Welcome from './components/Welcome'
import Login from './components/Login'

export default {
  name: 'App',
  components: {
    Login,
    Welcome
  },
  data: () => ({
    //
  })
}
</script>
