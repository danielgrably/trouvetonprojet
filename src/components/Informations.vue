<template>
  <v-container>
    <v-card>
        <v-toolbar dark color="blue">
          <v-toolbar-title>Informations</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon @click="hide"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
          <v-card-text >
            <article class="Informations">
             <div class="row">
                <div class="col-md-8 page-content-wrap  col-md-offset-2">
                    <p>Bienvenue sur le site <strong>trouvetonprojet.com</strong>.<br>
                        Celui-ci a pour but de faciliter le choix et le partage de projets.</p>
                        <h1>Principes généraux</h1>
                        Avec <strong>trouvetonprojet.com</strong>, nous te proposons deux fonctionnalités majeurs.
                            <ul><li>Tu as un projet qui te tiens à coeur, et tu souhaites le proposer à d'autres? Soumets le pour qu'il soit consultable par les autres étudiants.</li>
                                <li>Tu souhaites rejoindre un projet qui correspond à tes attentes? Tu peux chercher dans la liste des projets proposés.</li>
                            </ul>
                        <p><p/>
                        <h2>Utilisation</h2>
                        L&#8217;inscription est simple. Il te suffit de renseigner ton identifiant ainsi qu'un mot de passe.<br>
                            <ul><li>Lors de l'inscription, la classe et la filière sont demandées. Ceci afin de proposer les projets qui conviennent à chaque profil.</li>
                                <li>Pour ce qui est de la connexion, il suffit de renseigner l'identifiant et le mot de passe.</li>
                            </ul>
                        <p></p>
                        <h2>Bonne chance</h2>
                        Grâce à cette plateforme, vas au bout de tes idées pour réaliser les projets que tu désires.<br>
                        L&#8217;équipe <strong>trouvetonprojet.com</strong> te souhaite une grande réussite.
                    </div>
                </div>
            </article>
          </v-card-text>
        </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'Informations',
  methods: {
    hide () {
      this.$emit('hide')
    }
  }
}
</script>
