<template>
  <div id="homeContainer">
    <slide-show-component></slide-show-component>
    <game-card-component style="margin-top:20px;"></game-card-component>
  </div>
</template>

<script>
import slideShowComponent from "./../components/homeComponents/slideShow"
import gameCardComponent from "./../components/homeComponents/gameCard"

export default {
  name: 'homeContainer',
  data(){
    return{

    }
  },
  components: {
    slideShowComponent,
    gameCardComponent
  }
}
</script>

<style scoped>
#homeContainer{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: green;
}
</style>
