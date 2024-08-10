<template>
<div>
  <AppNavbar />
  <h1 class="text-center">Main page</h1>
  <ApplicationForm :games="games" :languages="languages"/>
  <h2 class="text-center">Buddies page</h2>


  <BuddiesList  /> 
  <BuddiesFilter :games="games" :languages="languages" />
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
  },
  mounted() {
    this.getData()
  }
}
</script>
