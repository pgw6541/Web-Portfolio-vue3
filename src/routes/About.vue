<template>
  <div class="container">
    <div class="article1 profile">
      <img
        src="~/assets/logo.png"
        style="width:200px; height:200px;"
        alt="임시" />
    </div>
    <div class="textBox">
      <div class="name"></div>
      <div class="gender"></div>
      <div class="age"></div>
      <div class="email"></div>
    </div>
    <div class="article2">
      <RouterView />
    </div>
  </div> <!--container-->
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('about' [
      'name',
      'email'
    ])
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100vh;
  background-color: $gray-200;
}
</style>