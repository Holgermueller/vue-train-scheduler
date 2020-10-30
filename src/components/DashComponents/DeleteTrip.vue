<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          Delete
        </v-btn>
      </template>

      <v-card>
        <v-card-title> Delete this trip: {{ destination }}? </v-card-title>

        <v-card-text>
          <p>Are you sure you want to delete this trip?</p>
          <p>This action cannot be reversed.</p>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="closeDialog">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn @click.prevent="deleteTrip">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "DeleteTrip",

  props: {
    tripId: {
      type: String,
    },

    destination: {
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

    deleteTrip() {
      this.$store.dispatch("deleteTrip", {
        tripId: this.tripId,
      });

      this.closeDialog();
    },
  },
};
</script>
