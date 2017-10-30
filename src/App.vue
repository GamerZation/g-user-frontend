<template>
  <div id="app">
    <div class="main-container horizontal-container">
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
</template>

<script>
import headerComponent from './components/headerComponent';
import asideComponent from './components/asideComponent';

export default {
  name: 'app',
  components: {
    headerComponent,
    asideComponent,
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
  overflow: hidden;
  height: auto;
}
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-container {
  display: flex;
  flex-direction: row;
  height: 100%;
}
.horizontal-container {
  display: flex;
  flex: auto;
  background-color: black;
  flex-direction: row;
}
.vertical-container {
  display: flex;
  flex-direction: column;
  flex: auto;
  background-color: blue;
}
.header {
  flex: auto;
  max-height: 60px;
  z-index: 99;
}
.main {
  overflow: hidden;
  flex: auto;
  background-color: orange;
  margin-top: -60px;
  z-index: 88;
  height: 100%;

}
.main-container {
  display: flex;
  background-color: whitesmoke;
}
.aside {
  max-width: 100px;
  flex: auto;
  background-color: rgb(24,28,44);
}
</style>
