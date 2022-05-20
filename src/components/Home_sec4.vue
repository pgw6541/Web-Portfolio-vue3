<template>
  <div class="container">
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
  article {
    display: flex;
    justify-content: space-evenly;
    .logo {
      img {
        transition: .3s;
        filter: invert(100%);
        &:hover {
          filter: invert(70%);
          transform: scale(1.1);
          
        }
      }
    }
  }
}
</style>