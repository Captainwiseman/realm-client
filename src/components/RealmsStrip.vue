<template>
  <div>
    <span>
      Last updated
    </span>
    <div>
      <pre class="payload">{{ realmsData }}</pre>
    </div>
  </div>
</template>

<script>
import utils from "./scripts/realms.js";
import axios from "axios";
const endpoint = "https://realm-api.now.sh/api";

export default {
  name: "Realms-Strip",
  // el: "#realms-counter",
  data() {
    return {
      timestamp: {},
      realmsData: null,
      formatedRealmsData: []
    };
  },
  mounted() {
    axios
      .get(endpoint, {
        headers: {
          "Access-Control-Allow-Origin": "*"
        },
        proxy: {
          host: "192.168.1.1",
          port: 3000
        }
      })
      .then(response => {
        this.realmsData = response.data; // Formatted mutates original, need to fix
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
@import url("https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer+SC&display=swap")

body
  width: 100%
  height: 100%

.payload
  position: relative !important
  width: 100% !important
  height: 100% !important
  overflow: auto !important

h3.realm-name
  font-family: "IM Fell Great Primer SC", "Lucida Sans Unicode", "Lucida Grande", sans-serif
  font-size: 26px
  letter-spacing: 1.6px
  word-spacing: 1.4px
  font-weight: 700
  text-decoration: none
  font-style: normal
  font-variant: normal
  text-transform: none

p.timestamp
  font-family: "IM Fell Great Primer SC", "Lucida Sans Unicode", "Lucida Grande", sans-serif
  font-size: 17px
  letter-spacing: 1.2px
  word-spacing: 1px
  color: cadetblue
  margin: 0
  font-weight: 700
  text-decoration: none
  font-style: normal
  font-variant: normal
  text-transform: none

ul
  margin: 10px 0 0 0
  list-style-type: none
  padding: 0

li
  /* display: inline-block */
  margin: 0 10px

.counter
  font-family: "IM Fell Great Primer SC", "Lucida Sans Unicode", "Lucida Grande", sans-serif
  font-size: 20px
  letter-spacing: 1px
  word-spacing: 1px
  font-weight: 700
  text-decoration: none
  font-style: normal
  font-variant: normal
  text-transform: none

a
  color: #42b983
</style>
