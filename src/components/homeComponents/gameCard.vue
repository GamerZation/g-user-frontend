<template>
  <div id="gameCardContainer">
    <div class="gamesFlexParent">
      <div class="gamesFlexItem">
        <img src="http://torrentsgames.org/wp-content/uploads/2016/04/For-Honor-PC.jpg" width="100%" height="100%">
      </div>
      <div class="gamesFlexItem">
        <img src="https://i.ytimg.com/vi/K-5EdHZ0hBs/maxresdefault.jpg" width="100%" height="100%">
      </div>
      <div class="gamesFlexItem">
        <img src="https://gpstatic.com/acache/33/17/1/uk/t620x300.jpg" width="100%" height="100%">
      </div>
      <div class="gamesFlexItem">
        <img src="http://cdn.wccftech.com/wp-content/uploads/2017/02/Nioh-Keyart.jpg" width="100%" height="100%">
      </div>
      <div class="gamesFlexItem">
        <img src="https://media.playstation.com/is/image/SCEA/battlefield-1-listing-thumb-01-ps4-us-08nov16?$Icon$" width="100%" height="100%">
      </div>
      <div class="gamesFlexItem">
        <img src="https://am23.akamaized.net/tms/cnt/uploads/2017/09/F83YpiMXCUkeyE6JQ4TXki.jpg" width="100%" height="100%">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#gameCardContainer{
  height: 400px;
}
.gamesFlexParent{
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 400px;
}

.gamesFlexItem{
  flex: 1;
  min-width: 33%;
  height: 200px;
}
</style>
