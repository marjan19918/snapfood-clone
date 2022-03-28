<template>
  <div class="dialog-container">
      <div class="h-full w-full relative dialog">
<div class="top-32
 m-auto dialog-slot-container bg-white w-68 h-32 absolute">
    <slot></slot>
</div>
      </div>
  </div>
</template>

<script>
export default {
data(){
  return{

  }
}
}
</script>

<style lang="scss" scoped>
.dialog-container{
  width:2500vh;
  height: 100vh;
  position: absolute;
  top:0;
  left: 0;
  background: rgb(58,61,66,0.2);
}
</style>
