<template>
  <div class="section">
    <!-- Work -->
    <a
      class="workBox"
      v-for="work in works"
      :key="work">
      <div class="img">
        <img
          :src="work.image"
          alt="Work" />
        <div class="lines"></div>
        <div class="angles"></div>
        <div class="info">
          <p>{{ work.info }}</p>
          <a
            :href="work.href"
            target="_blank">Go to Site</a>
        </div>
      </div>
      <div class="textBox">
        <h1>{{ work.name }}</h1>
      </div>
    </a>
    <!-- Skeleton -->
    <div
      class="skeletons"
      v-for="sk in 6-works.length"
      :key="sk">
      <div class="skeleton image"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      works: [
        {
          name: 'OMDbApi 영화 검색 사이트',
          href: 'https://movie-search-app-vue3.netlify.app',
          image: 'https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/omdb.png',
          info: 'OMDbApi를 활용한 영화 검색(영문) 사이트'
        },
        {
          name: 'OMDbApi 영화 검색 사이트(nuxt.js)',
          href: 'https://gunw-nuxt-movie-app.herokuapp.com/',
          image: 'https://raw.githubusercontent.com/pgw6541/source/master/Web-Portfolio/nuxt-movie-app.png',
          info: 'nuxt.js로 마이그레이션한 SSR OMDbApi 영화 검색 사이트'
        },
        {
          name: 'Todolist',
          href: 'https://gunw-todolist.netlify.app',
          image: 'https://raw.githubusercontent.com/pgw6541/source/master/Web-Portfolio/works_todolist.png',
          info: '할 일을 메모하는 기능을 구현한 Todolist.'
        },
        {
          name: '2017 Starbucks Home',
          href: 'https://starbucks-gunw.netlify.app',
          image: 'https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/starbucks.png',
          info: '2017년도 스타벅스 메인페이지 클론코딩'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
// border
$ease-in-out-quad: cubic-bezier(0.455, 0.03, 0.515, 0.955);
$color-grey: #A6AFC0;
$color-off-white: $gray-700;
// img size Responsive
$imgSize: 300px;
$xxl-imgSize: 250px;
$xl-imgSize: 200px;
$sm-imgSize: 180px;
$xxs-imgSize: 150px;

.section {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  .workBox {
    text-decoration: none;
    margin: 50px 20px 0 20px;
    .img {
      position: relative;
      img {
        width: $imgSize * 16/9;
        height: $imgSize;
      }
      &::after {
        content: '';
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0);
        opacity: 0;
        transition: .3s;
        
      }
      .lines {
        background:
          linear-gradient(to bottom, $color-off-white 2px, transparent 2px) 0 0, // TOP LEFT TO TOP RIGHT
          linear-gradient(to right, $color-off-white 2px, transparent 2px) 0 100%, // BOTTOM LEFT TO TOP LEFT
          linear-gradient(to left, $color-off-white 2px, transparent 2px) 100% 0, // TOP RIGHT TO BOTTOM RIGHT
          linear-gradient(to top, $color-off-white 2px, transparent 2px) 100% 100%; // BOTTOM RIGHT TO TOP RIGHT
        background-repeat: no-repeat;
        background-size: 0px 0px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        transition: 0.2s $ease-in-out-quad;
        margin: -10px;
      }
      .angles {
        background:
          linear-gradient(to right, $color-grey 2px, transparent 2px) 0 0, // TOP LEFT
          linear-gradient(to bottom, $color-grey 2px, transparent 2px) 0 0, // TOP LEFT
          linear-gradient(to left, $color-grey 2px, transparent 2px) 100% 0, // TOP RIGHT
          linear-gradient(to bottom, $color-grey 2px, transparent 2px) 100% 0, // TOP RIGHT
          linear-gradient(to left, $color-grey 2px, transparent 2px) 100% 100%, // BOTTOM RIGHT
          linear-gradient(to top, $color-grey 2px, transparent 2px) 100% 100%, // BOTTOM RIGHT
          linear-gradient(to right, $color-grey 2px, transparent 2px) 0 100%, // BOTTOM LEFT
          linear-gradient(to top, $color-grey 2px, transparent 2px) 0 100%; // BOTTOM LEFT
        background-repeat: no-repeat;
        background-size: 7px 7px;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0.48;
        transition: 0.2s $ease-in-out-quad;
        margin: -10px;
      }
      .info {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 2;
        opacity: 0;
        transition: .3s;
        opacity: 0;
        text-align: center;
        p {
          color: $white;
          margin: 20% 0 5%;
        }
        a {
          padding: 10px 25px;
          color: $white;
          text-decoration: none;
          background-color: $primary;
        }
      }
      &:hover {
        &::after {
          opacity: .85;
        }
        .lines {
          background-size: 100% 100%;
        }
        .angles {
          background-size: 14px 14px;
        }
        .info {
          opacity: 1;
          a {
          }
        }
      }
    }
    .textBox {
      text-align: center;
      h1 {
        color: $gray-600;
        font-size: 15px;
        font-weight: 700;
        margin-top: 20px;
        box-sizing: border-box;
      }
    }
  }
  // Skelton
  .skeletons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 50px 20px 50px 20px;
    .image {
      width: $imgSize * 16/9;
      height: $imgSize;
      background-color: $gray-900;
      border-radius: 10px;
    }
  }
  @include media-breakpoint-down(xxl) {
    .workBox {
      .img {
        img {
          width: $xxl-imgSize * 16/9;
          height: $xxl-imgSize;
        }
      }
    }
    .skeletons {
      .image {
        width: $xxl-imgSize * 16/9;
        height: $xxl-imgSize;
      }
    }
  }
  @include media-breakpoint-down(xl) {
    .workBox {
      .img {
        img {
          width: $xl-imgSize * 16/9;
          height: $xl-imgSize;
        }
      }
    }
    .skeletons {
      .image {
        width: $xl-imgSize * 16/9;
        height: $xl-imgSize;
      }
    }
  }
  @include media-breakpoint-down(lg) {
    .workBox {
      .img {
        img {
          width: $imgSize * 16/9;
          height: $imgSize;
        }
      }
    }
    .skeletons {
      .image {
        width: $imgSize * 16/9;
        height: $imgSize;
      }
    }
  }
  @include media-breakpoint-down(sm) {
    .workBox {
      .img {
        img {
          width: $sm-imgSize * 16/9;
          height: $sm-imgSize;
        }
        .info {
          p {
            margin: 20% 0 13%;
          }
          a {
            font-size: 12px;
            padding: 7px 15px;
          }
        }
      }
    }
    .skeletons {
      .image {
        width: $sm-imgSize * 16/9;
        height: $sm-imgSize;
      }
    }
  }
}
// xxs
@media only screen and (max-width: 350px) {
  .section {
    .workBox {
      .img {
        img {
          width: $xxs-imgSize * 16/9;
          height: $xxs-imgSize;
        }
        .info {
          p {
            margin: 15% 0 10%;

          }
          a {
            font-size: 12px;
            padding: 7px 15px;
          }
        }
      }
    }
    .skeletons {
      .image {
        width: $xxs-imgSize * 16/9;
        height: $xxs-imgSize;
      }
    }
  }
}
</style>