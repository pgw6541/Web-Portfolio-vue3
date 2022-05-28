<template>
  <div class="bg_img"></div>
  <div class="container">
    <article class="article1">
      <div class="textBox">
        <ul class="about">
          <li class="title titleAbout">
            <h1>
              About
            </h1>
          </li>
          <div class="list">
            <div class="after">
              <li>Name</li>
              <li>Age</li>
            </div>
            <div class="value">
              <li>박 건우</li>
              <li>27세(96년생)</li>
            </div>
          </div>
        </ul>
        <ul class="career">
          <li class="title">
            <h1>Career</h1>
          </li>
          <div class="list">
            <div class="after">
              <li>2015</li>
              <li>2016~2018</li>
              <li>2020</li>
              <li>2021.02~08</li>
              <li>2022</li>
            </div>
            <div class="value">
              <li>대전과학기술대학교 컴퓨터정보과 15학번 입학</li>
              <li>제28사단 육군 병장 만기전역</li>
              <li>대전과학기술대학교 컴퓨터정보과 졸업</li>
              <li>(주)오라클식스코퍼레이션 웹퍼블리셔 근무</li>
              <li>패스트캠퍼스 온라인강의 프론트엔드 과정 수강</li>
            </div>
          </div>
          <li class="title license">
            <h1>License</h1>
          </li>
          <div class="list">
            <div class="after">
              <li>2021.09</li>
            </div>
            <div class="value">
              <li>정보처리산업기사 필기합격</li>
            </div>
          </div>
        </ul>
      </div>
    </article>
    <article class="article2">
      <img
        src="~/assets/headshot.jpg"
        class="headShot"
        alt="증명사진" />
    </article>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  .article1 {
    width: 70%;
    .textBox {
      font-size: 15px;
      letter-spacing: 1px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      ul {
        .title {
          h1 {
            font-weight: bold;
            padding-bottom: 10px;
            margin-bottom: 20px;
            border-bottom: 1px dotted $gray-700;
          }
        }
        .list {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          .after {
            color: $gray-500;
            margin-right: 16px;
          }
          .value {}
        }
        padding-left: 0;
        li {
          margin: 0 0 10px;
          span.after {
            color: $gray-600;
          }
        }
        
        li.license {
          margin-top: 30px;
        }
      }
    }
  }
  .article2 {
    width: 25%;
    text-align: center;
    img.headShot {
      width: 100%;
      border-radius: 50px;
    }
  }
  @include media-breakpoint-down(lg) {
    .article1 {
      width: 100%;
    }
    .article2 {
      display: none;
    }
  }
  @include media-breakpoint-down(md) {
    .textBox {
      ul {
        width: 100%;
      }
    }
  }
  @include media-breakpoint-down(sm) {
    .textBox {
      ul {
        width: 80%;
        .list {
          li {
            margin: 0 0 18px;
          }
        }
      }
      ul.career {
        .list {
          li {
            height: 10%;
          }
        }
      }
    }
  }
  // @include media-breakpoint-down(xxs) {
  //   .textBox {
  //     ul.career {
  //       .list {
  //         li {
  //           margin: 0 0 36px;
  //         }
  //       }
  //     }
  //   }
  // }
}
</style>