<template>
  <div id="timeRemaining">
    <p>
      <v-icon left>mdi-timer-sand</v-icon>
      Departing: {{ calcDaysRemaining }}, {{ calcHoursRemaining }}
    </p>

    <p>
      {{ testFunction() }}
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

    departureTime: {
      type: String,
      required: true,
    },
  },

  methods: {
    deleteOldTrips() {
      this.$store.dispatch("deleteTrip", {
        tripId: this.tripId,
      });
    },

    testFunction() {
      let now = moment.utc();
      let departureDate = this.departureDate;
      let departureTime = this.departureTime;

      let dateTime = moment(departureDate + departureTime, "YYYY-MM-DDLT");

      return dateTime.diff(now);
    },
  },

  computed: {
    calcDaysRemaining() {
      let todaysDate = moment().format("YYYY-MM-DD");
      let departureDate = moment(this.departureDate, "YYYY-MM-DD");

      if (departureDate.diff(todaysDate, "days") > 1) {
        return "in " + departureDate.diff(todaysDate, "days") + " days";
      } else if (departureDate.diff(todaysDate, "days") == 1) {
        return "in 1 day";
      } else {
        return "Today";
      }
    },

    calcHoursRemaining() {
      let now = moment.utc();
      let departureHour = moment.utc(this.departureTime, "hh");

      if (departureHour.diff(now, "hours") > 1) {
        return departureHour.diff(now, "hours") + " hours";
      } else {
        return "in 1 hour";
      }
    },
  },
};
</script>
