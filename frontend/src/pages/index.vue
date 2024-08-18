<template>
<div>

<DiscordBtn v-show="!isAuthorized" />
  <!-- {{ isAuthorized ? 'Authorized' : 'Not authorized' }}, {{ authorizedUser }} -->
  <!-- the link will change to relative, once domain is bought -->
  <MainTitle class="mt-5">Find your perfect teammate on BuddyRail</MainTitle>

  <DiscordWarning v-model="discordDialog" @closeApplicationDialog="discordDialog"/>
  <TooManyApplications v-model="warningDialog" @closeApplicationDialog="warningDialog"/>

  <BuddiesList :applications="applications" :isListLoading="isListLoading"/> 
  <BuddiesFilter :games="games" :languages="languages" @setApplications="setApplications" @callDiscord="callDiscord" @isLoading="isLoading" :isAuthorized="isAuthorized"/>
  <HowToUse/>
  <ApplicationForm :games="games" :languages="languages" :isAuthorized="isAuthorized" :isDiscordDialog="discordDialog" :isWarningDialog="warningDialog" @callDiscord="callDiscord" @callWarning="callWarning"/>
  <ActivityAnalysis />
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
      warningDialog: false,
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
    callWarning(value) {
      this.warningDialog = value
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
