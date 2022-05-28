<template>
  <div class="container">
    <h1>Contact Us</h1>
    <div class="textBox">
      <div class="intro">
        안녕하세요. 포트폴리오에 관심을 가져주셔서 감사합니다!
        <p>저에 대하여 더 궁금하시다면 아래 내용을 작성하여 보내주시면 감사합니다.</p>
      </div>
    </div>
    <div class="form">
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
  height: 100%;
  color: $white;
  text-align: center;
  padding-top: 160px;
  h1 {
    font-size: 36px;
    color: $gray-400;
  }
  .textBox {
    margin-top: 80px;
    .intro {
      font-size: 18px;
      p {
        color: $gray-400;
        font-size: 11px;
        margin: 12px 0;
      }
    }
  }
}
</style>