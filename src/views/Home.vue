<template>
  <div class="home">
    <div class="backgroundLayer1"></div>
    <img id="logo" src="../assets/logo.png" />
    <h1>Chorus</h1>
    <h2>Nobles of Esmeralda</h2>
    <RealmsStrip />
    <ChatStrip />
  </div>
</template>

<script>
// @ is an alias to /src
import RealmsStrip from "@/components/RealmsStrip.vue";
import ChatStrip from "@/components/ChatStrip.vue";

export default {
  name: "home",
  components: {
    RealmsStrip,
    ChatStrip
  }
};
</script>

<style scoped>
.home {
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: 0;
  margin-top: 40px;
  width: 100%;
  height: 100%;
  /* background: url("../assets/background.png") no-repeat center center fixed; */
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
.backgroundLayer1 {
  min-height: 100%;
  min-width: 1024px;
	
  /* Set up proportionate scaling */
  width: 100%;
  height: auto;
	
  /* Set up positioning */
  position: fixed;
  top: 0;
  left: 0;

  z-index: -2;
  width: 100%;
  height: 100%;
  background: url("../assets/background.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

h1 {
  margin: 0 0 5px 0;
}
h2 {
  margin: 0;
}

#logo {
  width: 250px;
  height: 250px;
}
</style>
