<template>
  <div class="text-center pa-4">
    <ApplicationButton :message="'create application'" @invokeDialog="invokeDialog"/>
    {{ chosenLanguages }}
    <v-dialog transition="scroll-x-transition"
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="600"
        prepend-icon="mdi-progress-check"
        title="Making an application"
      >
        <v-form v-model="valid">
            <v-container>
            <v-row>
                <v-col>
                    <AgeSlider />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-autocomplete
                    v-show="languages.length > 0"
                    chips
                    v-model="applicationData.chosenLanguages"
                    label="Languages you want to communicate in"
                    :items="languages"
                    item-title="language_name"
                    item-value="id_language"
                    multiple
                    variant="outlined"
                    ></v-autocomplete>
                </v-col>
            </v-row>

            <v-row>
                <v-col>
                    <v-autocomplete v-show="games.length > 0"
                    chips
                    v-model="applicationData.chosenGames"
                    label="Choose games you want to play"
                    :items="games"
                    item-title="name_game"
                    item-value="id_game"
                    multiple
                    variant="outlined"
                    ></v-autocomplete>
                </v-col>
            </v-row>

            <v-row>
                <v-col
                >
                <v-text-field
                    v-model="applicationData.message"
                    label="Message to your buddy"
                    required
                ></v-text-field>
                <span
                :class="messageLimit > 200 ? 'text-red-accent-3' : ''">
                  {{ messageLimit }} / 200
                  {{ messageLimit > 200 ? 'Your message is too long!' : '' }}
                </span>
                </v-col>
            </v-row>


            <v-row>
                <v-col
                >
                <v-text-field
                    v-model="applicationData.age"
                    label="Your age (not necessary)"
                    required
                    type="number"
                ></v-text-field>
                </v-col>
            </v-row>


            </v-container>
        </v-form>
 

        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import {httpServer} from '@/main'
export default {
    data() {
        return {
            dialog: false,
            applicationData: {
              message: '',
              age: null,
              chosenGames :[],
              chosenLanguages: [],
            },
            
            games: [],
            languages: [],
            
        }
    },
    methods: {
        invokeDialog() {
            this.dialog = true
        },
        getData() {
          httpServer
            .get("/getInputData")
            .then((response) => {
                this.games = response.data.games
                this.languages = response.data.languages
            })
            .catch(() => {});
        }
    },
    watch: {
      dialog() {
        if(this.dialog && this.games.length == 0 && this.languages.length == 0) {
          this.getData()
        }
      }
    },
    computed: {
      messageLimit() {
        return this.applicationData.message.length
      }
    }
}
</script>
