<template>
  <div class="text-center pa-4">
    <ApplicationButton :message="'create application'" @invokeDialog="invokeDialog"/>
    <v-dialog transition="scroll-x-transition" style="z-index: 1;"
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="600"
        prepend-icon="mdi-progress-check"
        title="Making an application"
      >
        <v-form  @submit.prevent="saveApplication">
            <v-container>
              <v-row>
                  <v-col cols="12">
                      <v-autocomplete
                      :rules="rules.languages"
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
                      :rules="rules.games"
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
                    <v-select
                      variant="outlined"
                      label="Does your buddy have a microphone?"
                      :items="['Both', 'No microphone', 'Has microphone']"
                      v-model="applicationData.buddyMicrophone"
                    ></v-select>
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
                  <v-col cols="12" >
                    <v-switch class="ma-0 pa-0"
                    hide-details
                    label="Do you have a microphone?" 
                    v-model="applicationData.isMic" 
                    color="yellow"></v-switch>
                    <v-switch 
                    hide-details class="ma-0 pa-0"
                    label="Does your buddy have to be authorize through discord to connect you?" 
                    v-model="applicationData.isAuthorized" 
                    color="yellow"></v-switch>
                  </v-col>
              </v-row>
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
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
import {httpServer} from '@/main'
export default {
    data() {
        return {
          authorizeDialog: false,
            rules: {
              games: [
                (v) =>  v.length>0 || "You have to choose at least 1 game",
                (v) =>  v.length <= 5 || "You can`t choose more than 5 games.",
              ],
              languages: [
                (v) =>  v.length>0 || "You have to choose at least 1 language",
                (v) =>  v.length <= 5 || "You can`t choose more than 5 languages."
              ],
            },
            dialog: false,
            applicationData: {
              message: '',
              isMic: true,
              isAuthorized: false,
              chosenGames :[],
              chosenLanguages: [],
              buddyMicrophone: 'Has microphone'
            },
        }
    },
    props: {
      games: Array,
      languages: Array,
      isAuthorized: Boolean,
    },
    methods: {
        invokeDialog() {
            this.dialog = true;
            
            if(!this.isAuthorized) {
              this.$emit('callDiscord', true)
            }

            this.applicationData = {
              message: '',
              isMic: true,
              isAuthorized: false,
              chosenGames :[],
              chosenLanguages: [],
              buddyMicrophone: 'Has microphone',
            };
        },
        saveApplication(event) {
          if(
          (this.applicationData.chosenGames.length >0 && this.applicationData.chosenGames.length <= 5)  &&
          (this.applicationData.chosenLanguages.length && this.applicationData.chosenLanguages.length <= 5) > 0 &&
          this.applicationData.message.length < 200
          ){
          httpServer
            .post("/addApplication", {
              isAuthorized: this.applicationData.isAuthorized,
              isMic: this.applicationData.isMic,
              games: this.applicationData.chosenGames,
              languages: this.applicationData.chosenLanguages,
              buddyMicrophone: this.applicationData.buddyMicrophone,
              message: this.applicationData.message,})
            .then(() => {
              this.dialog = false
            })
            .catch(() => {});
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
