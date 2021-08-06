<template>
  <div id="schedule">
    <v-expansion-panels focusable inset>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ destination }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-card-text>
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
              Departing in: {{ calcDaysRemaining() }}
            </p>
          </v-card-text>

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
import moment from "moment";
import DeleteTrip from "./DeleteTrip";
import EditTrip from "./EditTrip";

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

  data() {
    return {};
  },

  methods: {
    calcDaysRemaining() {
      let todaysDate = moment().format("YYYY-MM-DD");
      let departureDate = moment(this.departureDate, "YYYY-MM-DD");

      if (departureDate.diff(todaysDate, "days") == 0) {
        return "0 days";
      } else if (departureDate.diff(todaysDate, "days") == 1) {
        return "1 day";
      } else if (departureDate.diff(todaysDate, "days") < 0) {
        this.deleteOldTrips();
      } else {
        return departureDate.diff(todaysDate, "days") + " days";
      }
    },

    calcHoursRemaining() {
      let now = moment().format("HH:mm");
      let departureTime = moment(this.departureTime, "HH:mm").format("HH:mm");

      return {
        now,
        departureTime,
      };
    },

    calcMinsRemaining() {
      this.$store.dispatch("deleteTrip", {
        tripId: this.tripId,
      });
    },

    deleteOldTrips() {},
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
