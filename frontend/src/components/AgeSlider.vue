<template>
<div>
    <h3>Choose preferred age of your teammate</h3>
    <v-range-slider
    color="yellow"
    class="align-center"
    hide-details
    step="1"
    v-model="range"
    >
    </v-range-slider>
    <h3>Minimal age: {{ range[0] }}</h3>
    <h3>Maximum age: {{ range[1] }}</h3>
</div>

</template>

<script>
export default {
    data() {
        return {
            range: [0, 99]
        }
    },
    watch: {
      range() {
        this.$emit('setAge', this.range)
      }
    },
}
</script>

<style>

</style>