<template>
  <div class="home">
    <div class="bg-blue w-52 h-44 text-black">hgggg</div>
    <div class=" w-48 h-10 ">
 <CostomButton type="submit" btnText="Submitll" ></CostomButton>
    </div>
  </div>
</template>

<script>

import CostomButton from '@/components/button/Button.vue'

export default {
  name: 'Home',
  components: {
    CostomButton
  }
}
</script>
