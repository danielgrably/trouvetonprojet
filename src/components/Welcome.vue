<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%" >
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-layout>
    <v-layout row wrap align-center justify-center class="mt-5">
      <h1>TROUVE TON PROJET grâce à ce site web inédit !</h1>
    </v-layout>
    <v-layout row wrap align-center justify-center class="mt-5">
      Nos algorithmes de matching de projet te proposeront les projets qui correspondent à ton profil ! Trouveras-tu ton projet coup de coeur ?
    </v-layout>
    <v-layout row wrap align-center justify-center class="mt-5">
      <Informations/>
    </v-layout>
  </v-container>
</template>

<script>
import Informations from './Informations'

export default {
  name: 'Welcome',
  components: {
    Informations
  },
  data () {
    return {
      colors: [
        'cyan',
        'green darken-2',
        'red lighten-1'
      ],
      slides: ['Un répertoire de PST intéressants', 'Des projets que tu proposes', 'Adaptés à tes goûts']
    }
  }
}
</script>
