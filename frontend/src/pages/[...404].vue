<template>
    <div>
        oops, not found
        <router-link :to="`/`">Go to main page</router-link>
    </div>
</template>


<script>

export default {
    created() {
        this.$router.push('/')
    }
}
</script>