<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title class="headline text-uppercase">
        <span>Trouve ton projet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <Connexion/>
      <Connexion/>
    </v-app-bar>

    <v-content>
      <Navbar/>
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
import Informations from './components/Informations'
import Navbar from './components/Navbar'

export default {
  name: 'App',
  components: {
    Login,
    Welcome,
    Inscription,
    Connexion,
    Informations,
    Navbar
  },
  data: () => ({
    //
  })
}
</script>
