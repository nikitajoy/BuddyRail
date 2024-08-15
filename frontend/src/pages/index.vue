<template>
<div>
  <AppNavbar />
  <v-btn><a href="http://localhost:5000/api/discord/auth/redirect">discord</a></v-btn> 
  <!-- the link will change to relative, once domain is bought -->
  <MainTitle >Find your perfect teammate on BuddyRail</MainTitle>
  <ApplicationForm :games="games" :languages="languages"/>
  <h2 class="text-center">Buddies page</h2>
  <BuddiesList :applications="applications" /> 
  <BuddiesFilter :games="games" :languages="languages" @setApplications="setApplications"/>
  <HowToUse/>
  <AppFooter />
</div>
</template>

<script>
import {httpServer} from '@/main'
import axios from "axios";

export default {
  data() {
    return {
      games: [],
      languages: [],
      applications: [],
    }
  },
  methods: {
    getData() {
          httpServer
            .get("/getInputData")
            .then((response) => {
                this.games = response.data.games
                this.languages = response.data.languages
            })
            .catch(() => {});
    },
    setApplications (gottenApplications) {
      this.applications = gottenApplications
    },
  },
  mounted() {
    this.getData()
  }
}
</script>
