<template>


<v-container>
    <BuddyApplication 
        :buddyInfo="selectedBuddy"
        v-model="isDialog" 
    />
    <div class="d-flex justify-center flex-wrap" v-if="applications.length > 0">
        <svg id="Layer_1" style="width: 80%; margin: 0 auto;" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 262.48 82.17"><polyline points="128.82 32.13 138.84 7.92 143.55 25.61 160.84 0 178.13 25.85 198.28 0 205.09 24.91 216.38 36.85"/><polygon points="131.07 32.13 138.84 15.37 140.39 23.75 142.1 28.47 147.22 25.32 152.98 14.59 159.79 4.81 163.46 8.38 168.7 16.77 172.89 23.75 177.02 28.47 181.8 26.37 183.89 22.18 188.61 16.42 192.8 10.87 197.05 4.81 199.35 11.18 201.33 16.3 202.03 24.06 204.32 27.42 207.99 30.04 209.04 34.23 143.55 34.31 131.07 32.13" style="fill:#fc654d"/><rect x="6.29" y="28.47" width="50.82" height="20.43" rx="10.22"/><path d="M260.28,186.63H18.76V154a12.45,12.45,0,0,1,12.45-12.45h184a45.06,45.06,0,0,1,45,45.06Z" transform="translate(-18.76 -108.92)" style="fill:#fff"/><rect x="36.15" y="68.81" width="205.37" height="8.91" style="fill:#fc654d"/><path d="M252.42,163.05a137.07,137.07,0,0,1-40.86,3.15V148.91a52.24,52.24,0,0,1,26.72,3.67Z" transform="translate(-18.76 -108.92)" style="fill:#fc654d"/><rect x="47.68" y="75.09" width="15.72" height="3.67" rx="1.83"/><circle cx="46.1" cy="76.93" r="5.24" style="fill:#e04c3d"/><circle cx="66.01" cy="76.93" r="5.24" style="fill:#e04c3d"/><circle cx="55.53" cy="77.19" r="1.05" style="fill:#afacac"/><rect x="159.79" y="75.09" width="15.72" height="3.67" rx="1.83"/><circle cx="158.22" cy="76.93" r="5.24" style="fill:#e04c3d"/><circle cx="178.13" cy="76.93" r="5.24" style="fill:#e04c3d"/><circle cx="167.65" cy="77.19" r="1.05" style="fill:#afacac"/><path d="M21.74,48.9h0A14.41,14.41,0,0,1,36.15,63.31V77.71a0,0,0,0,1,0,0H7.33a0,0,0,0,1,0,0V63.31A14.41,14.41,0,0,1,21.74,48.9Z" style="fill:#e04c3d"/><circle cx="199.35" cy="49.16" r="7.6" style="fill:#fff"/><rect x="21.48" y="48.9" width="1.05" height="28.82"/><path d="M30.29,174.06h0v-5.24a6.28,6.28,0,0,1,6.28-6.29h0v5.24A6.29,6.29,0,0,1,30.29,174.06Z" transform="translate(-18.76 -108.92)" style="fill:#1f1a5b"/><path d="M50.72,174.06h0v-5.24a6.29,6.29,0,0,0-6.29-6.29h0v5.24A6.29,6.29,0,0,0,50.72,174.06Z" transform="translate(-18.76 -108.92)" style="fill:#1f1a5b"/>

            <clipPath :id="'circleClip' + circleIndex" v-for="circleIndex in applications.length" :key="circleIndex">
                <circle :cx="(75 * (circleIndex)) - (25*(circleIndex)) +10" cy="50.5" r="10" />
            </clipPath>

            <circle 
            :cx="(75 * (circle)) - (25*(circle)) +10" 
            cy="50.5" r="11" 
            v-for="circle in applications.length" 
            :key="circle"
            fill="rgb(252, 101, 77)"
            />

            <image  v-for="(buddy, index) in applications" :key="index" 
            @click="openBuddyApplication(buddy)"
            href="https://cdn.discordapp.com/avatars/417710684781150211/20768633848d0dde4297d8307b6dbe7b" 
            :x="(75 * (index + 1)) - (25*(index+1))" 
            y="40.52" 
            width="20" 
            height="20"           
            class="cursor-pointer	"
            :clip-path="'url(#circleClip' + (index +1) + ')'"
            />
            
            <path d="M190.18,32.13h2.62a0,0,0,0,1,0,0V56.5a1.31,1.31,0,0,1-1.31,1.31h0a1.31,1.31,0,0,1-1.31-1.31V32.13A0,0,0,0,1,190.18,32.13Z" style="fill:#e04c3d"/><path d="M253,164.1l-5.5,2a26.81,26.81,0,0,1-9.21,1.64H211.56a2.62,2.62,0,0,1-2.62-2.62h32l11.52-2.1Z" transform="translate(-18.76 -108.92)"/><polygon points="194.52 69.05 194.52 69.05 199.46 56.52 202.03 58.32 194.52 69.05"/><polygon points="201.33 69.05 201.33 69.05 206.27 56.52 208.85 58.32 201.33 69.05"/><polygon points="209.71 69.05 209.71 69.05 214.65 56.52 217.23 58.32 209.71 69.05"/><polygon points="243.55 59.81 246.09 61.85 239.39 75.92 237.91 72.21 235.32 71.83 237.55 68.13 232.93 66.6 236.82 63.69 233.7 59.43 236.81 53.09 243.55 59.81"/><polygon points="242.05 70.38 252.18 74.57 262.48 71.95 249.38 65.14 245.66 61.21 242.05 70.38" style="fill:#505050"/></svg>
    </div>
    <div class="text-center text-h5"
    v-else>No buddies found. Try to change your filter.</div>

</v-container>   
</template>


<script>
export default {
    data ()  {
        return {
            screenSize: 3,
            isDialog: false,
            selectedBuddy: {},
        }
    },
    props: {
        applications: Array,
    },
    methods: {
        openBuddyApplication(buddy) {
            this.selectedBuddy = buddy
            this.isDialog = true
        }
        
    },
    mounted() {
        if(screen.width > 1400) {
            this.screenSize = 5
            // 15 %
        }
        if(screen.width > 1200 && screen.width < 1400) {
            this.screenSize = 4
            // 15 %
        }
    }

}
</script>


<style scoped>
</style>