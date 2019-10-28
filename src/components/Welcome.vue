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
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      colors: [
        'cyan',
        'green darken-2',
        'red lighten-1'
      ],
      slides: ['Un répertoire de PST', 'Des PST intéressants', 'Adaptés à tes goûts']
    }
  }
}
</script>
