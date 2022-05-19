<template>
  <div class="bg_img"></div>
  <div class="container">
    <article class="article1">
      <div class="textBox">
        <p class="text txt1">
          부모님께서 어렸을 때부터 늘 한 가지만 말씀하셨습니다. 아버지께서는 평소에 학교는 안 가도, 공부하지 않아도 항상 예절에 대해서는 중요시 얘기하셨으며, 어머니께서는 장래 희망을 말씀하실 때 항상 하고 싶은 걸 하라는 말씀을 듣고 자라왔습니다.
          <br />
          <br />
          초등학교 6학년에 진학하면서 저는 ‘주전자닷컴’이라는 사이트에서 ‘Flash MX’로 간단한 게임과 애니메이션을 만드는 데에 취미가 있던 저는 호기심에 이끌려 ‘컴퓨터 프로그래머’를 목표로 가지게 되었습니다. 그 결과, 대학교에서 컴퓨터 정보학을 전공하였고 c언어, JAVA, 사물인터넷, 웹 디자인 및 퍼블리싱, 정보보안 등을 익힐 수 있는 기회가 있었습니다. 그러나, 공부하던 도중, 프로그래밍보다 작업에 결과물이 가시적으로 보이는 것에서 성취감을 느낄 수 있었던 웹 디자인에 관심을 가지게 되면서 졸업 후에 직업훈련을 통해 웹퍼블리셔를 접하면서 더 큰 흥미를 느끼게 되었으며 웹 전망을 바라보며 경쟁력을 가진 프론트엔드를 목표로 배움을 통한 자기발전을 목표로 하고있습니다
        </p>
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
      justify-content: space-between;
      align-items: center;
      .article1 {
          width: 60%;
        .textBox {
          font-size: 15px;
          padding: 5%;
          border: 1px solid #fff;
          border-radius: 10px;
          letter-spacing: 0.1rem;
        }
      }
      .article2 {
        width: 30%;
        text-align: center;
        img.headShot {
          width: 100%;
          border-radius: 50px;
        }
      }
    }
</style>