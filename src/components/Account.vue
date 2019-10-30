<template>
  <v-container>
    <v-card>
      <v-toolbar dark color="blue">
        <v-toolbar-title>Mon compte</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="hide">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <v-card-text v-if="success">Informations du compte changées avec succès !</v-card-text>
      <v-container v-else>
        <v-card-text>
          Nom d'utilisateur : {{username}}
          <br />
          Classe : {{classe}}
          <br />
          Filière : {{filiere}}
        </v-card-text>

        <v-form ref="form" id="account" v-model="valid" lazy-validation>
          <v-layout justify-center class="mt-5">Changer les informations :</v-layout>
          <v-layout justify-center class="mt-5"><font color="red">{{message}}</font></v-layout>
          <v-container>
            <v-text-field
              type="password"
              v-model="password"
              :rules="mdpRules"
              label="Mot de passe"
              name="mdp"
              required
            ></v-text-field>
            <v-text-field
              type="password"
              v-model="newpassword"
              :rules="mdpRules"
              label="Nouveau mot de passe"
              name="mdp"
            ></v-text-field>
            <v-select
              v-model="classe"
              :items="classes"
              :rules="[v => !!v || 'Ce champ est obligatoire']"
              label="Classe"
              name="classe"
              required
            ></v-select>
            <v-select
              v-model="filiere"
              :items="filieres"
              :rules="[v => !!v || 'Ce champ est obligatoire']"
              label="Filière"
              name="filiere"
              required
            ></v-select>
          </v-container>
          <v-layout justify-center class="mt-5">
            <v-btn :disabled="!valid" color="success" @click="validate">Changer</v-btn>
          </v-layout>
        </v-form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Account',
  data: () => ({
    username: '',
    classe: '',
    filiere: '',
    password: '',
    newpassword: '',
    mdpRules: [v => !!v || 'Ce champ est obligatoire'],
    classes: ['4A', '5A'],
    filieres: ['SI', 'SE'],
    success: false,
    message: ''
  }),
  methods: {
    hide () {
      this.$emit('hide')
    },

    getAccountInfo () {
      this.axios
        .post('http://localhost:4000/api/login', {
          login: '',
          password: ''
        })
        .then(response => {
          if (response.data.message === 'already connected') {
            this.username = response.data.username
            this.classe = response.data.classe
            this.filiere = response.data.filiere
          }
        })
    },
    validate () {
      this.axios
        .post('http://localhost:4000/api/updateaccount', {
          login: this.username,
          password: this.password,
          newpassword: this.newpassword,
          classe: this.classe,
          filiere: this.filiere
        })
        .then(response => {
          if (response.data.message === 'account updated') {
            this.username = response.data.username
            this.classe = response.data.classe
            this.filiere = response.data.filiere
            this.success = true
          } else {
            this.message = 'Merci de vérifier les informations.'
          }
        })
    }
  },
  created () {
    this.getAccountInfo()
  }
}
</script>
