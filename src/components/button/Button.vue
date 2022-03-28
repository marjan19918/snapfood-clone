<template>
  <div>
    <button :type="type" :disabled="disabled" @click="$emit('clicked')"
    :class="{'bg-white text-red rounded':plusminus ,
    'bg-red rounded-md text-white':enter,
    'bg-white text-red rounded-lg':choice,
    'bg-white text-green rounded-lg':comment,
    'text-dark_gray bg-light_gray':disabled }"
    class="text-2xl w-full h-full" >
    {{ btnText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'submit' },
    btnText: { type: String, required: false },
    enter:{type:Boolean,required:false},
    choice:{type:Boolean,required:false},
    comment:{type:Boolean,required:false},
    plusminus:{type:Boolean,required:false},
    disabled:{type:Boolean,required:false}
  }
}
</script>

<style scoped>

</style>
