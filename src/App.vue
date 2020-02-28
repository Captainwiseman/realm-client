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

<style lang="sass">

$app-font-color: #b8d8d6
$nav-button-link: #2c3e50
$nav-button-active: #42b983

*
  padding: 0
  margin: 0

html,
body 
  height: 100%
  width: 100%
  background: black


#app 
  width: 100%
  height: 100%
  z-index: 0
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: $app-font-color


#nav-header 
  z-index: 9
  padding: 10px
  position: sticky
  top: 0
  height: 30px
  background: rgba(0, 0, 0, 0)
  display: flex
  align-items: center
  justify-content: center


.nav-list 
  display: flex
  flex-direction: row
  justify-content: center
  list-style: none


.nav-list li 
  padding: 15px


#nav-header a 
  font-weight: bold
  color: $nav-button-link


#nav-header a.router-link-exact-active 
  color: $nav-button-active

</style>
