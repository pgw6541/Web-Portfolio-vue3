<template>
  <header>
    <div class="logo">
      <img
        src="~/assets/logo.png"
        alt="logo" />
    </div>
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
    <div class="gitHubLogo">
      <a
        href="https://github.com/pgw6541"
        target="_blank">
        <img
          src="https://github.com/pgw6541/image_source/blob/master/gitHub.png?raw=true"
          alt="gitHub" />
      </a>
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
        },
      ]
    }
  }
})
</script>


<style lang="scss" scoped>
header {
  // background-color: $personal;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  border-bottom: 3px solid $black;
  z-index: 99;
  .logo {
    margin: 7px 0 0 20px;
    img {
      width: 46px;
      height: 46px;
    }
  }
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
        font-weight: 500;
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
  .gitHubLogo {
    a {
      img {
        margin: 10px 20px 0 0;
        width: 36px;
        height: 36px;
      }
    }
  }
}
</style>