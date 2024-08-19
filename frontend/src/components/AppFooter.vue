<template>
  <v-footer class="bg-grey-darken-1">
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        class="mx-2"
        color="white"
        rounded="xl"
        variant="text"
      >
        <router-link :to="link.path" class="text-decoration-none text-white">{{ link.title }}</router-link>
      </v-btn>
      <v-col class="text-center mt-4" cols="12">
        {{ new Date().getFullYear() }} — <strong>BuddyRail</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      links: [{title: 'Home', path: '/'}, {title: 'Rules', path:'rules'}]
    }
  }
}
</script>

<style scoped >
.router-link-active {
  color: #FC654D !important;
}
</style>
