<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title class="headline text-uppercase">
        <span>Trouve ton projet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
<<<<<<< HEAD
      <v-btn class="pink with white--text">Connexion</v-btn>
      <!--<v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
      -->
=======
      <v-btn class="mr-5 cyan with white--text">Inscription</v-btn>
      <v-btn class="cyan with white--text">Connexion</v-btn>
>>>>>>> 50b82e5a0cd9d2ed8e4f0a063c22869d52d8b6d5
    </v-app-bar>
  
    <v-content>
<<<<<<< HEAD
      <HelloWorld/>
      Ce site à pour but de faciliter la recheche et le partage de projet.
      <br>Si tu souhaites joindre un projet, ou proposer tes idées, connectes toi sans plus attendre.
      <!--<Login/>-->
      <SignIn/>
=======
      <Welcome/>
      <Login/>
>>>>>>> 50b82e5a0cd9d2ed8e4f0a063c22869d52d8b6d5
    </v-content>
  </v-app>
</template>

<script>
<<<<<<< HEAD
import HelloWorld from './components/HelloWorld'
// import Login from './components/Login'
import SignIn from './components/SignIn'
=======
import Welcome from './components/Welcome'
import Login from './components/Login'
>>>>>>> 50b82e5a0cd9d2ed8e4f0a063c22869d52d8b6d5

export default {
  name: 'App',
  components: {
<<<<<<< HEAD
    HelloWorld,
    // Login,
    SignIn
=======
    Login,
    Welcome
>>>>>>> 50b82e5a0cd9d2ed8e4f0a063c22869d52d8b6d5
  },
  data: () => ({
    //
  })
}
</script>
