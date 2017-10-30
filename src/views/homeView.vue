<template>
  <div id="homeContainer">
    <slide-show-comp></slide-show-comp>

  </div>
</template>

<script>
import slideShowComp from "./../components/homeComponents/slideShow"
export default {
  name: 'homeContainer',
  data(){
    return{

    }
  },
  components: {
    slideShowComp
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
