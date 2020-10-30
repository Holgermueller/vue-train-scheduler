<template>
  <div id="editTrip" class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          Edit
        </v-btn>
      </template>

      <v-card outlined>
        <v-card-title> Edit trip: {{ destination }} </v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-text-field
              type="text"
              v-model="editedDestination"
              value="destination"
              id="destination"
              :label="destination"
              :placeholder="destination"
              outlined
              clearable
            ></v-text-field>
            <v-text-field
              type="text"
              v-model="editedDeparturePlace"
              value="departurePlace"
              id="departurePlace"
              :label="departurePlace"
              :placeholder="departurePlace"
              outlined
              clearable
            ></v-text-field>
            <v-text-field
              type="text"
              v-model="editedDepartureTime"
              value="departureTime"
              id="departureTime"
              :label="departureTime"
              :placeholder="departureTime"
              outlined
              clearable
            ></v-text-field>
          </v-form>
        </v-card-text>

        <v-divider> </v-divider>

        <v-card-actions>
          <v-btn @click="closeDialog">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn
            @click.prevent="submitEdits"
            :loading="loading"
            :disabled="loading"
            >Submit</v-btn
          >
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
      editedDestination: this.destination,
      editedDeparturePlace: this.departurePlace,
      editedDepartureTime: this.departureTime,
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    closeDialog() {
      this.dialog = false;
    },

    submitEdits() {
      this.$store.dispatch("editTripInfo", {
        tripId: this.tripId,
        editedDestination: this.editedDestination,
        editedDeparturePlace: this.editedDeparturePlace,
        editedDepartureTime: this.editedDepartureTime,
      });

      this.closeDialog();
    },
  },
};
</script>
