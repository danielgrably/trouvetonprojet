<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="headline text-uppercase" dark color="primary">
        <span>Trouve ton projet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="pink with white--text">Connexion</v-btn>
      <!--<v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
      -->
    </v-app-bar>

    <v-content>
      <HelloWorld/>
      Ce site à pour but de faciliter la recheche et le partage de projet.
      <br>Si tu souhaites joindre un projet, ou proposer tes idées, connectes toi sans plus attendre.
      <!--<Login/>-->
      <SignIn/>
    </v-content>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'
// import Login from './components/Login'
import SignIn from './components/SignIn'

export default {
  name: 'App',
  components: {
    HelloWorld,
    // Login,
    SignIn
  },
  data: () => ({
    //
  })
}
</script>
