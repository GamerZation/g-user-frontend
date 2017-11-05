<template>
  <div class="asideContainer">
    <ul>
      <li>
        <div class="side-menu-toggle">
          <img src="../assets/z-logo.png" height="80" width="90">
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-home"></i>
          <span>Home</span>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-gamepad" aria-hidden="true"></i>
          <span>GAMES</span>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-users" aria-hidden="true"></i>
          <span>TEAMS</span>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-trophy" aria-hidden="true"></i>
          <span>EVENTS</span>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-newspaper-o" aria-hidden="true"></i>
          <span>NEWS</span>
        </div>
      </li>
      <li>
        <div class="side-menu-item item-bottom">
          <i class="fa fa-headphones" aria-hidden="true"></i>
          <span>SUPPORT</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods: {
    navigate(link) {
      this.$router.push({name: link})
    }
  }
};
</script>

<style scoped>

ul {
  font-weight: 400;
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
  font-size: .8rem;
  padding: 5px 0 0 5px;
  color: white;
  text-decoration: none;
}
i {
  min-width: 100%;
  font-size: 1.4rem;
}
.side-menu-item {
  padding-top: 10px;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.side-menu-toggle {
  width: 100%;
  height: 80px;
  line-height: 2;
  font-size: 3rem;
  color : #ed1c24;
  font-family: 'Devanagari sangam mn';
}
.side-menu-toggle:hover {
  cursor: pointer;  
}
.side-menu-item:hover {
  cursor:pointer;
  border-left: 4px solid #0057ff;
  background-color: rgb(37,41,57);
}
</style>
