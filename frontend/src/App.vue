<script setup>
import TopNavbar from './components/TopNavbar.vue'
import ApplicationForm from './components/ApplicationForm.vue'

</script>

<template>
  <div>

  <ApplicationForm :showing="applicationWindow"/>
  <TopNavbar />

  </div>
</template>

<style scoped>

</style>
