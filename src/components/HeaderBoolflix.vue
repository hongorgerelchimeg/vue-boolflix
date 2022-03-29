<template>
  <div class="container-fluid bg-black text-white">
    <div class="d-flex justify-content-between align-items-center">
      <h1>BoolFlix</h1>
      <div class="seaerch-bar">
        <input v-model="querySearchString" type="text" id="search-bar" name="search-bar" placeholder="Type something">
        <button @click="$emit('search', querySearchString)" id="search-btn">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBoolflix',
  data () {
    return {
      querySearchString: null,
    }
  },

}
</script>

<style lang="scss" scoped>

</style>