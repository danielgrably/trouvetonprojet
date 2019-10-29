<template>
    <div id="inscription">
  <v-app id="inspire">
    <v-row align="center" justify="center">
      <v-card height="500" width="350">
        <v-row justify="center">
          <v-btn
            color="success"
            class="mt-12"
            @click="overlay = !overlay"
          >
            Show Overlay
          </v-btn>
          <v-overlay
            :absolute="absolute"
            :value="overlay"
          >
           <v-form
      ref="form"
      v-model="valid"
      lazy-validation
    >
      <v-text-field
        v-model="identifiant"
        :counter="20"
        :rules="idRules"
        label="Identifiant"
        required
      ></v-text-field>
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-select
        v-model="select"
        :items="classes"
        :rules="[v => !!v || 'Item is required']"
        label="Classe"
        required
      ></v-select>
      <v-select
        v-model="select"
        :items="filieres"
        :rules="[v => !!v || 'Item is required']"
        label="Filière"
        required
      ></v-select>
      <v-btn
        :disabled="!valid"
        color="success"
        class="mr-4"
        @click="validate"
      >
        Validate
      </v-btn>
      <v-btn
        color="error"
        class="mr-4"
        @click="reset"
      >
        Reset Form
      </v-btn>
      <v-btn
        color="warning"
        @click="resetValidation"
      >
        Reset Validation
      </v-btn>
    </v-form>
            <v-btn
              color="success"
              @click="overlay = false"
            >
              Hide Overlay
            </v-btn>
          </v-overlay>
        </v-row>
      </v-card>
    </v-row>
  </v-app>
</div>
</template>

<script>
export default {
  data: () => ({
    absolute: true,
    overlay: false,
    valid: true,
    name: '',
    idRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 20) || 'L`identifiant ne doit pas dépasser 20 caractères'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    select: null,
    classes: [
      '4A',
      '5A'
    ],
    filieres: [
      'SI',
      'SE'
    ]
  }),

  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.snackbar = true
      }
    },
    reset () {
      this.$refs.form.reset()
    },
    resetValidation () {
      this.$refs.form.resetValidation()
    }
  }
}
</script>
