<template>
    <div v-if="showing"> 
        The modal will go here.
    </div>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  }
}
</script>