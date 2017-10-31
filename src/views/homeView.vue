<template>
  <div id="homeContainer">
    <slide-show-component></slide-show-component>
    <game-card-component style="margin-top:20px;"></game-card-component>
    <gaming-news-component style="margin-top:20px;"></gaming-news-component>
  </div>
</template>

<script>
import slideShowComponent from "./../components/homeComponents/slideShow"
import gameCardComponent from "./../components/homeComponents/gameCard"
import gamingNewsComponent from "./../components/homeComponents/gamingNews"

export default {
  name: 'homeContainer',
  data(){
    return{

    }
  },
  components: {
    slideShowComponent,
    gameCardComponent,
    gamingNewsComponent
  }
}
</script>

<style scoped>
#homeContainer{
  width: 100%;
  height: 2000px;
  overflow: hidden;
  background-color: rgb(17,20,29);
}
</style>
