<template>
  <footer>
    <a 
      href="https://github.com/pgw6541"
      target="_blank">
      &copy; {{ new Date().getFullYear() }} {{ nickname }}
    </a>
  </footer>
</template>

<script>
export default {
  computed: {
    nickname() {
      return this.$store.state.about.nickname
    }
  }
}
</script>

<style lang="scss" scoped>
footer{
  text-align: center;
  box-sizing: border-box;
  padding: 20px 0 20px;
  a {
    color: $white;
    font-size: 11px;
    text-decoration: none;
    &:hover {
      color: $primary;
    }
  }
}
</style>