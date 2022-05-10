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
          name: 'Home',
          href: '/'
        },
        {
          name: 'Products',
          href: '/products'
        },
        {
          name: 'About',
          href: '/about'
        }
      ]
    }
  }
})
</script>


<style lang="scss" scoped>
header {
  // background-color: $personal;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  border-bottom: 3px solid $black;
  z-index: 99;
  .nav {
    margin: 10px 0 10px 0;
    .nav-item {
      width: 100px;
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
      .nav-link {
        font-size: 18px;
        font-weight: bold;
        color: $black;
        text-align: center;
        transition: .3s;
        &.active {
          color: $white;
        }
        &:hover {
          color: $gray-400;
        }
      }
    }
  }
}
</style>