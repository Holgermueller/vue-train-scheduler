<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" color="green" dark>
          Add A Train
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Add A Train</v-card-title>

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
              v-model="departureTime"
              value="departureTime"
              id="departureTime"
              label="Departure time"
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
            >Cancel</v-btn
          >
          <v-spacer></v-spacer>
          <v-btn @click="submitTrip" color="blue" dark>Submit</v-btn>
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
      departurePlace: "",
    };
  },

  methods: {
    submitTrip() {
      let trip = {
        destination: this.destination,
        departureTime: this.departureTime,
        departurePlace: this.departurePlace,
      };

      console.log(trip);
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
