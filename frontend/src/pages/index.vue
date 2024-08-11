<template>
<div>
  <AppNavbar />
  <h1 class="text-center">Main page</h1>
  <ApplicationForm :games="games" :languages="languages"/>
  <h2 class="text-center">Buddies page</h2>

  <BuddiesList :applications="applications" /> 
  <BuddiesFilter :games="games" :languages="languages" @setApplications="setApplications"/>
  <AppFooter />
</div>
</template>

<script>
import {httpServer} from '@/main'

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
    }
  },
  mounted() {
    this.getData()
  }
}
</script>
