<template>
<div>
  <AppNavbar />
  <v-btn><a href="http://localhost:5000/api/discord/auth/redirect">discord</a></v-btn> 
  {{ isAuthorized ? 'Authorized' : 'Not authorized' }}, {{ authorizedUser }}
  <!-- the link will change to relative, once domain is bought -->
  <MainTitle >Find your perfect teammate on BuddyRail</MainTitle>
  <DiscordWarning v-model="discordDialog" @closeApplicationDialog="discordDialog"/>
  <BuddiesList :applications="applications" :isListLoading="isListLoading"/> 
  <BuddiesFilter :games="games" :languages="languages" @setApplications="setApplications" @callDiscord="callDiscord" @isLoading="isLoading" :isAuthorized="isAuthorized"/>
  <HowToUse/>
  <ApplicationForm :games="games" :languages="languages" :isAuthorized="isAuthorized" :isDiscordDialog="discordDialog" @callDiscord="callDiscord"/>
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
      isAuthorized: false,
      authorizedUser: {},
      discordDialog: false,
      isListLoading: false,
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
    callDiscord(value) {
      this.discordDialog = value
    },  
    checkAuth() {
          httpServer
            .get("/isAuthenticated")
            .then((response) => {
              if(response.status === 200) { 
                this.isAuthorized = true;
                this.authorizedUser =  response.data;
              } else {
                this.isAuthorized = false;
                this.authorizedUser =  {};
              }
            })
            .catch((err) => {
              console.log(err);
              if(err.response.status === 401) {
                this.isAuthorized = false
              };
          });
    },
    isLoading(val) { // emit from buddies filter
      this.isListLoading = val
    }
  },
  mounted() {
    this.checkAuth()
    this.getData()
  }
}
</script>
