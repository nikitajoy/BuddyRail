<script setup>
import TopNavbar from './components/TopNavbar.vue'
import ApplicationForm from './components/ApplicationForm.vue'

</script>

<template>
  <div>
    <TopNavbar />
    <router-view></router-view>
    <ApplicationForm :showing="applicationWindow"/>


  </div>
</template>

<style scoped>

</style>
