<template>
  <div class="container">
    <div class="title">
      <h1>Technology</h1>
    </div>
    <article class="article">
      <div
        class="logo"
        v-for="logo in logos"
        :key="logo">
        <img
          :src="logo.url"
          :class="logo.name"
          :alt="logo.name" />
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
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/html5.png"
        },
        {
          name: "css3",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/css3.png"
        },
        {
          name: "scss",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/sass.png"
        },
        {
          name: "javascript",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/javascript.png"
        },
        {
          name: "vue",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/vue.png"
        },
        {
          name: "webpack",
          url: "https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/webpack.png"
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
    // &:hover {
    //   animation-play-state: paused;
    // }
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
    justify-content: space-evenly;
    .logo {
      img {
        transition: .3s;
        // filter: invert(100%);
        &:hover {
          transform: scale(1.1);
        }
      }
      img.html5 {filter: invert(45%) sepia(50%) saturate(5613%) hue-rotate(348deg) brightness(93%) contrast(90%);}
      img.css3 {filter: invert(38%) sepia(31%) saturate(1816%) hue-rotate(168deg) brightness(92%) contrast(94%);}
      img.scss {filter: invert(56%) sepia(45%) saturate(661%) hue-rotate(283deg) brightness(85%) contrast(86%);}
      img.javascript {filter: invert(96%) sepia(48%) saturate(6450%) hue-rotate(339deg) brightness(101%) contrast(94%);}
      img.vue {filter: invert(68%) sepia(31%) saturate(645%) hue-rotate(101deg) brightness(91%) contrast(90%);}
      img.webpack {filter: invert(95%) sepia(13%) saturate(6639%) hue-rotate(172deg) brightness(100%) contrast(98%);}
    }
  }
}
</style>