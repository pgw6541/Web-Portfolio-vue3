<template>
  <div class="container">
    <Emailsend />
  </div>
</template>

<script>
import Emailsend from "~/components/Emailsend"
export default {
  components: {
    Emailsend
  }
}
</script>

<style lang="scss" scoped>
.container {
  color: $white;
  padding-top: 85px;
}
</style>