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
      state.trips.findIndex((trip) => trip.id === payload);
    },

    UPDATE_TRIP_INFO(state, payload) {
      const tripToUpdate = state.trips.find((thisTrip) => {
        return thisTrip.id === payload.tripId;
      });
      if (payload.destination) {
        tripToUpdate.destination = payload.editedDestination;
      }
      if (payload.departurePlace) {
        tripToUpdate.departurePlace = payload.editedDeparturePlace;
      }
      if (payload.departureTime) {
        tripToUpdate.departureTime = payload.editedDepartureTime;
      }
    },
  },

  actions: {
    getTripList({ commit, getters }) {
      commit("SET_LOADING", true);

      firebase
        .collection("trips")
        .where("creatorId", "==", getters.user.userId)
        .onSnapshot(
          (querySnapshot) => {
            let tripsFromDb = [];
            querySnapshot.forEach((doc) => {
              let tripData = {
                tripId: doc.id,
                destination: doc.data().destination,
                departureTime: doc.data().departureTime,
                departureDate: doc.data().departureDate,
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

    addTrip({ commit, getters }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("trips")
        .add({
          creatorId: getters.user.userId,
          destination: payload.destination,
          departureTime: payload.departureTime,
          departurePlace: payload.departurePlace,
          departureDate: payload.departureDate,
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

    editTripInfo({ commit }, payload) {
      commit("SET_LOADING", true);

      firebase
        .collection("trips")
        .doc(payload.tripId)
        .update({
          destination: payload.editedDestination,
          departureTime: payload.editedDepartureTime,
          departurePlace: payload.editedDeparturePlace,
          departureDate: payload.editedDepartureDate,
        })
        .then(() => {
          commit("UPDATE_TRIP_INFO", payload);
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
