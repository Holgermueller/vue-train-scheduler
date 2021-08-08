<template>
  <div id="departureTimeDisplay">
    <p>
      <v-icon left>mdi-routes-clock</v-icon>
      Departing at: {{ departureTime | formatDepartureTime }}
    </p>

    <p>
      <v-icon left>mdi-calendar</v-icon>
      Date of departure: {{ departureDate | formatDepartureDate }}
    </p>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "DepartureTimeDisplay",

  props: {
    departureTime: {
      type: String,
      required: true,
    },

    departureDate: {
      type: String,
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
