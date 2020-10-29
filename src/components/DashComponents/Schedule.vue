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
            <v-btn>Delete</v-btn>
            <v-spacer></v-spacer>
            <v-btn>Edit</v-btn>
          </v-card-actions>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "schedule",

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
  },

  data() {
    return {};
  },
};
</script>

<style scoped></style>
