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
        Why? front-end developer
      </h1>
      <div class="textBox">
        <p class="text txt1">
          컴퓨터정보과에 진학하며 C언어, Unity, JAVA, Android Studio, Potoshop, Illustrator 등<br />
          다양한 개발언어와 디자인툴을 접해볼수있는 기회가 되었습니다.<br />
          <br />
          당시 진로에 대한 방향성을 찾고있던와중에 서버관련 언어들보단 가시적인 결과물들에 재미를 느끼며<br />
          웹UI,UX에 흥미가 생겼습니다. 졸업후에 기본기를 배우고자 그린컴퓨터아카데미 웹퍼블리셔 과정을<br />
          수료한뒤 웹 개발자라는 직업이 무엇인지, 어떤것이 있고 어떤것을 사용하는지 알아가면서 항상 사용자에<br />
          경험을 바탕으로 편리함을 제공해주는 웹 클라이언트 서비스 프론트엔드로 꿈을 키워나가고있습니다.
        </p>
        <div class="link">
          <RouterLink 
            to="/products"
            class="link_products">
            Products 바로가기
          </RouterLink>
        </div>
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
          border-bottom: 2px dotted $gray-700;
        }
        .textBox {
          font-size: 15px;
          margin-top: 30px;
          letter-spacing: 0.1rem;
          .link {
            margin: 60px 20px 0 0;
            text-align: right;
            .link_products {
              text-decoration: none;
              color: $gray-600;
              padding: 5px 10px;
              @include magic-border(1px, $gray-500, .3s, 0);
            }
          }
          .txt1 {
            line-height: 1.6;
          }
        }
      }
    }
</style>