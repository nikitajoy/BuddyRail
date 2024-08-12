<template>

<div>
    current: {{ applicationFilter.currentPage }}
    total: {{ applicationFilter.totalPages }}
        <v-pagination
      v-model="applicationFilter.currentPage"
      :total-visible="1"
      :length="applicationFilter.totalPages"
      rounded="circle"
    ></v-pagination>


<v-sheet :min-height="100" :max-width="600" border rounded class="mx-auto ma-5">
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
            <v-select
                variant="outlined"
                label="Does your buddy have a microphone?"
                :items="['Both', 'No microphone', 'Has microphone']"
                v-model="applicationFilter.buddyMicrophone"
            ></v-select>
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

</div>

</template>

<script>
import {httpServer} from '@/main'

export default {
    data() {
        return {
            applicationFilter: {
              isMic: true,
              buddyMicrophone: 'Has microphone',
              isAuthorized: false,
              chosenGames :[],
              chosenLanguages: [],
              currentPage: 3,
              totalPages: 4,
            },
            applications: [],
        }
    },
    mounted() {
        this.applyFilter();
    },
    methods: {
        applyFilter() {
            console.log('called');
            httpServer
            .get("/getApplications", 
            {
            params: 
                {   
                    isAuthorized: this.applicationFilter.isAuthorized,
                    languages: this.applicationFilter.chosenLanguages,
                    games: this.applicationFilter.chosenGames,
                    isMic: this.applicationFilter.isMic,
                    buddyMicrophone: this.applicationFilter.buddyMicrophone,
                    currentPage: this.applicationFilter.currentPage,
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
    watch: {
        applications: {
            handler(newApplication) {
                this.$emit('setApplications', newApplication)
            },
         },
         applicationFilter: {
            handler() {
                this.applyFilter();
            },
            deep: true
        }
    }
}
</script>