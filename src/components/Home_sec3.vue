<template>
  <div class="container">
    <div class="title">
      <h1>Technology</h1>
    </div>
    <article class="article">
      <div
        class="tech_box"
        v-for="logo in logos"
        :key="logo">
        <img
          :src="logo.url"
          :class="logo.name"
          :alt="logo.name" />
        <span
          class="bubble_box"
          :class="logo.name">
          <div>
            <h1>
              {{ logo.title }}
            </h1>
            <p>
              {{ logo.text }}
            </p>
          </div>
        </span>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logos: [
        {
          name: "html5",
          title: "HTML",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/html5.png",
          text: "웹 표준, 시멘틱 마크업 등 꾸준히 학습하는 중입니다."
        },
        {
          name: "css3",
          title: "CSS3",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/css3.png",
          text: "웹 최적화, 성능 향상을 위해 프레임워크 및 신기술 동향을 살핍니다."
        },
        {
          name: "sass",
          title: "Sass(Scss)",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/sass.png",
          text: "최근에 접하게되었으며 흥미롭게 배워가는 중입니다."
        },
        {
          name: "javascript",
          title: "JavaScript",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/javascript.png",
          text: "꾸준히 복습하며, 라이브러리 사용에 관심이 많습니다."
        },
        {
          name: "vue",
          title: "Vue",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/vue.png",
          text: "처음 배워보는 SPA프레임워크, 흥미롭게 배우고 있으며 다른 프레임워크에도 관심이 있습니다."
        },
        {
          name: "webpack",
          title: "WebPack",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/webpack.png",
          text: "많은 부분이 생소하나 모듈 및 플로그인 관리가 흥미로워 배워나가고 있습니다."
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  .title {
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
    margin: 0 auto 100px;
    background-color: $primary;
    background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);
    border-radius :30% 70% 70% 30% / 30% 30% 70% 70%;
    box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
    animation: morphing 10s infinite;
    h1 {
      color: white;
      font-family: "Oswald", sans-serif;
      font-weight: 400;
      font-size: 35px;
      line-height: 100%;
      text-transform: uppercase;
      letter-spacing: 0.02em;
      margin: auto;
    }
    @keyframes morphing {
      0% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
        box-shadow: 15px 15px 50px rgba(0,0,0,0.2);
      }
      25% { 
        border-radius: 58% 42% 75% 25% / 76% 46% 54% 24%;
      }
      50% {
        border-radius: 50% 50% 33% 67% / 55% 27% 73% 45%;
        box-shadow: -10px -5px 50px rgba(0,0,0,0.2);
      }
      75% {
        border-radius: 33% 67% 58% 42% / 63% 68% 32% 37%;
      }
    }
  }

  article {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .tech_box {
      // width: 72px;
      width: 16.6667%;
      text-align: center;
      position: relative;
      img {
        width: 72px;
        margin: 0 auto;
        transition: .3s;
        &:hover {
          transform: scale(1.15);
        }
      }
      img.html5 {filter: invert(45%) sepia(50%) saturate(5613%) hue-rotate(348deg) brightness(93%) contrast(90%); &:hover + span.html5 {opacity: 1; display: block;}}
      img.css3 {filter: invert(38%) sepia(31%) saturate(1816%) hue-rotate(168deg) brightness(92%) contrast(94%); &:hover + span.css3 {opacity: 1; display: block;}}
      img.sass {filter: invert(56%) sepia(45%) saturate(661%) hue-rotate(283deg) brightness(85%) contrast(86%); &:hover + span.sass {opacity: 1; display: block;}}
      img.javascript {filter: invert(96%) sepia(48%) saturate(6450%) hue-rotate(339deg) brightness(101%) contrast(94%); &:hover + span.javascript {opacity: 1; display: block;}}
      img.vue {filter: invert(68%) sepia(31%) saturate(645%) hue-rotate(101deg) brightness(91%) contrast(90%); &:hover + span.vue {opacity: 1; display: block;}}
      img.webpack {filter: invert(95%) sepia(13%) saturate(6639%) hue-rotate(172deg) brightness(100%) contrast(98%); &:hover + span.webpack {opacity: 1; display: block;}}

      .bubble_box {
        width: 250px;
        margin-bottom: 24px;
        padding: 8px;
        background-color: #fff;
        border-radius: 5px;
        position: absolute;
        bottom: 100%;
        right: 50%;
        transform: translateX(50%);
        transition: opacity .3s;
        display: none;
        opacity: 0;
        h1 {
          color: $gray-700;
          font-size: 12px;
          margin: 0 auto 5px;
          padding-bottom: 5px;
        }
        p {
          color: $black;
          font-size: 14px;
        }
        &:after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 0;
          border: 10px solid transparent;
          border-top-color: #ffffff;
          border-bottom: 0;
          margin-left: -10px;
          margin-bottom: -10px;
        }
      }
    }
  }
  @include media-breakpoint-down(lg) {
    article {
      justify-content: space-evenly;
      .tech_box {
        .bubble_box {
          width: 200px;
        }
      }
    }
  }
  @include media-breakpoint-down(md) {
    article {
      justify-content: space-evenly;
      .tech_box {
        width: 33.333%;
        img {
          margin-bottom: 60px;
        }
        .bubble_box {
          width: 170px;
        }
      }
    }
  }
  @include media-breakpoint-down(sm) {
    article {
      .tech_box {
        width: 50%;
        text-align: center;
        img {
          margin: 0 auto 40px;
        }
      }
    }
  }
}
</style>