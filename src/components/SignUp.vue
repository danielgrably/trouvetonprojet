<template>
  <v-container>
    <v-card>
          <v-toolbar dark color="blue">
          <v-toolbar-title>Formulaire d'inscription</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="hide"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
          <v-card-text >
            <v-form ref="form" id="signup" v-model="valid" lazy-validation>
              <v-label class="red" ><font color="red">{{message}}</font></v-label>
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

              <v-select
                v-model="select1"
                :items="classes"
                :rules="[v => !!v || 'Ce champ est obligatoire']"
                label="Classe"
                name="classe"
                required
              ></v-select>

              <v-select
                v-model="select2"
                :items="filieres"
                :rules="[v => !!v || 'Ce champ est obligatoire']"
                label="Filière"
                name="filliere"
                required
              ></v-select>
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
    signup_overlay: false,
    signin_overlay: false,
    valid: true,
    identifiant: '',
    idRules: [
      v => !!v || 'Ce champ est obligatoire',
      v => (v && v.length <= 20) || 'Le nom doit faire moins de 20 caractÃ¨res'
    ],
    mdp: '',
    mdpRules: [v => !!v || 'Ce champ est obligatoire'],
    select1: null,
    classes: ['4A', '5A'],
    select2: null,
    filieres: ['SI', 'SE'],
    message: ''
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.axios.post('http://localhost:4000/api/newaccount', {
          login: this.identifiant,
          password: this.mdp
        })
          .then((response) => {
            if (response.data.message === 'account created') {
              this.message = ''
              this.hide()
            }
            else {
              this.message = 'Le compte existe déjà.'
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
