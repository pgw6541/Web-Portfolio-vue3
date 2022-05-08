<template>
  <header>
    <ul class="nav nav-pills">
      <li
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </li>
    </ul>
  </header>
</template>

<script>


export default ({
  data() {
    return {
      navigations: [
        {
          name: '홈',
          href: '/'
        },
        {
          name: '작업물',
          href: '/products'
        },
        {
          name: '소개',
          href: '/about'
        }
      ]
    }
  }
})
</script>


<style lang="scss" scoped>
  header {
    font-size: 18px;
    font-weight: bold;
    // font-family: "Oswald", sans-serif;
    .nav {
      .nav-item {
        .nav-link {

        }
      }
    }
  }
</style>