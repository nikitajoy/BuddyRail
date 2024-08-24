<template>
  <v-container>
    <BuddyApplication
        :buddyInfo="selectedBuddy"
        v-model="isDialog"
    />
    <div class="train">
        <div class="d-flex justify-center flex-wrap">
          <!-- Здесь было намешано все: и куча кусков svg, и смешанная с ней логика загрузки
           Теперь поезд уехал в отдельный файл и получил только те данные, которые ему нужны
           Возможно, загрузку (следующий див) имеет смысл тоже вынести в отдельный компонент,
           но это не точно :) -->
          <TrainVue
            :applications="this.applications"
            @open-buddy-application="openBuddyApplication"
          />
        </div>
    </div>

    <div class="text-center text-h5"
    v-if="applications.length <= 0">No buddies found. Try to change your filter.</div>
    <div v-if="isListLoading">
        <v-row class="justify-center">
            <v-col cols="10">
                <v-progress-linear color="rgb(252, 101, 77)" indeterminate :height="10" reverse></v-progress-linear>
            <div class="text-center text-h4">Loading...</div>
            </v-col>
        </v-row>
    </div>

</v-container>
</template>


<script>
import TrainVue from "@/components/Svg/TrainVue.vue";

export default {
  components: {TrainVue},
    data ()  {
        return {
            isDialog: false,
            selectedBuddy: {},
        }
    },
    props: {
        applications: Array,
        isListLoading: Boolean,
    },
    methods: {
        openBuddyApplication(buddy) {
            this.selectedBuddy = buddy
            this.isDialog = true
        }
    },
}
</script>


<style scoped>
.main-train {
    width: 80%;
}


@media only screen and (max-width: 1024px) {
    .main-train {
        width: 100%;
    }

}
</style>
