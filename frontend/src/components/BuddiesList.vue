<template>


<v-container>

    <div class="d-flex justify-center flex-wrap ga-3">
        <v-sheet v-for="(item, index) in applications" :key="index" rounded
        :height="200" :width="200" border></v-sheet>

    </div>

    <v-pagination
    dense
      v-model="chosenPage"
      :length="99"
      :total-visible="1"
      rounded="circle"
    ></v-pagination> 

</v-container>   
</template>


<script>
export default {
    data ()  {
        return {
            chosenPage: 1
        }
    },
    props: {
        applications: Array,
    },
    methods: {

    }
}
</script>
