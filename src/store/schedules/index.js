import firebase from "../../firebase/fbInit";

export default {
  state: {
    trips: [],
  },

  mutations: {
    SET_TRIP_LIST(state, payload) {
      state.trips = payload;
    },

    DELETE_FROM_SCHEDULE(state, payload) {
      state.trips.findIndex((item) => item.id === payload);
    },
  },

  actions: {
    getTripList({ commit }) {
      commit("SET_LOADING", true);

      firebase.collection("trips").onSnapshot(
        (querySnapshot) => {
          let tripsFromDb = [];
          querySnapshot.forEach((doc) => {
            let tripData = {
              tripId: doc.id,
              destination: doc.data().destination,
              departureTime: doc.data().departureTime,
              departurePlace: doc.data().departurePlace,
            };
            tripsFromDb.push(tripData);
          });
          commit("SET_TRIP_LIST", tripsFromDb);
          commit("SET_LOADING", false);
        },
        (err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        }
      );
    },

    addTrip({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("trips")
        .add({
          destination: payload.destination,
          departureTime: payload.departureTime,
          departurePlace: payload.departurePlace,
        })
        .then(() => {
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },

    deleteTrip({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("trips")
        .doc(payload.tripId)
        .delete()
        .then(() => {
          commit("DELETE_FROM_SCHEDULE");
          commit("SET_LOADING", false);
        })
        .catch((err) => {
          commit("SET_LOADING", true);
          commit("SET_ERROR", err);
        });
    },
  },

  getters: {
    trips(state) {
      return state.trips;
    },
  },
};
