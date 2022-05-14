<template>
  <div class="container">
    <div class="nav nav-tabs">
      <div
        class="nav-item"
        v-for="nav in aboutnav"
        :key="nav.name">
        <RouterLink
          :to="nav.href"
          active-class="active"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutnav: [
        {
          name: 'Hobby',
          href: '/about/hobby'
        },
        {
          name: 'Career',
          href: '/about/career'
        }
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
  .nav-pills {
    .nav-item {
      .nav-link {
        .active {}
      }
    }
  }
</style>