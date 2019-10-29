<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title class="headline text-uppercase">
        <span>Trouve ton projet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="connected" class="mr-5 cyan with white--text" >Mon compte</v-btn>
      <v-btn v-else class="mr-5 cyan with white--text" @click="showSignUp">Inscription</v-btn>
      <v-btn v-if="connected" class="cyan with white--text" @click="disconnect">Déconnexion</v-btn>
      <v-btn v-else class="cyan with white--text" @click="showSignIn">Connexion</v-btn>
    </v-app-bar>

    <v-content>
      <v-label v-if="connected">Connecté</v-label>
      <Welcome v-else/>
      <v-overlay
            :value="signinOverlay"
          >
      <SignIn @hide="hideSignIn" @connect="setConnectionStatus"/>
      </v-overlay>
      <v-overlay
            :value="signupOverlay"
          >
      <SignUp @hide="hideSignUp" @connect="setConnectionStatus"/>
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
    signupOverlay: false,
    connected: false
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
    },
    setConnectionStatus (value) {
      console.log('connection status ok')
      this.connected = value
    },
    // Envoie une requête de déconnexion au serveur
    disconnect () {
      this.axios.get('http://localhost:4000/api/logout')
        .then((response) => {
          if (response.data.message === 'disconnected' || response.data.message === 'already disconnected') {
            this.setConnectionStatus(false)
          }
        })
    },
    // Envoie une requête au serveur pour savoir si on est déjà connecté
    updateConnectionStatus () {
      this.axios.post('http://localhost:4000/api/login', {
        login: '',
        password: ''
      })
        .then((response) => {
          if (response.data.message === 'already connected') {
            this.setConnectionStatus(true)
          }
        })
    }
  },

  // Lors du chargement de la page, on vérifie si on est déjà connecté
  created: function () {
    this.updateConnectionStatus()
  }
}
</script>
