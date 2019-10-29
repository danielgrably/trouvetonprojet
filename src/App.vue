<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title class="headline text-uppercase">
        <span>Trouve ton projet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn class="mr-5 cyan with white--text" @click="showSignUp">Inscription</v-btn>
      <v-btn class="cyan with white--text" @click="showSignIn">Connexion</v-btn>
    </v-app-bar>

    <v-content>
      <Navbar/>
      <Welcome/>
      <v-overlay
            :value="signinOverlay"
          >
      <SignIn @hide="hideSignIn"/>
      </v-overlay>
      <v-overlay
            :value="signupOverlay"
          >
      <SignUp @hide="hideSignUp"/>
      </v-overlay>
    </v-content>
  </v-app>
</template>

<script>
import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

export default {
  name: 'App',
  components: {
    Welcome,
    SignIn,
    SignUp
  },
  data: () => ({
    signinOverlay: false,
    signupOverlay: false
  }),

  methods: {
    showSignIn () {
      this.signinOverlay = true
    },
    showSignUp () {
      this.signupOverlay = true
    },
    hideSignIn () {
      this.signinOverlay = false
    },
    hideSignUp () {
      this.signupOverlay = false
    }
  }
}
</script>
