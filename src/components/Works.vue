<template>
  <div class="box">
    <a
      class="workBox"
      v-for="work in works"
      :key="work"
      :href="work.href">
      <img
        :src="work.image"
        alt="Work" />
    </a>
  </div>
</template>

<script>

export default {
  data() {
    return {
      works: [
        {
          name: 'omdbApi',
          href: 'https://movie-search-app-vue3.netlify.app',
          image: 'src/assets/omdb.png'
        },
        {
          name: 'starBucks',
          href: 'https://starbucks-gunw.netlify.app',
          image: 'src/assets/starbucks.png'
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
      img {
        width: $imgSize * 16/9;
        height: $imgSize;
      }
    }
  }
</style>