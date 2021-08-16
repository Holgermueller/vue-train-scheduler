<template>
  <div id="timeRemaining">
    <p>
      <v-icon left>mdi-timer-sand</v-icon>
      Departing: {{ calcTimeRemaining }}
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
  },

  computed: {
    calcTimeRemaining() {
      let now = moment.utc();
      let departureDate = this.departureDate;
      let departureTime = this.departureTime;
      let dateTime = moment(departureDate + departureTime, "YYYY-MM-DDLT");
      let duration = moment.duration(dateTime.diff(now));

      let days = Math.floor(duration.asDays());
      // duration.subtract(moment.duration(days, "days"));

      let hours = duration.hours();
      //duration.subtract(moment.duration(hours, "hours"));

      let minutes = duration.minutes();
      //duration.subtract(moment.duration(minutes, "minutes"));

      return days + " days " + hours + " hours " + minutes + " minutes";
    },
  },
};
</script>
