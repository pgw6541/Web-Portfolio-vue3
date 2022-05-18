<template>
  <div class="section">
    <!-- Parallax -->
    <div class="para">
      <div class="para_img"></div>
      <div class="para_text">
        <p>
          <span class="text"></span>
          <span class="blink">|</span>
        </p>
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
  methods: {
    typingEffect() {
      const content = "안녕하세요. \n 프론트엔드 개발자 \n 박건우 입니다.";
      const text = document.querySelector(".text");
      let i = 0;

      function typing(){
        if (i < content.length) {
          let txt = content.charAt(i);
          text.innerHTML += txt=== "\n" ? "<br />": txt;
          i++;
        }
      }
      setInterval(typing, 150)
    }
  },
  mounted() {
    this.typingEffect()
  }
}
</script>

<style lang="scss" scoped>
.section{
  .para {
    width: 100%;
    height: 90vh;
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
        opacity: .7;
      }
    }
    .para_text {
      width: $inner;
      height: 100%;
      position: absolute;
      display: flex;
      // Center
      justify-content: center;
      align-items: center;
      text-align: left;
      p {
        color: $white;
        width: 50%;
        line-height: 2;
      }
      span.text {
        font-weight: bold;
        font-size: 32px;
      }
      span.blink {
        animation: blink .85s infinite;
        font-weight: normal;
        font-size: 38px;
      }
      @keyframes blink {
        to {
          opacity: 0;
        }
      }

    }
  }
  .container {
    padding-top: 85px;
    height: 1500px;
  }
}
</style>