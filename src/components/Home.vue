<template>
  <v-container>
    <v-layout align-center justify-center class="mt-5">
      <h2>Bonjour, {{username}} !</h2>
    </v-layout>
    <v-layout align-center justify-center>
      Ces projets pourraient t'intéresser :
    </v-layout>
    <v-data-table
      :headers="headers"
      :items="noms"
      sort-by="classes"
      class="elevation-1"
    >
      <template v-slot:top>
        <v-toolbar flat color="white">
          <v-toolbar-title>Liste des projets</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
              <v-btn color="primary" dark class="mb-2" v-on="on">Nouvel Item</v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.name" label="Nom du projet"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.classes" label="Classe"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.filieres" label="Filière"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.description" label="Description"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Annuler</v-btn>
                <v-btn color="blue darken-1" text @click="save">Sauver</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.action="{ item }">
        <v-btn
          small
          class="mr-2"
          @click="editItem(item)"
        >
          Editer
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
          small
          @click="deleteItem(item)"
        >
          Supprimer
        </v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize">Reset</v-btn>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  props: {
    username: {
      type: String,
      default: '[USER]'
    }
  },
  data: () => ({
    dialog: false,
    headers: [
      {
        text: 'Nom du projet',
        align: 'left',
        sortable: false,
        value: 'name'
      },
      { text: 'Classe', value: 'classes' },
      { text: 'Filière', value: 'filieres' },
      { text: 'Description', value: 'description' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    noms: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      classes: '',
      filieres: '',
      description: ''
    },
    defaultItem: {
      name: '',
      classes: '',
      filieres: '',
      description: ''
    }
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'Nouvel Item' : 'Editer Item'
    }
  },

  watch: {
    dialog (val) {
      val || this.close()
    }
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      this.noms = [
        {
          name: 'IoT dans Azure',
          classes: '4A',
          filieres: 'SE',
          description: '3 volets :– Gérer des devices physiques avec Microsoft IoT Central– Simuler la montée en charge en utilisant des conteneurs (AKS et Docker)– Envoyer des messages (EventHub)'
        },
        {
          name: 'Securix',
          classes: '5A',
          filieres: 'SE',
          description: 'Récupération de données à l’aide de nouvelles solutions de communication à distance (en dehors de la technologie LoRa)'
        },
        {
          name: 'Robot pour accueil',
          classes: '4A',
          filieres: 'SE',
          description: 'Programmer un robot interactif qui serait à l’entrée de campus ou sur des salons'
        },
        {
          name: 'Bien être au travail',
          classes: '4A',
          filieres: 'SI',
          description: 'Développer une application pour mesurer le bien être des collaborateurs de façon régulière'
        },
        {
          name: 'Coalescent',
          classes: '4A',
          filieres: 'SI',
          description: 'Faciliter l’accès au logement et à l’investissement locatif par le biais du microimmobilier et de la blockchain.'
        },
        {
          name: 'Drone sentinelle',
          classes: '5A',
          filieres: 'SI',
          description: 'Développement d’algorithmes de suivi automatique de voies ferrées pour le contrôle d’un drone.'
        }
      ]
    },

    editItem (item) {
      this.editedIndex = this.noms.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.noms.indexOf(item)
      confirm('Etes vous sûr de supprimer cet item?') && this.noms.splice(index, 1)
    },

    close () {
      this.dialog = false
      setTimeout(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      }, 300)
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.noms[this.editedIndex], this.editedItem)
      } else {
        this.noms.push(this.editedItem)
      }
      this.close()
    }
  }
}
</script>
