import Vue from "vue";
import Vuex from "vuex";

import shared from "./shared";
import schedules from "./schedules";
import users from "./users";

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    shared,
    schedules,
    users,
  },
});
