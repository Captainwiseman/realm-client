<template>
  <div class="home">
    <div class="background-layer layer1"></div>
    <div class="background-layer layer2"></div>
    <div class="background-layer layer3"></div>
    <div class="background-layer layer4"></div>
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
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  position: absolute;
  background: url("../assets/background.png") no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.background-layer {
  z-index: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.layer1 {
  z-index: 1;
  background: url("../assets/layer1.png") no-repeat center center fixed;
}
.layer2 {
  z-index: 2;
  background: url("../assets/layer2.png") no-repeat center center fixed;
}
.layer3 {
  z-index: 3;
  background: url("../assets/layer3.png") no-repeat center center fixed;
}
.layer4 {
  z-index: 4;
  background: url("../assets/layer4.png") no-repeat center center fixed;
}

h1 {
  margin: 0 0 5px 0;

  font-family: "Avant Garde", Avantgarde, "Century Gothic", CenturyGothic,
    "AppleGothic", sans-serif;
  font-size: 92px;
  padding: 80px 50px;
  text-align: center;
  text-transform: uppercase;
  text-rendering: optimizeLegibility;
  color: #e0dfdc;
  letter-spacing: 0.1em;
  text-shadow: 0 -1px 0 #fff, 0 1px 0 #2e2e2e, 0 2px 0 #2c2c2c, 0 3px 0 #2a2a2a,
    0 4px 0 #282828, 0 5px 0 #262626, 0 6px 0 #242424, 0 7px 0 #222,
    0 8px 0 #202020, 0 9px 0 #1e1e1e, 0 10px 0 #1c1c1c, 0 11px 0 #1a1a1a,
    0 12px 0 #181818, 0 13px 0 #161616, 0 14px 0 #141414, 0 15px 0 #121212,
    0 22px 30px rgba(0, 0, 0, 0.9);
}
h2 {
  margin: 0;
}

#logo {
  width: 250px;
  height: 250px;
}
</style>
