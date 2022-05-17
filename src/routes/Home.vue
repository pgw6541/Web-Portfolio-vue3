<template>
  <div class="section">
    <!-- Parallax -->
    <div class="para">
      <div class="para_img"></div>
      <div class="para_text">
        <p>나를 소개합니다_introduce my self</p>
      </div>
    </div>

    <div class="container">
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
.section{
  .para {
    width: 100%;
    height: 720px;
    background: url('~/assets/parallax_img.jpg') no-repeat center;
    background-size: cover;
    background-attachment: fixed;
    position: relative;
    .para_img {
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: $black;
        top: 0;
        left: 0;
        opacity: .5;
    }
    }
    .para_text {
      width: 100%;
      height: 100%;
      position: absolute;
      display: flex;
      // Center
      justify-content: center;
      align-items: center;
      text-align: center;
      p {
        width: $inner;
        color: $white;
        font-weight: bold;
        font-size: 56px;
        letter-spacing: 0.25rem;
      }

    }
  }
  .container {
    padding-top: 85px;
    height: 1500px;
  }
}
</style>