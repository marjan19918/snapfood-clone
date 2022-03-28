<template>
  <div class="flex flex-col items-start relative input-container">
    <label class="text-gray">{{label}}</label>
    <input @input="$emit('changetext',text)"
    :placeholder="placeholder"
    :type=type
    class="bg-white text-black outline-none rounded-md text-sm text-right"
    :class="{'border-2 border-solid border-dark_gray  focus:border-black':border,}"
     v-model="text" />
      <img class="magnifier"  v-if="search" src="../../assets/icons/search-svgrepo-com.svg"/>
  </div>
</template>

<script>
export default {
  name: 'InputField',
  props: {
    placeholder: { type: String, required: false },
    label: { type: String, required: false },
    maxlength: { type: Number, required: false },
    type: { type: String, required: false },
    border:{type:Boolean,default:false},
    search:{type:Boolean,default:false},


  },
  data () {
    return {
      text: ''
    }
  },
  methods:{

  }

}
</script>
<style lang="scss" rel="stylesheet/scss">

.input-container{
  width: fit-content;
  height: fit-content;
  input{
    &::placeholder{
      color:rgb(235,237,240)
    }
  }
  .magnifier{
    position:absolute;
    top:25px;
    left:0;
    width: 25px;
    height: 25px;

  }
}
</style>

