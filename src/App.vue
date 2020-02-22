<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
html {
  position: fixed;
  z-index: -1;
  padding: 0;
  margin: 0;
}

#app {
  width: 100%;
  height: 100%;
  z-index: 1;
  position: fixed;
  padding: 0;
  margin: 0;
  background: black;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  z-index: 1;
  padding: 30px;
  position: sticky;
  top: 0;
  background-color: rgba(0, 0, 0, 0);
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
