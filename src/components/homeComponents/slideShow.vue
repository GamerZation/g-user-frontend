<template>
  <div id="slideShowContainer">
    <el-carousel height="775px" arrow="never"indicator-position="inside" trigger="click">
      <el-carousel-item  v-for="item in items" :key="item">
        <div class="gradient-to-top">
        </div>
        <div class="gradient-to-right">
        </div>
        <div class="image-container":style="{backgroundImage : `url(${item})`}">
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return{
      items:[
        'https://static.gamespot.com/uploads/original/536/5360430/3080752-9k%3D.jpg',
        'https://i.ytimg.com/vi/X9ZzavtzWeg/maxresdefault.jpg',
        'http://www.hdwallpapers.in/download/uncharted_4_a_thiefs_end_4k_8k_hd-1920x1080.jpg',
        ]
    }
  }
}
</script>

<style >
  #slideShowContainer{
    width: 100%;
  }
  .image-container {
    background-repeat: no-repeat;
    background-size:cover;
    height: 100%;
    width: 100%;
  }
  .el-carousel__button{
    height: 6px;
    width: 20px;
    margin-right: 5px;
    background-color:rgba(0,0,0,0);
    border: solid rgba(255,255,255,.5) 1px;
  }
  .el-carousel__indicator.is-active button{
       background-color:red;
       border: 1px solid red;
    }
  .el-carousel__indicators{
    margin-bottom: 20px;
  }
  /*.gradient-to-top{
    opacity: .8;
    position:absolute;
    background-size:cover;
    height:100%;
    width:100%;
    background:linear-gradient(to top,black,rgba(0,0,0,.5),rgba(0,0,0,.4),
    rgba(0,0,0,.2),rgba(0,0,0,.2),rgba(0,0,0,.1), rgba(0,0,0,0));
  }

  .gradient-to-right{
    opacity: .8;
    position:absolute;
    background-size:cover;
    height:100%;
    width:100%;
    background:linear-gradient(to right,black,rgba(0,0,0,6),rgba(0,0,0,0.6),
    rgba(0,0,0,0.4),rgba(0,0,0,0.2),rgba(0,0,0,0.1), rgba(0,0,0,0));
  }*/
</style>
