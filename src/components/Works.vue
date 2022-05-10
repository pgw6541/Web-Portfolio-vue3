<template>
  <div class="box">
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
          info: ''
        },
        {
          name: '2017 Starbucks',
          href: 'https://starbucks-gunw.netlify.app',
          image: 'https://raw.githubusercontent.com/pgw6541/image_source/master/Web-Portfolio/starbucks.png',
          info: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$imgSize: 300px;
  .box{
    display: flex;
    justify-content: center;
    .workBox {
      padding: 50px 50px;
      text-decoration: none;
      img {
        width: $imgSize * 16/9;
        height: $imgSize;
        border: 1px solid black;
      }
      .textBox {
        display: flex;
        justify-content: center;
        h1 {
          color: $black;
          font-size: 15px;
          font-weight: 700;
          margin-top: 10px;
          box-sizing: border-box;
        }
      }
    }
  }
</style>