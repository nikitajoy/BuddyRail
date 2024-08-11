<template>
<div>
  <v-dialog 
    type="text"
    v-model="value"
    transition="scroll-x-transition"
    width="auto"
    >
      <v-card
        max-width="600"
        prepend-icon="mdi-progress-check"
        title="Application of buddy"
      >
        <v-form >
            <v-container>
            <v-row>content</v-row>
              <div>
              <v-btn
                color="red"
                variant="tonal"
                class="ms-auto mr-5"
                text="Cancel"
                @click="value = false"
              ></v-btn>
              </div>
          </v-container>
        </v-form>
      </v-card>
    </v-dialog>
</div>
</template>


<script>
export default {
    props: ['modelValue'],
    emits: ['update:modelValue'],
    computed: {
      value: {
        get() {
          return this.modelValue
        },
        set(value) {
          this.$emit('update:modelValue', value)
        }
      }
    }
}
</script>