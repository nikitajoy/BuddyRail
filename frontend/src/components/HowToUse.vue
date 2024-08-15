<template>
    <v-sheet :min-height="100" :max-width="900" border rounded class="mx-auto ma-5 pa-5">
        <h2 class="text-center">How to use BuddyRail</h2>
        <div><p>BuddyRail is a web app for finding mates for gamers.</p></div>
        <div class="mt-2">
            <h4>You can find your future friend by doing:</h4>
           
<v-row class="mt-5">
    <v-card
                class="mx-auto"
                max-width="300"
            >
            <v-card-title class="text-wrap text-center">Making your own application</v-card-title>
            <v-list :items="stepsOwnApplication" class="full-width-text">
                <v-list-item v-for="(item, index) in stepsOwnApplication" :key="index">
                    <v-list-item-content>
                    <v-list-item-title class="full-width-text">{{ item.title }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-card>

            <v-card
                class="mx-auto"
                max-width="300"
            >
            <v-card-title class="text-wrap text-center">Checking existing applications</v-card-title>
                <v-list class="text-wrap full-width-text" :items="stepsCheckingApplications"></v-list>
            </v-card>
</v-row>


        </div>
    </v-sheet>
</template>


<script>

export default {
    data() {
        return {
            stepsOwnApplication: [
                {
                title: '1. Click create application',
                value: 1,
                },
                {
                title: '2. Fill in application form',
                value: 2,
                },
                {
                title: '3. Authorize through discord to confirm creation',
                value: 3,
                },
                {
                title: '4. Wait for your buddy! :)',
                value: 4,
                },
            ],
            stepsCheckingApplications: [
                {
                title: '1. Apply filters with your preferences',
                value: 1,
                },
                {
                title: '2. Swap through traincarts to find your perfect buddy',
                value: 1,
                },
                {
                title: '3. After you find somebody you liked, click at connect through discord',
                value: 1,
                },
            ],
        }
    }
}
</script>

<style>
.full-width-text {
  white-space: normal; /* Ensures the text wraps */
  overflow: visible; /* Ensures the text is not truncated */
}
</style>