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
export default {
  data() {
    return {
      navigations: [
        {
          name: 'About',
          href: '/'
        },
        {
          name: 'Products',
          href: '/products'
        },
        {
          name: 'Interests',
          href: '/interests'
        },
      ]
    }
  }
}
</script>


<style lang="scss" scoped>
header {
  height: 70px;
  background-color: $black;
  border-bottom: 2px solid $primary;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 9;
  .logo {
    margin-left: 20px;
    img {
      width: 46px;
    }
  }
  .nav {
    .nav-item {
      width: 100px;
      margin-left: 20px;
      &:first-child {
        margin-left: 0;
      }
      .nav-link {
        font-size: 18px;
        font-weight: 500;
        color: $white;
        text-align: center;
        transition: .3s;
        &.active {
          color: $gray-400;
        }
        &:hover {
          color: $gray-600;
        }
      }
    }
  }
  .gitHubLogo {
    a {
      img {
        width: 36px;
        margin-right: 20px;
        filter: invert(100%);
      }
    }
  }
}
</style>