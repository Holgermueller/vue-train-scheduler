<template>
  <div id="schedule">
    <v-expansion-panels focusable inset>
      <v-expansion-panel
        v-for="(trip, index) in trips"
        :index="index"
        :key="trip.tripId"
      >
        <v-expansion-panel-header>
          {{ trip.destination }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card-text>
            <p>
              <v-icon left>mdi-sign-direction</v-icon>
              Departing from: {{ trip.departurePlace }}
            </p>

            <p>
              <v-icon left>mdi-routes-clock</v-icon>
              Departing at: {{ trip.departureTime | formatDepartureTime }}
            </p>

            <p>
              <v-icon left>mdi-calendar</v-icon>
              Date of departure: {{ trip.departureDate | formatDepartureDate }}
            </p>

            <TimeRemainingDisplay
              :tripId="trip.tripId"
              :departureDate="trip.departureDate"
            />
          </v-card-text>

          <v-card-actions>
            <DeleteTrip :tripId="trip.tripId" :destination="trip.destination" />
            <v-spacer></v-spacer>
            <EditTrip
              :tripId="trip.tripId"
              :destination="trip.destination"
              :departurePlace="trip.departurePlace"
              :departureTime="trip.departureTime"
              :departureDate="trip.departureDate"
            />
          </v-card-actions>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import moment from "moment";
import TimeRemainingDisplay from "./TimeRemainingDisplay.vue";
import DeleteTrip from "./DeleteTrip";
import EditTrip from "./EditTrip";

export default {
  name: "schedule",

  components: {
    TimeRemainingDisplay,
    DeleteTrip,
    EditTrip,
  },

  props: {
    trips: {
      type: Array,
      required: true,
    },
  },

  filters: {
    formatDepartureTime(departureTime) {
      return moment(departureTime, "HH:mm").format("h:mm A");
    },

    formatDepartureDate(departureDate) {
      return moment(departureDate, "YYYY-MM-DD").format("ddd Do MMM YYYY");
    },
  },
};
</script>
