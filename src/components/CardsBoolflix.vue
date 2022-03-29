<template>
  <div class="col">
   <div class="card p-3 h-100" :id="movieId">
      <img class="img-fluid" :src="`https://image.tmdb.org/t/p/original/${moviePoster}`" :alt="movieTitle">
      <h3> {{movieTitle}} </h3>
      <h4> {{movieTitleOriginal}}</h4>
      <div class="language-holder">
        <lang-flag v-if="movieLanguageCheck(movieLang)" :iso="movieLang"/>
        <div v-else>
          <div class="d-flex align-items-center-2">
            <img class="me-1" height="20px" src="https://icons-for-free.com/iconfiles/png/512/globe+international+work+world+icon-1320086521784287131.png" alt="">
            <span>language flag not detected </span>
          </div>
          
          <p>language: {{movieLang}}</p>
        </div>
      </div>
      <div class="voto">{{movieRating}}</div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'CardsBoolflix',
  data () {
    return {
      langCheckArr: [
        'ar','am','az','be','bn','bg','zh','ca','cs','en','et','fr','de','ha','hi','hu','it',
    'ja','jv','km','ko','lv','ms','mr','fa','pl','pt','ro','ru','es','sw','ta','te','th','tr','uz','vi',
      ]
    }
  },
  props: {
    moviePoster: String,
    movieId: Number,
    movieTitle: String,
    movieTitleOriginal: String,
    movieLang: String,
    movieRating: Number,
  },
  methods: {
    //Movie Language Check
    movieLanguageCheck(lang) {
      return this.langCheckArr.includes(lang)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>