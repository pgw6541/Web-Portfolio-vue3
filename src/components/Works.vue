<template>
  <div class="box container">
    <!-- Work -->
    <a
      class="workBox"
      v-for="work in works"
      :key="work"
      :href="work.href"
      target="_blank">
      <img
        :src="work.image"
        alt="Work" />
      <div class="textBox">
        <h1>{{ work.name }}</h1>
        <p>{{ work.info }}</p>
      </div>
    </a>
    <!-- Skeleton -->
    <div
      class="skeletons"
      v-for="sk in 4"
      :key="sk">
      <div class="skeleton image">
        <div class="skeleton title"></div>
      </div>
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
        },
        {
          name: '2017 Starbucks',
          href: 'https://starbucks-gunw.netlify.app',
          image: 'https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/starbucks.png',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    background-color: $gray-100;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .workBox {
      text-decoration: none;
      margin: 50px 20px 0 20px;
      img {
        width: $imgSize * 16/9;
        height: $imgSize;

        border: 2px solid $gray-200;
        border-radius: 3%;
      }
      .textBox {
        text-align: center;
        h1 {
          color: $black;
          font-size: 15px;
          font-weight: 700;
          margin-top: 10px;
          box-sizing: border-box;
        }
      }
    }
    // Skelton
    .skeletons {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      margin: 50px 20px 0px 20px;
      .image {
        width: $imgSize * 16/9;
        height: $imgSize;
        background-color: $gray-200;
        border-radius: 3%;
        position: relative;
        .title {
            width: 200px;
            height: 24px;
            background-color: $gray-200;
            justify-content: center;
            position: absolute;
            left: 50%;
            bottom: -34px;
            transform: translateX(-50%)
          }
      }
    }
  }
</style>