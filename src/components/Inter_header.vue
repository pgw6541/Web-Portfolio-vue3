<template>
  <header class="header navbar">
    <div class="nav nav-pills">
      <div 
        v-for="nav in internavs"
        :key="nav.name"
        class="nav-item">
        <RouterLink
          :to="nav.href"
          class="nav-link">
          {{ nav.name }}
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      internavs: [
        {
          name: 'Movie',
          href: '/interests'
        },
        {
          name: 'Game',
          href: '/interests/game'
        },
        {
          name: 'Hardware',
          href: '/interests/hardware'
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  height: 70px;
  .nav-pills {
    margin: 0 auto;
    .nav-item {
      .nav-link {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 100px;
        margin: 15px;
        color: $white;
        font-size: 28px;
        text-align: center;
        background-color: $primary;
      }
    }
  }
}
</style>
