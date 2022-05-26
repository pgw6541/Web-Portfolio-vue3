<template>
  <div class="container">
    <h1>Contact</h1>
    <div class="textBox">
      <div class="intro">
        안녕하세요. 포트폴리오에 관심을 가져주셔서 감사합니다!
      </div>
      <Emailsend />
    </div>
  </div>
</template>

<script>
import Emailsend from "~/components/Emailsend"
export default {
  components: {
    Emailsend
  }
}
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  color: $white;
  padding-top: 85px;
}
</style>