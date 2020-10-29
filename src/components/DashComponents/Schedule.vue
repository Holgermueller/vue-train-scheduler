<template>
  <div id="schedule">
    <v-expansion-panels focusable inset>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ destination }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <p>
            {{ departurePlace }}
          </p>

          <p>
            {{ departureTime }}
          </p>

          <v-card-actions>
            <DeleteTrip :tripId="tripId" />
            <v-spacer></v-spacer>
            <v-btn>Edit</v-btn>
          </v-card-actions>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
import DeleteTrip from "./DeleteTrip";

export default {
  name: "schedule",

  components: {
    DeleteTrip,
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
