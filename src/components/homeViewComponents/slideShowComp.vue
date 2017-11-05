<template>
  <div id="slideShowContainer">
    <div style="height:100%;">
      <el-carousel style="height:100%;">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>
<script>
export default {
  name: "slideShowContainer",
  data: () => ({

  })
}
</script>
<style lang="css" scoped>
  #slideShowContainer {
    background-color: black;
    height: 80%;
    min-height: 500px;
  }
  #slideShowContainer >>> .el-carousel__container  {
    height: 100% !important;
  }
</style>
