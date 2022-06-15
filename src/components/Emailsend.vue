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
          placeholder="Enterprise"
          name="user_name" 
          maxlength="20"
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
          placeholder="- 또는 공백 없이 작성 부탁드립니다."
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
          placeholder="abc123@example.com"
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
          placeholder="Message"
          class="form-control"></textarea>
      </div>
    </div>
    <button
      type="submit"
      class="btn btn-primary">
      보내기
    </button>
    <div class="sendNext">
      <!-- Result -->
      <p
        class="result"
        v-show="resVisible">
        이메일이 성공적으로 전송 되었습니다!
      </p>
      <!-- error -->
      <p
        class="error"
        v-show="errVisible">
        이메일이 오류로 인해 전송되지 못했습니다.
      </p>
    </div>
  </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
  data() {
    return {
      resVisible: false,
      errVisible: false
    }
  },
  methods: {
    sendEmail() {
      emailjs.sendForm('service_83', 'template_7jofed9', this.$refs.form, 'HIhQbl0bkk_dF9Lsg')
        .then((result) => {
            console.log('SUCCESS!', result.text);
            this.resVisible = true
            this.errVisible = false
        }, (error) => {
          console.log('FAILED...', error.text);
          this.errVisible = true
          this.resVisible = false
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
    ::placeholder {
      font-size: 0.75rem;
    }
  }
  .sendNext {
    margin-top: 20px;
    p {
      font-size: 14px;
      font-weight: bold;
    }
  }
}
</style>