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
            Departing in: {{ calcDaysRemaining() }} days and {more info here}
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

  data() {
    return {
      daysRemaining: "",
      timeRemaining: "",
    };
  },

  methods: {
    calcDaysRemaining() {
      let todaysDate = moment().format("YYYY-MM-DD");
      let departureDate = moment(this.departureDate, "YYYY-MM-DD");

      return (this.daysRemaining = departureDate.diff(todaysDate, "days"));
    },

    // mounted() {
    //   setInterval(() => this.calcDaysRemaining(), 1 * 1000);
    // },

    // calculateTimeRemaining() {
    //   let now = moment().valueOf();
    //   let departureTime = moment(this.departureTime).valueOf();
    //   let diff = departureTime - now;
    //   let duration = moment.duration(diff, "seconds");

    //   this.timeRemaining = moment(duration)
    //     .subtract(1, "second")
    //     .format("ss");
    // },
  },

  // mounted() {
  //   setInterval(() => this.calculateTimeRemaining(), 1 * 1000);
  // },

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
