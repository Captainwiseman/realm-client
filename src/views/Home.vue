<template>
  <div class="home">
    <img id="logo" src="../assets/logo.png" />
    <h1>Chorus</h1>
    <h2>Cities of Esmeralda</h2>
    <RealmsStrip />
  </div>
</template>

<script>
// @ is an alias to /src
import RealmsStrip from "@/components/RealmsStrip.vue";

export default {
  name: "home",
  components: {
    RealmsStrip
  }
};
</script>

<style scoped>
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
