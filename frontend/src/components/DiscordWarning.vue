<template>
    <div class="text-center pa-4">
      <v-dialog style="z-index: 2000;"
        v-model="discordDialog"
        max-width="400"
        persistent
      >
        <v-card
          prepend-icon="mdi-account-key"
          text="You have to be authorized through discord to create applications."
          title="Authorize through discord"
        >
          <template v-slot:actions>
            <v-spacer></v-spacer>

            <v-btn @click="this.$emit('update:modelValue', false)">
              Close
            </v-btn>

            <v-btn>
              <a href="http://localhost:5000/api/discord/auth/redirect">Authorize</a>
            </v-btn>
          </template>
        </v-card>
      </v-dialog>
    </div>
</template>



<script>

export default {
    props: {
      modelValue: Boolean,
    },
    emits: ['update:modelValue'],
    computed: {
        discordDialog: {
        get() {
          return this.modelValue
        },
        set(discordDialog) {
          this.$emit('update:modelValue', discordDialog)
        }
      }
    }
}
</script>