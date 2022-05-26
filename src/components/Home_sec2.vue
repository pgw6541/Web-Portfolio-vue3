<template>
  <div class="bg_img"></div>
  <div class="container">
    <article class="article1">
      <div class="textBox">
        <ul class="list about">
          <li class="title">
            <h1>
              About
            </h1>
          </li>
          <li><span class="after">name</span> : 박 건우</li>
          <li><span class="after">age</span> : 27세(96년생)</li>
        </ul>
        <ul class="list career">
          <li class="title">
            <h1>Career</h1>
          </li>
          <li><span class="after">2015</span> - 대학과학기술대학교 컴퓨터정보과 15학번 입학</li>
          <li><span class="after">2016~2018</span> - 제28사단 육군 병장 만기전역</li>
          <li><span class="after">2020</span> - 대전과학기술대학교 컴퓨터정보과 졸업</li>
          <li><span class="after">2021.02~.08</span> - (주)오라클식스코퍼레이션 웹퍼블리셔로 근무</li>
          <li><span class="after">2022</span> - 패스트캠퍼스 온라인강의 프론트엔드과정 수강</li>
          <li>
            <a
              href="https://github.com/pgw6541"
              target="_blank"
              class="logo">
              <img
                style="width:30px; filter: invert(100%);"
                src="https://github.com/pgw6541/image_source/blob/master/gitHub.png?raw=true"
                alt="github" />
            </a>
          </li>
          <li class="title license">
            <h1>License</h1>
          </li>
          <li><span class="after">2021.09</span> - 정보처리산업기사 필기합격</li>
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
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .article1 {
    width: 70%;
    .textBox {
      font-size: 15px;
      letter-spacing: 0.1rem;
      display: flex;
      justify-content: space-around;
      ul.list {
        padding-left: 0;
        li.title {
          h1 {
            font-weight: bold;
            padding-bottom: 10px;
            margin-bottom: 20px;
            border-bottom: 1px dotted $gray-700;
          }
        }
        li.license {
          margin-top: 30px;
        }
        li {
          margin: 0 0 10px;
          span.after {
            color: $gray-600;
          }
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
}
</style>