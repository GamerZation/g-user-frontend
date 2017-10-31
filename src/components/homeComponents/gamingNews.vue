<template>
  <div id="gamingNewsContainer">
    <div class="newsFlexParent">
      <div class="newsFlexItem1" style="text-align:left;padding:10px;">
        <span>Gaming News</span>
      </div>
      <div class="newsFlexItem2">
        <ul>
          <li><a class="active" href="#home">All</a></li>
          <li><a href="#news">PC</a></li>
          <li><a href="#contact">Xbox</a></li>
          <li><a href="#about">PS4</a></li>
          <li><a href="#about">Nintendo</a></li>
        </ul>
      </div>
    </div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped>
#gamingNewsContainer{
  height: 800px;
  width: 100%;
  position: relative;
  overflow: hidden;

}

ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
}

li {
  width: 80px;
    float:left;
}

li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

li a:hover:not(.active) {
    background-color: #111;
}

.active {
    background-color: #4CAF50;
}
.newsFlexParent{
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  height: 50px;
  width: 100%;
}

.newsFlexItem1{
  flex: 2;
  height: 50px;
}
.newsFlexItem2{
  flex: 3;
  height: 50px;
}

.active{
  background-color: rgb(72,122,52)
}
</style>
