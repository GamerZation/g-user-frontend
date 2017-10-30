<template >
  <div id="headerContainer">
    <div class="blur-div">

    </div>
    <div class="left-flex">
    </div>
    <div class="right-flex">
      <div class="nav-bar-icon">
        <div class="icon">
        </div>
      </div>
      <div class="nav-bar-salute" style="color:white;">
        <span>Hello </span><span>Raed</span>
      </div>
      <div class="icons">
        <i class="fa fa-bell-o"></i>
      </div>
      <div class="icons">
        <i class="fa fa-commenting-o"></i>
      </div>
      <div class="icons">
        <i class="fa fa-cog"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="css">
  #headerContainer {
    display: flex;
    width: 100%;
    position: relative;
    flex-direction: row;
    justify-content: flex-start ;
    height: -webkit-fill-available;
    background-color: rgba(76,90,105,0.7);
  }
  .blur-div {
    height: 100%;
    width: 100%;
    position: absolute;
    filter : blur(99px)
  }
  .left-flex {
    align-items: center;
    padding: 10px;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    line-height: 2.5;
    font-size: 1.3rem;
  }
  .right-flex {
    align-items: center;
    padding: 10px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    text-align: center;
    line-height: 2.5;
    font-size: 1.3rem;

  }
  .nav-bar-salute {
    margin-right: 40px;
    font-size: 0.9rem;
  }
  .nav-bar-icon {
    background-color: white;
    height: 35px;
    width: 35px;
    margin: 10px;
    border-radius: 50px;
  }
  .logout-icon {
    flex: 1;
    background-image: url('./../assets/logout.png');
    height: 30px;
    width: 30px;
    margin: 5px;
    justify-content: center;
    background-size: cover;
  }
  .logout-span {
    flex: 1;
    padding: 5px;
    color: white;
    font-size: 0.9rem;
  }
  .log-out-button {
    display: flex;
  }

  .icons{
    flex: 1;
    height: 100%;
    max-width: 30px;
    justify-content: center;
    margin-right: 30px;
  }

  .fa{
    color: rgba(255,255,255,.8);
    font-size: 1.4rem;
  }
</style>
