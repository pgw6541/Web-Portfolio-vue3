<template>
  <div class="container">
    <article class="article1">
      <img
        src="~/assets/section3.jpg"
        class="photo"
        alt="증명사진" />
    </article>
    <article class="article2">
      <h1 class="title">
        <span class="white">Why?</span> front-end developer
      </h1>
      <div class="textBox">
        <p>
          컴퓨터정보과에 진학하며<br class="br1" /> C언어, Unity, JAVA, Android Studio, Photoshop, Illustrator 등<br class="br2" />
          다양한 개발언어와 디자인툴을 접해볼 기회가 되었습니다.
          <br />
          <br />
          당시 진로에 대한 방향성을 찾고 있던 와중에 서버 관련 언어들보단 가시적인 결과물들에 성취감을 받으며<br class="br3" />
          웹 UI, UX에 흥미가 생겨. 졸업 후에 기본기를 배우고자 이젠컴퓨터아카데미 웹 퍼블리셔 과정을
          수료한 뒤 웹 개발자라는 직업이 무엇인지, 어떤 것이 있고 무엇을 사용하는지 알아가면서 항상 사용자에
          경험을 바탕으로 편리함을 제공해주는 웹 클라이언트 서비스 프론트엔드로 꿈을 키워 나가고 있습니다.
        </p>
      </div>
    </article>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  .article1 {
    width: 30%;
    text-align: center;
    img.photo {
      width: 100%;
      border-radius: 50px;
    }
  }
  .article2 {
      width: 60%;
    .title {
      width: 100%;
      color: $gray-500;
      font-size: 46px;
      font-weight: bold;
      padding-bottom: 20px;
      border-bottom: 2px dotted $gray-800;
      .white {
        color: $white;
      }
    }
    .textBox {
      font-size: 15px;
      margin-top: 30px;
      letter-spacing: 0rem;
      p {
        line-height: 1.6;
      }
    }
  }
  @include media-breakpoint-down(xxl) {
    .textBox {
      p {
        line-height: 1.6;
        .br3 {display: none}
      }
    }
  }
  @include media-breakpoint-down(lg) {
    .article1 {
      display: none;
    }
    .article2 {
      width: 100%;
    }
    .textBox {
      p {
        line-height: 1.6;
        
      }
    }
  }
  @include media-breakpoint-down(md) {
    .article2 {
      .title {
        font-size: 32px;
      }
    }
  }
  @include media-breakpoint-down(sm) {
    .article2 {
      .title {
        text-align: center;
      }
    }
    .textBox {
      font-size: 14px;
      padding: 0 16px;
      p {
        line-height: 1.25;
        .br2 {display: none}
      }
    }
  }
}
</style>