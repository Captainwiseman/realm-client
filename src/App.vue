<template>
  <div id="app">
    <div id="nav-header">
      <ul class="nav-list">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
    <router-view id="page" />
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}
html, body {
  height: 100%;
  background-color: black;
}

#app {
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  /* background: black; */
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #B8D8D6;
}

#nav-header {
  z-index: 9;
  padding: 10px;
  position: sticky;
  top: 0;
  height: 30px;
  background-color: rgba(0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
}

.nav-list li {
  padding: 15px;
}

#nav-header a {
  font-weight: bold;
  color: #2c3e50;
}

#nav-header a.router-link-exact-active {
  color: #42b983;
}
</style>
