<template>
  <div class="container-fluid">
    <div class="row row-cols-3 g-4">
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
    arrMovieProp: String,
  }

}
</script>

<style lang="scss" scoped>

</style>