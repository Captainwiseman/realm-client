import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import VueSocketIO from "vue-socket.io";

const SERVER_IP = "192.168.1.131";

Vue.config.productionTip = false;

Vue.use(Vuex);

Vue.use(
  new VueSocketIO({
    debug: true,
    connection: `http://${SERVER_IP}:3000/world`,
    vuex: {
      actionPrefix: "SOCKET_",
      mutationPrefix: "SOCKET_"
    }
  })
);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
