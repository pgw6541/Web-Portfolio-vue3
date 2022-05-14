<template>
  <div class="nav">
    <div
      class="nav-item"
      v-for="nav in aboutnav"
      :key="nav.name">
      <RouterLink
        :to="nav.href"
        class="nav-link">
        {{ nav.name }}
      </RouterLink>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutnav: [
        {
          name: 'Career',
          href: '/career'
        },
        {
          name: 'Hobby',
          href: '/hobby'
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
        
      }
    }
  }
</style>