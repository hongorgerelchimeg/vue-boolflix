<template>
  <div class="col ">
   <div @mouseenter="showDescrip = true" @mouseleave="showDescrip = false" class="card bg-dark" :id="movieId">
      <div class="card-holder">
        <img class="img-fluid" :src="moviePosterCheck(moviePoster)" :alt="movieTitle">

        <div v-if="showDescrip" class="description">
          <h3>Titolo: {{movieTitle}} </h3>
          <h4>Titolo originale: {{movieTitleOriginal}}</h4>
          <div class="language-holder">
            lingua originale: <lang-flag v-if="movieLanguageCheck(movieLang)" :iso="movieLang" :squared="false"/>
            <div v-else>
              <div class="d-flex align-items-center-2 card-poster-img">
                <span>language flag not detected </span>
              </div>
              
              <p>language: {{movieLang}}</p>
            </div>
          </div>
          <div class="voto">
            Voto:
          <font-awesome-icon class="star-icon" v-for="(star, index) in movieRatingInStar(movieRating)" :key="index" icon="fa-solid fa-star fa-pulse" />
          <font-awesome-icon v-for="(star, index) in movieRatingInStarEmpty(movieRating)" :key="`star-${index}`" icon="fa-regular fa-star" />
          </div>
      </div>
      </div>
   </div>
 </div>
</template>

<script>
export default {
  name: 'CardsBoolflix',
  data () {
    return {
      showDescrip: false,
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
    },
    // Rating Star Generator ////
    movieRatingInStar (rating) {
      let ratingStar = Math.floor(rating / 2) + 1;
      if (ratingStar > 1) return ratingStar;
      else if  (rating == 0) return 0;
      else return 1; 
    },
    movieRatingInStarEmpty (rating) {
      let ratingStar = Math.floor(rating / 2) + 1;
      if (ratingStar == 5 ) return 0;
      else if (rating == 0 ) return 5;
      else return 5 - ratingStar; 
    },
    ///////////////////////////
    moviePosterCheck(poster) {
      if (poster == null) return require('../../public/image_not_found.svg');
      else return `https://image.tmdb.org/t/p/w342/${poster}`;
    }
  } 
}
</script>

<style lang="scss" scoped>
  .col {
    max-width: 280px;
    // border-radius: 5px;
    
  }

  .card {
    border: none;
    border-radius: 5px;
    
  }
  .card-holder {
    max-height: 150px;
    border-radius: 5px;
  }
  .card-holder img {
    width: 100%;
    max-width: 280px;
    max-height: 150px;
    border-radius: 5px;
    object-fit: cover;
  }
  .col:hover {
      transform: scale(1.3);
      z-index: 1;
      transform-origin: bottom;
      transition: all 0.5s 0s ease;

  }

  .col:nth-child(6n+6):hover {
    transform: scale(1.3);
    transform-origin: bottom right;
    z-index: 1;
    transition: all 0.5s 0s ease;
  }
  .col:nth-child(6n+1):hover {
    transform: scale(1.3);
    transform-origin: bottom left;
    z-index: 1;
    transition: all 0.5s 0s ease;
  }
  .col:hover .card {
    -webkit-box-shadow: 1px 1px 10px 3px #000000; 
    box-shadow: 1px 1px 10px 3px #000000;
    transition: box-shadow 0.5s ease-in;
  }
  .description {
    max-height: 180px;
    overflow: auto;
    padding: 2rem 1rem;
    font-size: .7rem;
    background-color: rgb(25, 25, 25);
    color: white;
    width: 100%;
    transition: all 2s ease-in;
    h3 {
      font-size: 1.1rem;
    }
    h4 {
      font-size: 0.9rem;
    }
  }
  .star-icon {
    color: gold;
  }
</style>