<template>
  <div id="dashboard">
    <Clock />

    <AddATrip />

    <v-card class="schedule-display" :loading="loading">
      <v-card-title>
        Your upcoming trips:
      </v-card-title>

      <v-card-text>
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

        <Schedule :trips="trips" />
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
