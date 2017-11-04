<template>
  <div id="homeContainer">
    <slide-show-comp></slide-show-comp>
  </div>
</template>
<script>
import SlideShowComp from './../components/homeViewComponents/slideShowComp'
export default {
  name: "homeContainer",
  components: {
    SlideShowComp
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
  }
</style>
