<template>
  <div class="bg_img"></div>
  <div class="container">
    <article class="article1">
      <div class="textBox">
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
      }
      ul.career {
        li {
          margin: 0 0 30px;
        }
      }
    }
  }
}
</style>