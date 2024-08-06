<template>
<div>
  <AppNavbar />
  <h1>Main page</h1>
  <ApplicationButton :message="'create application'" @invokeDialog="invokeDialog"/>
  <AppFooter />
</div>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {
    invokeDialog(message) {
      console.log('dialog is invoked: ', message)
    }
  }
}
</script>
