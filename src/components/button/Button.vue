<template>
  <div>
    <button :type="type" class="bg-red rounded-md text-white text-2xl w-full h-full ">{{ btnText }}</button>
  </div>
</template>

<script>
export default {
  props: {
    type: { type: String, default: 'submit' },
    btnText: { type: String, required: false }
  }
}
</script>

<style>
.btn{background:rgb(255, 0, 166);}
</style>
