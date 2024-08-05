<template>
  <div v-if="showing"> 
    <div class="fixed left-0 top-0 z-[1055] bg-gray-400 h-full w-full overflow-y-auto overflow-x-hidden outline-none"> 
      <div class="flex align-center justify-center opacity-25">
        <div class="w-4/12 bg-white opacity-100 m-10">
          <h2>This is a modal window!</h2>
          <button class="bg-red-600 p-2 rounded" @click="closeForm">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showing: {
      required: true,
      type: Boolean
    }
  },
  methods: {
    closeForm(){
      this.$emit('close-form', false)
    }
  }
}
</script>