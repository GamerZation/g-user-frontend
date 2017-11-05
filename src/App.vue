<template>
  <div id="app">
    <div class="main-container">
      <div class="horizontal-container">
        <div class="aside">
          <aside-component></aside-component>
        </div>
        <div class="vertical-container">
          <div class="header">
            <header-component></header-component>
          </div>
          <div class="main">
            <router-view/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from './components/headerComponent';
import AsideComponent  from './components/asideComponent';

export default {
  name: 'app',
  components: {
    HeaderComponent,
    AsideComponent,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
body, html {
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-container {
  position: relative;
  display: flex;
  overflow: hin;
  flex-direction: row;
  min-height: 100%;
}
.horizontal-container {
  display: flex;
  flex: auto;
  flex-direction: row;
  position: relative;
}
.vertical-container {
  position: relative;
  display: flex;
  flex-direction: column;
  flex: auto;
}
.header {
  flex: auto;
  max-height: 80px;
  z-index: 99;
}
.main {
  margin-top: -80px;
  min-height: 100%;
  overflow: scroll;
  flex: auto;
}
.main-container {
  display: flex;
  background-color: whitesmoke;
}
.aside {
  min-width: 90px;
  max-width: 90px;
  flex: auto;
  background-color: rgb(48, 57, 73);
}
</style>
