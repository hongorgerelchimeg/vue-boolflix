<template>
  <div id="app">
   <header-boolflix />
   <main-boolflix />
    
  </div>
</template>

<script>
import HeaderBoolflix from './components/HeaderBoolflix.vue'
import MainBoolflix from './components/MainBoolflix.vue'

export default {
  name: 'App',
  components: {
    HeaderBoolflix,
    MainBoolflix
  }
}
</script>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap";
@import "../node_modules/bootstrap/scss/functions";
@import "../node_modules/bootstrap/scss/variables";
@import "../node_modules/bootstrap/scss/mixins";
</style>
