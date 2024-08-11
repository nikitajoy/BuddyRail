<template>
<div>
  <v-dialog 
    type="text"
    v-model="isDialog"
    transition="scroll-x-transition"
    width="auto"
    >
      <v-card
        max-width="600"
        prepend-icon="mdi-progress-check"
        title="Application of buddy"
      >
        <v-form>
          {{ buddyInfo }}
            <v-container>
              <div>
              <v-btn
                color="red"
                variant="tonal"
                class="ms-auto mr-5"
                text="Cancel"
                @click="isDialog = false"
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
    props: {
      modelValue: Boolean,
      buddyInfo: Object
    },
    emits: ['update:modelValue'],
    computed: {
      isDialog: {
        get() {
          return this.modelValue
        },
        set(isDialog) {
          this.$emit('update:modelValue', isDialog)
        }
      }
    }
}
</script>