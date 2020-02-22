<template>
  <div class="home">
    <div class="background"></div>
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
  z-index: 0;
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
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
