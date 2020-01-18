<template>
  <div class="home">
    <img id="logo" src="../assets/logo.png" />
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
#logo {
  width: 250px;
  height: 250px;
}
</style>
