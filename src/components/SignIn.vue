<template>
  <v-container>
    <v-card>
          <v-toolbar dark color="blue">
          <v-toolbar-title>Formulaire de connexion {{testmessage}}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="hide"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
          <v-card-text >
            <v-form ref="form" id="signin" v-model="valid" lazy-validation>
              <v-text-field
                v-model="identifiant"
                :counter="20"
                :rules="idRules"
                label="Identifiant"
                name="name"
                required
              ></v-text-field>

              <v-text-field
                type="password"
                v-model="mdp"
                :rules="mdpRules"
                label="Mot de passe"
                name="password"
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
      v => (v && v.length <= 20) || 'Le nom doit faire moins de 20 caractÃ¨res'
    ],
    mdp: '',
    mdpRules: [v => !!v || 'Ce champ est obligatoire'],
    testmessage: ''
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.axios.post('http://localhost:4000/api/login', {
          login: this.identifiant,
          password: this.mdp
        })
          .then((response) => {
            console.log('response : ', response.data)
            this.testmessage = response.data.message
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
