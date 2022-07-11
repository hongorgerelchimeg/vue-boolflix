<template>
  <main>
    <div v-if="this.pageLoaded == false" class="error-page bg-black">
          <page-loader />
    </div>
    <div v-else-if=" this.networkError == true" class="error-page bg-black">
        <h1>API Address Error, page item not found! Contact support!</h1>
    </div>
    <div v-else-if=" this.arrMovieProp.length == 0" class="error-page-not-found bg-black">
        <h2>Nessun film trovato!</h2>
    </div>

    <div v-else class="container-fluid text-white main">
      <div class="movie-holder">
        <h2>Movie</h2>
        <div class="row row-cols-2 row-cols-lg-6 row-cols-md-3 row-cols-sm-2 gx-3 gy-5">
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
        <div class="row row-cols-2 row-cols-lg-6 row-cols-md-3 row-cols-sm-2 gx-3 gy-5">
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
  </main>
</template>

<script>
import CardsBoolflix from './CardsBoolflix.vue'
import PageLoader from './PageLoader.vue';

export default {
  components: { CardsBoolflix, PageLoader },
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
    pageLoaded: Boolean,
    networkError: Boolean,
  }

}
</script>

<style lang="scss" scoped>
  .main {
    padding-bottom: 250px;
    min-height: 100vh;
    h2 {
      margin-top: 3rem;
      line-height: 1.6;
    } 
  }
  .error-page {
    min-height: 100vh;
    color: white;
    display:flex;
    justify-content:center;
    align-items:center;
  }
  .error-page-not-found {
    margin-top: 100px;
    min-height: 100vh;
    color: white;
    display:flex;
    justify-content:center;
  }
</style>