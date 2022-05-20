<template>
  <div class="container">
    <section class="section interests">
      <h4>작업중인 페이지입니다.</h4>
      <RouterView />
    </section>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    padding-top: 85px;
    height: 90vh;
    section {
      text-align: center;
      margin-top: 80px;
      h4 {
        color: $white;
      }
    }
  }
</style>