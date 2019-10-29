<template>
  <v-app>
    <v-app-bar app color="blue">
      <v-toolbar-title class="headline text-uppercase with white--text">
        <span>Trouve ton projet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        class="mr-5 cyan with white--text"
        @click="showSignup"
      >Inscription</v-btn>
      <v-btn
        class="mr-5 cyan with white--text"
        @click="showSignin"
      >Connexion</v-btn>
    </v-app-bar>

    <v-content>
      <Welcome />
      <v-overlay :value="signupOverlay">
        <SignUp @hide="hideSignup"/>
      </v-overlay>
      <v-overlay :value="signinOverlay">
        <SignIn @hide="hideSignin"/>
      </v-overlay>
    </v-content>
  </v-app>
</template>

<script>
import Welcome from './components/Welcome'
import SignUp from './components/SignUp'
import SignIn from './components/SignIn'

export default {
  name: 'App',
  components: {
    Welcome,
    SignUp,
    SignIn
  },

  data: () => ({
    signupOverlay: false,
    signinOverlay: false
  }),

  methods: {

    showSignin () {
      this.signinOverlay = true
    },

    showSignup () {
      this.signupOverlay = true
    },

    hideSignin () {
      this.signinOverlay = false
    },

    hideSignup () {
      this.signupOverlay = false
    }

  }
}
</script>
