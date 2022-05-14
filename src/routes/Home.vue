<template>
  <div
    class="section">
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
    </div> <!--container-->
  </div> <!-- section -->
</template>
<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('about' [
      'name',
      'email'
    ])
  },
}
</script>

<style lang="scss" scoped>
  .container {
    padding-top: 85px;
    height: 1500px;
  }
</style>