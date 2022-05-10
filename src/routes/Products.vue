<template>
  <div class="container">
    <div class="products">
      <Works />
    </div>
  </div>
</template>

<script>
import Works from "~/components/Works"

export default {
  components: {
    Works
  }
}
    console.log('name')
</script>

<style lang="scss" scoped>
  .container {
    background-color: $gray-200;
  }
</style>