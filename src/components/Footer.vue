<template>
  <footer>
    <a 
      href="https://github.com/pgw6541"
      target="_blank">
      &copy; {{ new Date().getFullYear() }} GUNW
    </a>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
footer{
  text-align: center;
  a {
    color: $black;
    font-size: 11px;
    text-decoration: none;
    &:hover {
      color: $primary;
    }
  }
}
</style>