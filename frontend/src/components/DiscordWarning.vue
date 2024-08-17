<template>
    <div class="text-center pa-4">
      <v-dialog
        v-model="authorizeDialog"
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

            <v-btn @click="closeDialogs">
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
data() {
    return {

    }
}
}
</script>