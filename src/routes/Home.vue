<template>
  <div class="container">
    <div class="image">
      <img
        class="logo"
        src="~/assets/logo.png"
        alt="" />
    </div>
    <div class="text"></div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
.container {
  width: 100vw;
  height: calc(100vh - 84px);
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