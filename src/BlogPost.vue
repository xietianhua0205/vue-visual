<template>
  <div class="blog-post">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
    <strong>This is an Error for Demo Purposes</strong>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "BlogPost",
  props: ['title'],
  setup (props) {
    console.log(props)
  }
}
</script>

<style scoped>

</style>
