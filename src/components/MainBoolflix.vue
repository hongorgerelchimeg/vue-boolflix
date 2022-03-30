<template>
  <div class="container-fluid text-white main">
    <div class="movie-holder">
      <h2>Movie</h2>
      <div class="row row-cols-6 gx-3 gy-5 flex-nowrap gallery js-flickity">
       
        <cards-boolflix class="gallery-cell"
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
      <div class="row row-cols-6 gx-3 gy-5 flex-nowrap">
        <cards-boolflix 
          v-for="movie in this.arrSerieProp"
          :key="movie.id"
          :moviePoster="movie.poster_path"
          :movieId="movie.id"
          :movieTitle="movie.name" 
          :movieTitleOriginal="movie.original_name" 
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
    this.arrSerie = this.arrSerieProp;
  },
  data () {
    return {
      arrMovie: [],
      arrSerie: [],
    }
  },
  props: {
    arrMovieProp: Array,
    arrSerieProp: Array,
  }

}
</script>

<style lang="scss" scoped>

  .main {
    padding-bottom: 20vh;
    min-height: 100vh;
    h2 {
      margin-top: 3rem;
      line-height: 1.6;
    } 
  }
  .movie-holder, .serie-holder {
    
  }
</style>