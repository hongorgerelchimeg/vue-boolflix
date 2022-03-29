<template>
  <div class="container-fluid">
    <div class="movie-holder">
      <h2>Movie</h2>
      <div class="row row-cols-6 gx-3 gy-5">
        <cards-boolflix 
          v-for="movie in this.arrMovieProp"
          :key="movie.id"
          :moviePoster="movie.poster_path"
          :movieId="movie.id"
          :movieTitle="movie.title" 
          :movieTitleOriginal="movie.original_title" 
          :movieLang="movie.original_language" 
          :movieRating="movie.vote_average" 
        />

      </div>
    </div>
    <div class="serie-holder">
      <h2>Serie TV</h2>
      <div class="row row-cols-6 gx-3 gy-5">
        <cards-boolflix 
          v-for="movie in this.arrSerieProp"
          :key="movie.id"
          :moviePoster="movie.poster_path"
          :movieId="movie.id"
          :movieTitle="movie.title" 
          :movieTitleOriginal="movie.original_title" 
          :movieLang="movie.original_language" 
          :movieRating="movie.vote_average" 
        />

      </div>
    </div>
  </div>
</template>

<script>
import CardsBoolflix from './CardsBoolflix.vue'
export default {
  components: { CardsBoolflix },
  name: 'MainBoolflix',
  mounted () {
    this.arrMovie = this.arrMovieProp;
  },
  data () {
    return {
      arrMovie: [],
    }
  },
  props: {
    arrMovieProp: Array,
    arrSerieProp: Array,
  }

}
</script>

<style lang="scss" scoped>

</style>