<template>
  <div id="timeRemaining">
    <p>
      <v-icon left>mdi-timer-sand</v-icon>
      Departing in: {{ calcTimeRemaining }}
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
      duration.subtract(moment.duration(days, "days"));

      let hours = duration.hours();
      duration.subtract(moment.duration(hours, "hours"));

      let minutes = duration.minutes();
      duration.subtract(moment.duration(minutes, "minutes"));

      if (days == 1 && hours == 1 && minutes == 1) {
        return days + " day " + hours + " hour " + minutes + " minute";
      } else if (days == 0 && hours == 0) {
        return minutes + "minutes";
      } else if (days == 1 && hours == 1) {
        return days + " day " + hours + " hour " + minutes + " minutes";
      } else if (days == 0) {
        return hours + " hours " + minutes + " minutes";
      } else if (days == 1) {
        return days + " day " + hours + " hours " + minutes + " minutes";
      } else if (hours == 0) {
        return days + " days " + minutes + " minutes";
      } else if (hours == 1) {
        return days + " days " + hours + " hour " + minutes + " minutes";
      } else if (minutes == 0) {
        return days + " days " + hours + " hours ";
      } else if (minutes == 1) {
        return days + " days " + hours + " hours " + minutes + " minute";
      } else {
        return days + " days " + hours + " hours " + minutes + " minutes";
      }
    },
  },
};
</script>
