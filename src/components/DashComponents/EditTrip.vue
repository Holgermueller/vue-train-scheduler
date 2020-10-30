<template>
  <div id="editTrip" class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          Edit
        </v-btn>
      </template>

      <v-card>
        <v-card-title> Edit trip: {{ destination }} </v-card-title>

        <v-card-text>
          form will appear here
        </v-card-text>

        <v-divider> </v-divider>

        <v-card-actions>
          <v-btn @click="closeDialog">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click.prevent="submitEdits">Submit</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "EditTrip",

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
    return {
      dialog: false,
    };
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    submitEdits() {
      console.log("click");

      this.closeDialog();
    },
  },
};
</script>
