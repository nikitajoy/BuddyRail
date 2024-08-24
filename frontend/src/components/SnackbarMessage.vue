<template>
    <v-snackbar 
    class="pa-5"
    v-model="computedSnackbarDialog"
    :timeout="2000"
    color="green-accent-3"
    elevation="24"
    >
      <slot/>
    </v-snackbar>
</template>

<script>
export default {
    data() {
        return {
            snackbarDialog: false,
        }
    },
    props: {
      modelValue: Boolean,
    },
    emits: ['update:modelValue'],
    computed: {
        computedSnackbarDialog: {
        get() {
          return this.modelValue
        },
        set(computedSnackbarDialog) {
          this.$emit('update:modelValue', computedSnackbarDialog)
        }
      },
    },
}


</script>