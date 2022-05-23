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
      <div
        class="arrow"
        v-show="visible">
        <span></span>
        <span></span>
        <!-- <span></span> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    }
  },
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
    },
    handleScroll() {
      const scrollY = window.scrollY
      console.log(scrollY)
      if (scrollY > 300) {
        this.visible = false
      } else if (scrollY < 300) {
        this.visible = true
      }
    }
  },
  mounted() {
    this.typingEffect()
    window.addEventListener("scroll", this.handleScroll)
    
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
      bottom: 60px;
      span {
      position: absolute;
      top: 0;
      left: 50%;
      width: 18px;
      height: 18px;
      margin-left: -12px;
      border-left: 1px solid $gray-700;
      border-bottom: 1px solid $gray-700;
      transform: rotate(-45deg);
      animation: arrow 1s infinite;
      opacity: 0;
      box-sizing: border-box;
      z-index: 3;
        &:nth-child(1) {
          animation-delay: 0s;
        }
        &:nth-child(2) {
          top: 14px;
          animation-delay: .15s;
        }
      }
    }
    @keyframes arrow {
      0% {
        opacity: 0;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0;
      }
    }
  }
}
</style>