<template>
  <div id="addTrip" class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="green" dark>
          <v-icon left>mdi-google-maps</v-icon>
          Add A Trip
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Add A Trip</v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-text-field
              type="text"
              v-model="destination"
              value="destination"
              id="destination"
              label="Destination"
              outlined
              clearable
            ></v-text-field>
            <v-text-field
              type="text"
              v-model="departurePlace"
              value="departurePlace"
              id="departurePlace"
              label="Place of departure"
              outlined
              clearable
            ></v-text-field>

            <h5>Time of departure:</h5>
            <v-time-picker
              v-model="departureTime"
              ampm-in-title
              full-width
            ></v-time-picker>

            <h5>Date of departure:</h5>
            <v-date-picker v-model="departureDate" full-width></v-date-picker>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn
            @click="
              closeDialog();
              resetForm();
            "
            color="red"
            dark
          >
            <v-icon left>mdi-cancel</v-icon>
            Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn
            @click="submitTrip"
            color="green"
            :loading="loading"
            :disabled="loading"
            dark
          >
            <v-icon left>mdi-check-bold</v-icon>
            Submit</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: "AddTrain",

  data() {
    return {
      dialog: false,
      destination: "",
      departureTime: "",
      departureDate: "",
      departurePlace: "",
    };
  },

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    submitTrip() {
      this.$store.dispatch("addTrip", {
        destination: this.destination,
        departureTime: this.departureTime,
        departurePlace: this.departurePlace,
        departureDate: this.departureDate,
      });

      this.resetForm();
      this.closeDialog();
    },

    resetForm() {
      this.$refs.form.reset();
    },

    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style scoped>
#addTrip {
  margin: 8px;
}
</style>
