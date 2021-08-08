<template>
  <div id="timeRemaining">
    <p>
      <v-icon left>mdi-timer-sand</v-icon>
      Departing in: {{ calcDaysRemaining() }}
    </p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "TimeRemainingDisplay",

  props: {
    tripId: {
      type: String,
      required: true,
    },

    departureDate: {
      type: String,
      required: true,
    },
  },

  methods: {
    calcDaysRemaining() {
      let todaysDate = moment().format("YYYY-MM-DD");
      let departureDate = moment(this.departureDate, "YYYY-MM-DD");

      if (departureDate.diff(todaysDate, "days") > 1) {
        return departureDate.diff(todaysDate, "days") + " days";
      } else if (departureDate.diff(todaysDate, "days") == 1) {
        return "1 day";
      } else if (departureDate.diff(todaysDate, "days") == 0) {
        return "0 days";
      } else {
        this.deleteOldTrips();
      }
    },
  },

  deleteOldTrips() {
    let tripId = this.tripId;
    this.$store.dispatch("deleteTrip", {
      tripId: tripId,
    });
  },
};
</script>
