<template>
  <!-- Parallax -->
  <div class="para">
    <div class="para_img"></div>
    <div class="para_text">
      <p>
        <span class="text">Welcome to my portfolio</span>
        <br />
        <span class="typing"></span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    typingEffect() {
      let typeText = document.querySelector(".typing")
      // let textToBeTyped = "박건우입니다."
      let textToBeTypedArr = ["","","사용자을 생각하며","꾸준히 노력하는", "프론트엔드 개발자", "박건우 입니다."]
      let index = 0, isAdding = true, textToBeTypedIndex = 0
      
      function playAnim() {
        setTimeout(function () {
          typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index)
          if (isAdding) {
            if (index > textToBeTypedArr[textToBeTypedIndex].length) {
              isAdding = false
              setTimeout(function () {
                playAnim()
              }, 1000)
              return
            } else {
              index++
            }
          } else {
            if (index === 0) {
              isAdding = true
              textToBeTypedIndex = (textToBeTypedIndex + 1) % textToBeTypedArr.length
            } else {
              // decrement index by 1
              index--
            }
          }
          // call itself
          playAnim()
        }, isAdding ? 120 : 60)
      }
          // start animation
          playAnim()
    }
  },
  mounted() {
    this.typingEffect()
  }
}
</script>

<style lang="scss" scoped>
.para {
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
      line-height: 2;
    }
    span.text {
      font-family: "Dancing Script", serif;
      font-weight: bold;
      font-size: 96px;
    }
    span.typing {
      font-family: "Noto Sans KR", serif;
      font-weight: normal;
      font-size: 46px;
      &::after {
        content: "|";
        animation: blink 1s step-end infinite;
        font-size: 60px;
        line-height: 1.25;
        font-weight: normal;
      }

    }
    @keyframes blink {
      0% {
        opacity: 1;
      }
      49% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }

  }
}
</style>