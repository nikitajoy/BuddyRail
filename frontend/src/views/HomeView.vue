<template>
    <div>
        <h1 class="text-4xl">Home</h1>
        try: {{ switchState }}
        <SwitchRoot
        @click="() => {!switchState ?  switchState = true : switchState= false}"
      id="airplane-mode"
      class="w-[42px] h-[25px] focus-within:outline focus-within:outline-black flex bg-black/50 shadow-sm rounded-full relative data-[state=checked]:bg-black cursor-default"
    >
      <SwitchThumb
        class="block w-[21px] h-[21px] my-auto bg-white shadow-sm rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform translate-x-[19px]"
        :class="{'translate-x-[0px]': !switchState}"
      />
    </SwitchRoot>
    </div>
</template>
<script>
import { SwitchRoot, SwitchThumb } from 'radix-vue'

export default{
    data() {
        return {
            switchState: false,
        }
    }
}
</script>


<style scoped>


.PopoverTrigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: 35px;
  background-color: white !important;
  color: var(--violet-11);
  box-shadow: 0 2px 10px var(--black-a7);
}
.PopoverTrigger:hover {
  background-color: var(--mauve-3);
}
.PopoverTrigger:focus {
  box-shadow: 0 0 0 2px black;
}

.PopoverContent {
  border-radius: 4px;
  padding: 20px;
  width: 260px;
  font-size: 15px;
  line-height: 1;
  color: var(--violet-11);
  background-color: white;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
}
.PopoverContent:focus {
  outline: none;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px,
    0 0 0 2px var(--violet-7);
}

.PopoverArrow {
  fill: white;
}
</style>