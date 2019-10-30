<template>
  <v-app>
    <v-app-bar app dark color="blue">
      <v-toolbar-title class="headline text-uppercase">
        <span>Trouve ton projet</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="connected" class="mr-5 cyan with white--text" @click="showInfo" >Informations</v-btn>
      <v-btn v-if="connected" class="mr-5 cyan with white--text" >Mon Compte</v-btn>
      <v-btn v-else class="mr-5 cyan with white--text" @click="showSignUp">Inscription</v-btn>
      <v-btn v-if="connected" class="cyan with white--text" @click="disconnect">Déconnexion</v-btn>
      <v-btn v-else class="cyan with white--text" @click="showSignIn">Connexion</v-btn>
    </v-app-bar>
    <v-content>
      <transition name="moveRight">
        <router-view :username="username"/>
      </transition>
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
      <v-overlay
            :value="infoOverlay"
          >
      <Informations @hide="hideInfo" />
      </v-overlay>
    </v-content>
  </v-app>
</template>

<script>
// import Welcome from './components/Welcome'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Informations from './components/Informations'
export default {
  name: 'App',
  components: {
    // Welcome,
    SignIn,
    SignUp,
    Informations
  },
  data: () => ({
    signinOverlay: false,
    signupOverlay: false,
    infoOverlay: false,
    connected: false,
    username: ''
  }),
  methods: {
    showInfo () {
      this.infoOverlay = true
    },
    showSignIn () {
      this.signinOverlay = true
    },
    showSignUp () {
      this.signupOverlay = true
    },
    hideInfo () {
      this.infoOverlay = false
    },
    hideSignIn () {
      this.signinOverlay = false
    },
    hideSignUp () {
      this.signupOverlay = false
    },
    setConnectionStatus (value, username) {
      this.connected = value
      if (value === true) {
        this.$router.push('Home')
        this.username = username
      } else {
        this.$router.push('Welcome')
        this.username = ''
      }
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
            this.setConnectionStatus(true, response.data.username)
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

<style>

.moveRight-enter-active{
  animation: fadeIn 1s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  33%{
    opacity: 0;
  }
  66%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}

.moveRight-leave-active{
  animation: moveRight .3s ease-in;
}

@keyframes moveRight{
 0%{
  transform: translateX(0);
 }
  100%{
  transform: translateX(-1500px);
 }
}
</style>
