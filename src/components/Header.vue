<template>
  <header 
    class="header navber"
    :class="{ 'navber--hidden': !showNavbar}">
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
          active-class="nav-active"
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
          name: 'Home',
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
      ],
      showNavbar: true,
      lastScrollPosition: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  unmounted() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if(currentScrollPosition < 0) {
        return
      }
      if(Math.abs(currentScrollPosition - this.lastScrollPosition) < 50){
        return
      }
      this.showNavbar = currentScrollPosition < this.lastScrollPosition
      this.lastScrollPosition = currentScrollPosition
    }
  }

}
</script>


<style lang="scss" scoped>
header {
  width: 100%;
  height: 70px;
  background-color: rgba(0,0,0,.9);
  border-bottom: 3px solid $primary;
  box-sizing: border-box;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  transform: translate3d(0, 0, 0);
  transition: all .2s ease-out;

  z-index: 9;
  &.navber--hidden {
    transform: translate3d(0, -100%, 0);
  }
   // 최상단에서만 보이게
  // &.scrollDown {
  //   position: fixed;
  //   transform: translate(0, -70px);
  // }
  

  .logo {
    margin-left: 20px;
    img {
      width: 30px;
      opacity: 0;
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
        color: $gray-500;
        text-align: center;
        @include magic-border(1px, $primary, .1s, 1);
        &:hover {
          color: $white;
        }
        &.nav-active {
          color: $white;
          box-sizing: border-box;
          background-color: $primary;
          border-radius: 0;
          @include magic-border(0px, $primary, .1s, 1);
        }
      }
    }
  }
  .gitHubLogo {
    a {
      img {
        width: 36px;
        margin-right: 20px;
        filter: invert(70%);
        transition: .2s;
        &:hover {
          filter: invert(100%);
        }
      }
    }
  }
}
</style>