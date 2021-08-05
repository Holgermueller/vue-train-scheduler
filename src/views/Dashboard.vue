<template>
  <div id="dashboard">
    <Clock />

    <AddATrip />

    <v-layout row v-if="error">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <app-alert
          @dismissed="onDismissed"
          :text="error.message || error"
        ></app-alert>
      </v-flex>
    </v-layout>

    <v-card class="schedule-display" :loading="loading">
      <v-card-title>
        Your upcoming trips:
      </v-card-title>

      <div>
        <v-layout row v-if="error">
          <v-flex xs12 sm12 md12 lg12 xl12>
            <app-alert
              @dismissed="onDismissed"
              :text="error.message || error"
            ></app-alert>
          </v-flex>
        </v-layout>
      </div>

      <v-card-text>
        <Schedule
          v-for="(trip, index) in trips"
          :key="trip.tripId"
          :index="index"
          :destination="trip.destination"
          :departurePlace="trip.departurePlace"
          :departureTime="trip.departureTime"
          :departureDate="trip.departureDate"
          :tripId="trip.tripId"
        />
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Clock from "../components/DashComponents/Clock";
import AddATrip from "../components/DashComponents/AddATrip";
import Schedule from "../components/DashComponents/Schedule";

export default {
  name: "Dashboard",

  components: {
    Clock,
    AddATrip,
    Schedule,
  },

  data() {
    return {};
  },

  created() {
    return this.$store.dispatch("getTripList");
  },

  computed: {
    trips() {
      return this.$store.getters.trips;
    },

    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {},
};
</script>

<style scoped>
#dashboard {
  width: 85%;
  margin: 8% auto;
}
.progress {
  margin: 1% auto;
}
.schedule-display {
  margin: 16px auto;
}
</style>
