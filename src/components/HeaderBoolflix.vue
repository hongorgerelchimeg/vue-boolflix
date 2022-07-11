<template>
  <div class="bg-black text-white">
    <div class="d-flex justify-content-between flex-wrap align-items-center gy-4 header">
      <img @click="refreshPage()" :src="require('../../public/logo.svg')" alt="" class="logo mb-2">
      <div class="d-flex align-items-center">
        <div class="search-bar">
          <div class="search-icon"><font-awesome-icon  icon="fa-solid fa-magnifying-glass" /></div>
          <div class="search-input-hide">
            <input @keyup.enter="$emit('search', querySearchString)" v-model="querySearchString" type="text" id="search-bar" name="search-bar" placeholder="Titles, people, series">
            <button @click="$emit('search', querySearchString)" id="search-btn">Search</button>
          </div>
          
        </div>
        <font-awesome-icon class="bell-icon" icon="fa-solid fa-bell" />
        <div class="user-img-holder">
          <img class="user-img" src="https://www.pngall.com/wp-content/uploads/2016/07/Cookie-Download-PNG.png" alt="user-img">
        </div>
        <font-awesome-icon icon="fa-solid fa-sort-down" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderBoolflix',
  data () {
    return {
      querySearchString: '',
    }
  },
  methods: {
    refreshPage () {
      window.location.reload();
    },
  },

}
</script>

<style lang="scss" scoped>
  .header {
    padding: 1.4rem;
  }
  .logo {
    max-height: 25px;
    cursor: pointer;
  }
  .search-bar {
    
    .search-icon {
      display: inline-block;
      padding: 0 .4rem;
      font-size: 1rem;
      color: white;
    }
    border: 1px solid white;
    #search-bar {
      background-color: black;
      color: white;
      border: none;
      &:focus-visible {
        outline: none;
      }
    }
    ::placeholder {
      color: rgba(255, 255, 255, 0.642);
    }
  }
  #search-btn {
    background-color: black;
    color: white;
  }
  .search-input-hide {
    display: inline-block;
  }
  .bell-icon {
    font-size: 1.2rem;
    margin: 0 2rem;
  }
  .user-img-holder {
    display: flex;
    justify-content:  center;
    align-items: center;
    width: 2rem;
    height: 2rem;
    margin-right: 2rem;
    background-color: rgb(15, 182, 148);
    border-radius: 5px;
    .user-img {
      height: 70%;
      width: 70%;
      object-fit: contain;
    }
  }

  
  
  

</style>