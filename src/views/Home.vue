<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
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
