<template>
  <div class="col">
   <div class="card p-3 h-100" :id="movieId">
      <img class="img-fluid" :src="`https://image.tmdb.org/t/p/original/${moviePoster}`" :alt="movieTitle">
      <h3> {{movieTitle}} </h3>
      <h4> {{movieTitleOriginal}}</h4>
      <lang-flag :iso="movieLang" squared="false"/>
      <div class="voto">{{movieRating}}</div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'CardsBoolflix',
  props: {
    moviePoster: String,
    movieId: Number,
    movieTitle: String,
    movieTitleOriginal: String,
    movieLang: String,
    movieRating: String,
  }
}
</script>

<style lang="scss" scoped>

</style>