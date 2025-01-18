<template>
  <div>
    <h4 class="text-h3 text-center mt-5 mb-5">Rules and privacy</h4>
    <v-row class="justify-center mb-5">
      <v-col cols="10">
        <v-expansion-panels class="text-h5">
            <v-expansion-panel
              title="The purpose of BuddyRail"
              text="BuddyRail is a free web app created to help gamers find buddies to play video games together. You can create your own application with Discord or browse existing applications to find your perfect buddy."
            >
            </v-expansion-panel>
            <v-expansion-panel
              title="General rules"
              text="Do not promote anything, but tell something about yourself or what you want in your future buddy in the message section. Be gentle and respectful to other people. If you're promoting something (no links to anything) or causing harm to our users or service, you will be banned."
            >
            </v-expansion-panel>
            <v-expansion-panel
              title="Data privacy"
              text="We keep some information from your Discord authorization: your nickname, Discord ID, registration date, and last activity date. The first part of this information is needed for finding buddies, and the other part is necessary for showing activity on our website. We also use Cloudflare to help us understand where our audience comes from. We do not keep your email anywhere."
            >
            </v-expansion-panel>
            <v-expansion-panel
              title="About us"
            >
              <template v-slot:text>
                This app was created by one person. My name's Nikita, and I'm a passionate web developer. This is my second free web service for public use. The first one is <a href="https://unturned.how" target="_blank">unturned.how</a>, a wiki website for Unturned. If you have any questions, suggestions, or advertisement queries, feel free to contact me on my email <strong>unturnedhow@gmail.com</strong>. Join our 
                <a href="https://discord.com/invite/7NRmb8X3sJ" target="_blank">discord community.</a>
                Subscribe to my <a href="https://www.youtube.com/channel/UCRCw_B9aANDmqywqv8VDGpA" target="_blank">youtube channel</a>.        
              </template>
            </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
    <AppFooter />
  </div>
</template>

