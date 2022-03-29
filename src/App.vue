<template>
  <div id="app">
   <header-boolflix 
    @search="querySearchStringPass"
   />
   <main-boolflix 
    :arr-movie-prop="movieArr"
   />
    
  </div>
</template>

<script>
import HeaderBoolflix from './components/HeaderBoolflix.vue'
import MainBoolflix from './components/MainBoolflix.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HeaderBoolflix,
    MainBoolflix
  },
  data () {
    return {
      querySearch: '',
      movieApi: 'https://api.themoviedb.org/3/movie/now_playing?api_key=2a1eafb77e5173892c5f55c2d7d7a8c8&language=it-IT&page=1',
      responseDelay: 10,
      movieArr: [],
    }
  },
  created () {
    
  },
  methods: {
    // Fa Requesta Api
    requestApiMovie () {
      this.movieArr = [],
      setTimeout (() => {
        axios.get(this.movieApi)
          .then((responseMovie) => {
            responseMovie.data.results.forEach(movie => {
              this.movieArr.push(movie);
            });
          })
      },this.responseDelay)
    },
    querySearchStringPass(querySearchString) {
      this.querySearch = querySearchString;
      this.movieApi = `https://api.themoviedb.org/3/search/movie?api_key=2a1eafb77e5173892c5f55c2d7d7a8c8&language=it-IT&query=${querySearchString}&page=1&include_adult=false`,
      console.log(querySearchString)
      this.requestApiMovie ();
    },
  },
  props: {

  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
</style>
