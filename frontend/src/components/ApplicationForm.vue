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
        <v-form @submit.prevent="saveApplication">
            <v-container>
            <v-row>
                <v-col cols="12">
                    <v-autocomplete
                    autocomplete="off"
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
                <v-col cols="12">
                    <v-autocomplete v-show="games.length > 0"
                    autocomplete="off"
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
                <v-col cols="12">
                  <v-text-field
                    autocomplete="off"
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
                <v-col cols="12">
                    <AgeSlider @setAge="setAge" />
                </v-col>
                <v-col cols="12">
                  <v-text-field
                      v-model="applicationData.age"
                      autocomplete="off"
                      label="Your age (not necessary)"
                      required
                      type="number"
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-checkbox 
                  label="Does your buddy have to have a microphone?" 
                  v-model="applicationData.isMic" 
                  color="yellow"></v-checkbox>
                  <v-checkbox 
                  label="Does your buddy have to be authorized to see your application?" 
                  v-model="applicationData.isAuthorized" 
                  color="yellow"></v-checkbox>
                </v-col>
            </v-row>
            </v-container>
        </v-form>

        <template v-slot:actions>
          <div>
            <v-btn
              color="red"
              variant="tonal"
              class="ms-auto mr-5"
              text="Cancel"
              @click="dialog = false"
            ></v-btn>
            <v-btn
              color="green-darken-3"
              variant="tonal"
              class="ms-auto mr-2"
              text="Submit"
              type="submit"
            ></v-btn>
          </div>
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
              isMic: false,
              isAuthorized: false,
              chosenGames :[],
              chosenLanguages: [],
              ageRange: [],
            },
            
            games: [],
            languages: [],
            
        }
    },
    methods: {
        invokeDialog() {
            this.dialog = true
        },
        setAge(gottenAge) { this.applicationData.ageRange = gottenAge }, // emit
        getData() {
          httpServer
            .get("/getInputData")
            .then((response) => {
                this.games = response.data.games
                this.languages = response.data.languages
            })
            .catch(() => {});
        },
        saveApplication() {


          httpServer
            .post("/addApplication", {
              isAuthorized: this.applicationData.isAuthorized,
              isMic: this.applicationData.isMic,
              games: this.applicationData.chosenGames,
              languages: this.applicationData.chosenLanguages,
              minAge: this.applicationData.ageRange[0],
              maxAge: this.applicationData.ageRange[1]})
            .then((response) => {
                console.log(response.data);
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
