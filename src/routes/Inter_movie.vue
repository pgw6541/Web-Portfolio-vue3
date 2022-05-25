<template>
  <div class="container">
    <div
      class="movie_lists"
      v-for="movie in movies"
      :key="movie.poster">
      <img
        :src="movie.poster"
        :alt="movie.name"
        class="poster" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [
        {
          name: 'The Avengers',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX700.jpg',
        },
        {
          name: 'Frozen',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX700.jpg',
        },
        {
          name: 'My Tomorrow, Your Yesterday',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjQ0YTM4ZDAtYTEyOC00NGIxLWIzOTEtOTk4OTY1MWFjZGI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI4ODg2Mjc@._V1_SX700.jpg',
        },
        {
          name: 'The Avengers',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX700.jpg',
        },
        {
          name: 'Frozen',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX700.jpg',
        },
        {
          name: 'My Tomorrow, Your Yesterday',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjQ0YTM4ZDAtYTEyOC00NGIxLWIzOTEtOTk4OTY1MWFjZGI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI4ODg2Mjc@._V1_SX700.jpg',
        },
        {
          name: 'The Avengers',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX700.jpg',
        },
        {
          name: 'Frozen',
          poster: 'https://m.media-amazon.com/images/M/MV5BMTQ1MjQwMTE5OF5BMl5BanBnXkFtZTgwNjk3MTcyMDE@._V1_SX700.jpg',
        },
        {
          name: 'My Tomorrow, Your Yesterday',
          poster: 'https://m.media-amazon.com/images/M/MV5BMjQ0YTM4ZDAtYTEyOC00NGIxLWIzOTEtOTk4OTY1MWFjZGI3L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTI4ODg2Mjc@._V1_SX700.jpg',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
$poster_width: 300px;
.container {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    flex-grow: 1;
  .movie_lists {
    width: $poster_width;
    height: $poster_width * 1.5;
    margin-top: 20px;
    .poster {
      width: 100%;
      height: 100%;
    }
  }
}
</style>