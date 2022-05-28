<template>
  <form
    ref="form"
    @submit.prevent="sendEmail">
    <!-- 성함 -->
    <div class="row align-items-center box">
      <div class="col-sm-2">
        <label
          class="col-form-label">기업명</label>
      </div>
      <div class="col-sm-9">
        <input
          type="text"
          name="user_name" 
          maxlength="5"
          class="form-control" />
      </div>
    </div>

    <!-- 전화번호 -->
    <div class="row align-items-center box">
      <div class="col-sm-2">
        <label
          class="col-form-label">연락처</label>
      </div>
      <div class="col-sm-9">
        <input
          type="tel"
          name="user_phone"
          maxlength="13"
          minlength="11"
          class="form-control" />
      </div>
    </div>
    <div class="row align-items-center box">
      <!-- 이메일 -->
      <div class="col-sm-2">
        <label
          class="col-form-label">이메일</label>
      </div>
      <div class="col-sm-9">
        <input
          type="email"
          name="user_email"
          class="form-control" />
      </div>
    </div>
    <div class="row align-items-center box">
      <!-- 내용 -->
      <div class="col-sm-2">
        <label
          class="col-form-label">메시지</label>
      </div>
      <div class="col-sm-9">
        <textarea
          name="message"
          style="height: 100px"
          class="form-control"></textarea>
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-primary">
      보내기
    </button>
  </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      emailjs.sendForm('service_83', 'template_7jofed9', this.$refs.form, 'HIhQbl0bkk_dF9Lsg')
        .then((result) => {
            console.log('SUCCESS!', result.text);
        }, (error) => {
            console.log('FAILED...', error.text);
        });
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  width: 80%;
  color: $white;
  margin: 0 auto;
  .box {
    margin-top: 40px;
  }
  .btn {
    margin-top: 40px;
  }
  @include media-breakpoint-down(lg) {
    width: 100%;
  }
  @include media-breakpoint-down(md) {
    width: 90%;
  }
}
</style>