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
            Departing at: {{ departureTime }}
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
  },

  data() {
    return {};
  },
};
</script>

<style scoped></style>
