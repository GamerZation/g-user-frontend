<template>
  <div id="homeContainer">
    <div class="vertical-container">
      <div class="flex-item">
        <slide-show-comp></slide-show-comp>
      </div>
      <div class="flex-item">
        <games-layout-comp></games-layout-comp>
      </div>
    </div>

  </div>
</template>
<script>
import SlideShowComp from './../components/homeViewComponents/slideShowComp'
import GamesLayoutComp from './../components/homeViewComponents/gamesLayoutComp'
export default {
  name: "homeContainer",
  components: {
    SlideShowComp,
    GamesLayoutComp
  },
  data() {
    return {

    }
  }
}
</script>
<style lang="scss" scoped>
  #homeContainer {
    height: 100%;
    overflow: scroll;
  }
  .vertical-container {
    height: 100%;
  }
  .flex-item {
    flex: 1;
    width: 100%;
  }
</style>
