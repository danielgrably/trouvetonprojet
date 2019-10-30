<template>
  <v-container>
    <v-card>
          <v-toolbar dark color="blue">
          <v-toolbar-title>Formulaire de connexion</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="hide"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
          <v-card-text >
            <v-form ref="form" id="signin" v-model="valid" lazy-validation>
              <v-label class="red" ><font color="red">{{message}}</font></v-label>
              <v-text-field
                v-model="identifiant"
                :counter="20"
                :rules="idRules"
                label="Identifiant"
                name="identifiant"
                required
              ></v-text-field>

              <v-text-field
                type="password"
                v-model="mdp"
                :rules="mdpRules"
                label="Mot de passe"
                name="mdp"
                required
              ></v-text-field>
            </v-form>
            <v-layout justify-center>
              <v-btn :disabled="!valid" color="success" @click="validate">Confirmer</v-btn>
            </v-layout>
          </v-card-text>
        </v-card>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    absolute: true,
    valid: true,
    identifiant: '',
    idRules: [
      v => !!v || 'Ce champ est obligatoire',
      v => (v && v.length <= 20) || 'Le nom doit faire moins de 20 caractères'
    ],
    mdp: '',
    mdpRules: [v => !!v || 'Ce champ est obligatoire'],
    message: ''
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        // Envoie une requête POST au serveur avec les infos d'identification, puis si elles sont correctes envoie un event de connexion au parent
        this.axios.post('/api/login', {
          login: this.identifiant,
          password: this.mdp
        })
          .then((response) => {
            if (response.data.message === 'connected' || response.data.message === 'already connected') {
              this.message = ''
              this.$emit('connect', true, response.data.username)
              this.hide()
            } else {
              this.message = 'Login ou mot de passe incorrects.'
            }
          })
      }
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    },
    hide () {
      this.$emit('hide')
    }
  }
}
</script>
