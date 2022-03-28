<template>
  <div class="home">
    <div class="bg-blue w-52 h-44 text-black">hgggg</div>
    <div class="w-48 h-10">
      <CostomButton :plusminus="true" @clicked="handleDialog"  type="submit" btnText="Submitll" ></CostomButton>
    </div>
    <div v-if="dialog" class=""><Dialog>hi</Dialog></div>
    <div class="w-16 h-16 bg-light_gray"></div>
    <div class="w-16 h-16 bg-dark_gray"></div>
    <div class="w-32 h-8">
<InputFeild :search="true" :border="true" placeholder="search" label="name" @changetext="settext"/>
</div>



<Divider/>
 </div>
</template>

<script>
import CostomButton from '@/components/button/Button.vue'
import InputFeild from '../components/input-field/InputField.vue'
import Divider from '../components/devider/Devider.vue'
import Dialog from "../components/dialoge/Dialoge"
export default {
  name: 'Home',
  components: {
    CostomButton,
    InputFeild,
    Divider,
    Dialog
  },
  data () {
    return {
text:null,
      dialog:false

    }
  },
  methods: {
    settext (value) {
      this.text = value
    },handleDialog(){
      this.dialog=true
    }
  },

}
</script>

<style>
.ghj{
  transform-origin: top;
  transition: transform .4s ease-in-out;

}
.slide-enter, .slide-leave-to{
  transform: scaleY(0);
}
.hg{
  transform: translate(-2em);
  z-index: -1;
  opacity: 0;
}
.hj{
  transform: translateY(0%);
  /* transition-delay:1s; */
  opacity: 1;
  z-index: 1;

   transition: all 1s ease-in-out;
}
</style>
