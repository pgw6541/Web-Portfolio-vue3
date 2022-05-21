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
      <div class="arrow"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    typingEffect() {
      let typeText = document.querySelector(".typing")
      // let textToBeTyped = "박건우입니다."
      let textToBeTypedArr = ["","","사용자를 생각하며","꾸준히 노력하는", "프론트엔드 개발자", "박건우 입니다."]
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
  width: 100%;
  height: inherit;
  .para_text {
    width: inherit;
    height: inherit;
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
    .arrow {
      position: absolute;
      bottom: 30px;
      left: 50%;
      width: 30px;
      height: 50px;
      margin-left: -15px;
      border: 2px solid $gray-800;
      border-radius: 50px;
      box-sizing: border-box;
      z-index: 3;
      &::before {
        position: absolute;
        top: 10px;
        left: 50%;
        content: '';
        width: 6px;
        height: 6px;
        margin-left: -3px;
        background-color: $gray-800;
        border-radius: 100%;
        -webkit-animation: dot 2s infinite;
        animation: dot 2s infinite;
        box-sizing: border-box;
      }
    }
    @keyframes dot {
      0% {
        transform: translate(0, 0);
        opacity: 0;
      }
      40% {
        opacity: 1;
      }
      80% {
        transform: translate(0, 10px);
        opacity: 0;
      }
      100% {
        opacity: 0;
      }
    }
  }
}
</style>