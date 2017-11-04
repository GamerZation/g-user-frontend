<template>
  <div id="headerContainer">
    <div class="left-flex">
      <div class="brand-name">
        <!-- <span class="brand-name-span">gamer<span style="color:red;">Z</span>ation</span> -->
         <b-button class="quick-match-button">MATCH MAKE</b-button>
      </div>
    </div>
    <div class="right-flex">
      <div class="login-buttons">
         <b-button class="register-button">REGISTER</b-button>
         <b-button class="login-button">LOGIN</b-button>
      </div>
    </div>
    <div class="blur-div">
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
    background-color: rgba(34, 42, 57,0.7);
  }
  .blur-div {
    height: 100%;
    width: 100%;
    z-index: -1;
    position: absolute;
    filter : blur(99px);
  }
  .left-flex {
    align-items: center;
    flex: 1;
    display: flex;
    justify-content: flex-start;
    text-align: center;
    line-height: 2;
  }
  .right-flex {
    align-items: center;
    padding: 10px;
    flex: 1;
    display: flex;
    justify-content: flex-end;
    text-align: center;
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
  .register-button, .register-button:focus, .register-button:active {
    background : linear-gradient(to top, rgba(77, 159, 178,1), rgba(25, 123, 170,1));
    border: none;
    border-radius: 1px;
    height: 45px;
    width: 140px;
    font-size: 1rem;
    box-shadow: 4px 4px 10px rgba(0,0,0,0.5);
  }
  .register-button:hover   {
    background : linear-gradient(to top, rgba(77, 159, 178,1), rgba(25, 123, 170,1));
    cursor: pointer;
    box-shadow: none;
  }
  .login-button, .login-button:focus, .login-button:active {
    height: 45px;
    width: 140px;
    font-size: 1rem;
    color: white;
    font-weight: 400;
    background: none !important;
  }
  .login-button:hover {
    cursor: pointer;
  }
  .quick-match-button, .quick-match-button:focus, .quick-match-button:active {
    background: none;
    border: 0.5px solid rgba(77, 159, 178,1);
    border-radius: 10px;
    height: 35px;
    width: 140px;
    font-size:0.8rem;
  }
  .quick-match-button:hover   {
    background : rgba(77, 159, 178,1);
    border: none;
    cursor: pointer;
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
  .brand-name-span {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-left: 40px;
  }
  .brand-name {
    box-sizing: border-box;
    padding: 20px;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    /*border: 9px solid white;*/
    width: 200px;
    height: 100%;
    /*background-color: #ee4b44;*/
  }
  .icons{
    flex: 1;
    height: 100%;
    max-width: 30px;
    justify-content: center;
    margin-right: 30px;
  }
</style>
