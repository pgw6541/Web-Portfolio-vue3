<template>
  <div class="section container">
    <div class="image">
      <img
        class="logo"
        :src="image"
        alt="" />
    </div>
    <div class="text"></div>
  </div>
</template>

<script>
export default {
  computed: {
    image() {
      return this.$store.state.about.image
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: calc(100vh);
  position: relative;
  .image {
    
    // 드래그(drag) 방지
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    img {
      width: 300px;
      height: 300px;
      // border: 3px solid $black;
      // border-radius: 50%;
    }
  }
}
</style>