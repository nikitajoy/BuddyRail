<template>
  <div class="text-center pa-4">
    <ApplicationButton :message="'create application'" @invokeDialog="invokeDialog"/>
    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="600"
        prepend-icon="mdi-progress-check"
        title="Making an application"
      >
        <v-form v-model="valid">
            <v-container>
            <v-row>
                <v-col
                >
                <v-text-field
                    v-model="email"
                    label="E-mail"
                    required
                ></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <AgeSlider />
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                    <v-autocomplete
                    chips
                    label="Autocomplete"
                    :items="['English', 'Mandarin', 'Hindi', 'Spanish', 'French', 'Arabic', 'Bengali', 'Portuguese', 'Russian', 'Urdu', 'Indonesian', 'German']"
                    multiple
                    variant="outlined"
                    ></v-autocomplete>
                </v-col>
            </v-row>
            </v-container>
        </v-form>
 

        <template v-slot:actions>
          <v-btn
            class="ms-auto"
            text="Ok"
            @click="dialog = false"
          ></v-btn>
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>

export default {
    data() {
        return {
            dialog: false
        }
    },
    methods: {
        invokeDialog() {
            this.dialog = true
        }
    },
}
</script>
