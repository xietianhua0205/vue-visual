<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import data from './data.json'
import { reactive, ref } from '@vue/reactivity';

export default {
  name: "App",
  setup () {
    const num = ref(1)
    const obj = reactive({
      name: 1
    })
    console.log(data)
    debugger
    return {
      obj,
      num
    }
  }
}
</script>

<style scoped>

</style>
