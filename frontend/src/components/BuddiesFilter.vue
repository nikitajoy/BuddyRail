<template>


<v-sheet :min-height="100" :max-width="600" border rounded class="mx-auto ma-5">
    <pre>
        {{ applications }}
    </pre>
    <v-row>
        <v-col cols="10" class="mx-auto ma-0 pa-0 mt-5">
            <v-checkbox 
            v-model="applicationFilter.isMic"
            label="Do you have a microphone?" 
            color="yellow" 
            hide-details 
            class="ma-0 pa-0"></v-checkbox>
        </v-col>
        <v-col cols="10" class="mx-auto ma-0 pa-0">
            <v-checkbox 
             v-model="applicationFilter.isAuthorized"
            label="Show discord defended applications" 
            color="yellow" 
            hide-details 
            class="ma-0 pa-0"></v-checkbox>
        </v-col>
        <v-col cols="10" class="mx-auto">
            <v-autocomplete
            autocomplete="off"
            v-show="languages.length > 0"
            chips
            v-model="applicationFilter.chosenLanguages"
            label="Languages you want to communicate in"
            :items="languages"
            item-title="language_name"
            item-value="id_language"
            multiple
            variant="outlined"
            ></v-autocomplete>
        </v-col>
        <v-col cols="10" class="mx-auto">
            <v-autocomplete v-show="games.length > 0"
            autocomplete="off"
            chips
            v-model="applicationFilter.chosenGames"
            label="Choose games you want to play"
            :items="games"
            item-title="name_game"
            item-value="id_game"
            multiple
            variant="outlined"
            ></v-autocomplete>
        </v-col>
        <v-col cols="10" class="justify-center">
            <v-btn  class="mx-auto" color="green" @click="applyFilter">Apply</v-btn>
        </v-col>
    </v-row>
</v-sheet>

</template>

<script>
import {httpServer} from '@/main'

export default {
    data() {
        return {
            applicationFilter: {
              isMic: true,
              isAuthorized: false,
              chosenGames :[],
              chosenLanguages: [],
            },
            applications: [],
        }
    },
    methods: {
        applyFilter() {
            console.log({
                isAuthorized: this.applicationFilter.isAuthorized,
                    languages: this.applicationFilter.chosenLanguages,
                    games: this.applicationFilter.chosenGames,
                    isMic: this.applicationFilter.isMic
            });
            httpServer
            .get("/getApplications", 
            {
            params: 
                {   
                    isAuthorized: this.applicationFilter.isAuthorized,
                    languages: this.applicationFilter.chosenLanguages,
                    games: this.applicationFilter.chosenGames,
                    isMic: this.applicationFilter.isMic
                }
            })
            .then((response) => {
                this.applications = response.data.filteredApplications;
            })
            .catch(() => {});
        }
    },
    props: {
        games: Array,
        languages: Array,
    },
}
</script>