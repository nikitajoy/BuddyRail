<template>
<v-btn color="green-darken-3" @click="invokeDialog">{{ message }}</v-btn>
</template>


<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        invokeDialog() {
            this.$emit('invokeDialog', 'hello from child')
        }
    },
    props :{
        message: String
    }
}
</script>