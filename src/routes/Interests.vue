<template>
  <section class="section1 interests">
    <InterHeader />
  </section>
  <section class="section2">
    <RouterView />
  </section>
</template>

<script>
import InterHeader from "~/components/Inter_header"
export default {
  components: {
    InterHeader
  }
}
</script>

<style lang="scss" scoped>
section {
  text-align: center;
}
.section1 {
  padding-top: 85px;
}
.section2 {
  color: $white;
}
</style>