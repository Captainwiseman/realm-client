<template>
  <div class="chrous-main">
    <h1>Chorus</h1>
    <h2>Cities of Esmeralda</h2>
    <p>Below are the recent stats from {{ timestamp }}</p>
    <ul id="realms">
      <li v-for="realm in realms" v-bind:key="realm._id">
        <h3 class="realm-name">{{ realm.name }}</h3>
        <ul>
          <li class="counter">{{ realm.population.common }}</li>
        </ul>
        <ul class="realms-armies">
          <li v-for="army in realm.population.armies" v-bind:key="army.name">{{army.name}}</li>
        </ul>
      </li>
      <pre>{{ realms }}</pre>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

const endpoint = "http://87.71.138.147:3000/realms";

export default {
  name: "Realms-Strip",
  el: "#realms",
  props: {
    msg: String
  },
  data() {
    return {
      timestamp: "100",
      realms: null
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
      .then(response => (this.realms = response.data));
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css?family=IM+Fell+Great+Primer+SC&display=swap");

h2 {
  margin: 20px 0 0;
}
h3.realm-name {
  font-family: "IM Fell Great Primer SC", "Lucida Sans Unicode", "Lucida Grande",
    sans-serif;
  font-size: 26px;
  letter-spacing: 1.6px;
  word-spacing: 1.4px;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}
ul {
  margin: 10px 0 0 0;
  list-style-type: none;
  padding: 0;
}
li {
  /* display: inline-block; */
  margin: 0 10px;
}
.counter {
  font-family: "IM Fell Great Primer SC", "Lucida Sans Unicode", "Lucida Grande",
    sans-serif;
  font-size: 20px;
  letter-spacing: 1px;
  word-spacing: 1px;
  font-weight: 700;
  text-decoration: none;
  font-style: normal;
  font-variant: normal;
  text-transform: none;
}
a {
  color: #42b983;
}
</style>
