<template>
  <div class="about p-8">
    <div class="flex flex-col h-32 bg-blue rounded-xl ">
      <div class="flex flex-row w-128   ">
        <div>
          <div class="w-100 h-">hello</div>
        </div>
        <div
          class="bg-blue w-1/2 rounded-t-xl"
          v-for="col in columns"
          :key="col"
        >
          <div class="bg-red w-full">
            {{ col.title }}
          </div>

        </div>
      </div>

      <div class="overflow-scroll ">
        <div v-for="ro in row" :key="ro" class="flex flex-row ">
          <div class="w-1/2 ">{{ ro.b }}</div>
          <div>سلام به نام خدا</div>
        </div>
      </div>
    </div>

    <div class="flex flex-row w-128 h-48 bg-black">
      <div class="w-1/2 bg-red"></div>
      <div class="bg-blue w-48 invisible">
<!--        <div class="invisible">lllllllllll</div>-->

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns: [
        {
          title: 'a',
          name: 'b'
        },
        {
          title: 'c',
          name: 'e'
        }
      ],
      row: [
        {
          b: 1,
          e: '2'
        },
        {
          b: 1,
          e: '2'
        },
        {
          b: 1,
          e: '2'
        },
        {
          b: 1,
          e: '2'
        },
        {
          b: 1,
          e: '2'
        },
        {
          b: 1,
          e: '2'
        },
        {
          b: 1,
          e: '2'
        }
      ]
    }
  }
}
</script>
<style>
.g {
  visibility: hidden
}
</style>
