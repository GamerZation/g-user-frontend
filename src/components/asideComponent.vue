<template>
  <div class="asideContainer">
    <a><span style="font-size:2.5rem;color:red;font-weight:bold;">Z</span></a>
    <ul>
      <li>
        <div class="side-menu-item" @click="navigate('Home')">
          <i class="fa fa-home"></i>
          <span>Home</span>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-gamepad" aria-hidden="true"></i>
          <a >GAMES</a>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-commenting" aria-hidden="true"></i>
          <a >CHATTING</a>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-trophy" aria-hidden="true"></i>
          <a >EVENTS</a>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-users" aria-hidden="true"></i>
          <a >TEAM</a>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-address-book" aria-hidden="true"></i>
          <a >ACTIVITY</a>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-newspaper-o" aria-hidden="true"></i>
          <a >NEWS</a>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i>
          <a >SHOP</a>
        </div>
      </li>
      <li>
        <div class="side-menu-item">
          <i class="fa fa-headphones" aria-hidden="true"></i>
          <a >SUPPORT</a>
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
    margin-top: 10px;
    font-weight: bold;
    font-size: .8rem;
    list-style-type: none;
    padding: 0;
}
li {
    margin-top: 10px;
    display: block;
    color: white;
    text-decoration: none;
}
li a {
  font-size: .7rem;
}
i{
  min-width: 100%;
  font-size: 1.7rem;
}
.side-menu-item {
  padding-top: 10px;
  width: 100%;
  height: 60px;
}

.side-menu-item:hover {
  cursor:pointer;
  background-color: rgb(37,41,57);
}
</style>
