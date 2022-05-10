<template>
  <header>
    <div class="nav nav-pills">
      <div
        v-for="nav in navigations"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
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
  background-color: $personal;
  display: flex;
  justify-content: center;
  .nav {
    width: 300px;
    margin: 10px 0 10px 0;
    font-size: 18px;
    font-weight: bold;
    box-sizing: border-box;
    .nav-item {
      width: 33.3333333%;
      .nav-link {
        color: #fff;
        text-align: center;
        transition: .3s;
        &:hover {
          color: $gray-500;
        }
      }
    }
  }
}
</style>