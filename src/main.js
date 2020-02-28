import Vue from "vue";
import Vuex from "vuex";
import App from "./App.vue";
import router from "./router";
import VueSocketIO from "vue-socket.io";
import UUID from 'vue-uuid';
import VueLodash from 'vue-lodash'
import lodash from "lodash";

const SERVER_IP = "87.71.137.78";

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

Vue.use(UUID);

Vue.use(VueLodash, { lodash: lodash })

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
