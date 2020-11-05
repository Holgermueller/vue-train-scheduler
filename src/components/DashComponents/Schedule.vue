<template>
  <div id="schedule">
    <v-expansion-panels focusable inset>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ destination }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>
            <v-icon left>mdi-sign-direction</v-icon>
            Departing from: {{ departurePlace }}
          </p>

          <p>
            <v-icon left>mdi-routes-clock</v-icon>
            Departing at: {{ departureTime | formatDepartureTime }}
          </p>

          <p>
            <v-icon left>mdi-calendar</v-icon>
            Date of departure: {{ departureDate | formatDepartureDate }}
          </p>

          <p>
            <v-icon left>mdi-timer-sand</v-icon>
            Departing in: time will appear here.
          </p>

          <v-card-actions>
            <DeleteTrip :tripId="tripId" :destination="destination" />
            <v-spacer></v-spacer>
            <EditTrip
              :tripId="tripId"
              :destination="destination"
              :departurePlace="departurePlace"
              :departureTime="departureTime"
              :departureDate="departureDate"
            />
          </v-card-actions>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import DeleteTrip from "./DeleteTrip";
import EditTrip from "./EditTrip";
import moment from "moment";

export default {
  name: "schedule",

  components: {
    DeleteTrip,
    EditTrip,
  },

  props: {
    destination: {
      type: String,
    },
    departurePlace: {
      type: String,
    },

    departureTime: {
      type: String,
    },

    tripId: {
      type: String,
    },

    departureDate: {
      type: String,
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

<style scoped></style>
