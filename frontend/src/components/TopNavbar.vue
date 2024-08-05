<script >
import ApplicationForm from './ApplicationForm.vue'

export default {
  data() {
    return {
      navigationTitles: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Privacy', path: '/privacy'}
        ],
        isBurger: false,
        applicationWindow: false,
      }
  },
  methods: {
    openForm() {
      this.applicationWindow = true
    },
    closeForm(val){
      this.applicationWindow = val
    },
    openHeader() {
      this.isBurger = true
    }
  },
  components: {
    ApplicationForm,
  }
}
</script>

<template>
  <div>
    <ApplicationForm :showing="applicationWindow" @close-form="closeForm"/>
    <button class="btn">
      Application
    </button>
  </div>

</template>

<style scoped>
.router-link-active{
  color: #fa005a
}
</style>import ApplicationFormVue from './ApplicationForm.vue';

