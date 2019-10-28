<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title class="headline text-uppercase">
        <span>Trouve ton projet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Inscription/>
      <Connexion/>
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
import Inscription from './components/Inscription'
import Connexion from './components/Connexion'

export default {
  name: 'App',
  components: {
    Login,
    Welcome,
    Inscription,
    Connexion
  },
  data: () => ({
    //
  })
}
</script>
