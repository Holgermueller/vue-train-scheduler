export default {
  state: {
    loading: false,
    error: null,
  },

  mutations: {
    SET_LOADING(state, payload) {
      state.loading = payload;
    },

    SET_ERROR(state, payload) {
      state.error = payload;
    },

    CLEAR_ERROR(state) {
      state.error = null;
    },
  },

  actions: {
    clearError({ commit }) {
      commit("CLEAR_ERROR");
    },
  },

  getters: {
    loading(state) {
      return state.loading;
    },

    error(state) {
      return state.error;
    },
  },
};
