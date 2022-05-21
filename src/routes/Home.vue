<template>
  <section class="section1">
    <Homesec1 />
  </section>
  <section class="section2">
    <Homesec2 />
  </section>
  <section class="section3">
    <Homesec3 />
  </section>
  <section class="section4">
    <Homesec4 />
  </section>
</template>
<script>
import { mapState } from 'vuex'
import Homesec1 from "~/components/Home_sec1.vue";
import Homesec2 from "~/components/Home_sec2.vue";
import Homesec3 from "~/components/Home_sec3.vue";
import Homesec4 from "~/components/Home_sec4.vue";

export default {

  components: {
    Homesec1,
    Homesec2,
    Homesec3,
    Homesec4,
  },
  computed: {
    ...mapState('about' [
      'name',
      'email'
    ])
  },
}
</script>

<style lang="scss" scoped>
section {
  color: $white;
  padding: 100px 0 100px;
}
.section1 {
  color: $white;
  padding-top: 0;
  width: 100%;
  height: 95vh;
  background: url('~/assets/background_img.jpg') no-repeat center/cover,rgba(0,0,0,.9);
  background-size: cover;
  background-attachment: fixed;
  background-blend-mode: multiply;
}
.section2 {
  color: $white;
  width: 100%;
  height: 90vh;
  background-color: transparent;
  background: url('~/assets/background_img2.jpg') no-repeat center/cover,rgba(0,0,0,.85);
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
}
.section3 {
  color: $white;
  display: flex;
  align-items: center;
}
.section4 {
  color: $white;
  width: 100%;
  height: 90vh;
  background: url('~/assets/section3_img.jpg') no-repeat center/cover,rgba(0,0,0,.8);
  background-blend-mode: multiply;
  display: flex;
  align-items: center;
  border-top-right-radius: 15%;
  border-bottom-left-radius: 15%;
}

</style>