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
      :items="projects"
      sort-by="classe"
      class="elevation-1 mt-5"
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
                      <v-text-field v-model="editedItem.classe" label="Classe"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.filieres" label="Filière"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field v-model="editedItem.creator" label="Filière"></v-text-field>
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
        <v-btn color="primary" @click="getProjects">Reset</v-btn>
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
      { text: 'Créateur', value: 'creator' },
      { text: 'Classe', value: 'classe' },
      { text: 'Filière', value: 'filiere' },
      { text: 'Description', value: 'description' },
      { text: 'Actions', value: 'action', sortable: false }
    ],
    projects: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      classe: '',
      creator: '',
      filiere: '',
      description: ''
    },
    defaultItem: {
      name: '',
      classe: '',
      creator: '',
      filiere: '',
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
    setTimeout(this.getProjects(), 500)
  },

  methods: {
    editItem (item) {
      this.editedIndex = this.projects.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      const index = this.projects.indexOf(item)
      confirm('Etes vous sûr de supprimer cet item?') && this.projects.splice(index, 1)
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
        Object.assign(this.projects[this.editedIndex], this.editedItem)
      } else {
        this.projects.push(this.editedItem)
      }
      this.close()
    },

    getProjects () {
      let data = {
        classe: '4A',
        filiere: 'SI'
      }
      this.axios.post('http://localhost:4000/api/getprojects', {
        data: data
      })
        .then((response) => {
          if (response.data.message === 'ok') {
            this.projects = response.data.matchingProjects
          } else {
            // Si on ne peut pas charger de projet, alors on retourne sur la page welcome
            this.$router.push('Welcome')
          }
        })
    }
  }
}
</script>
