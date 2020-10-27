<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500">
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on">
          Add A Train
        </v-btn>
      </template>

      <v-card>
        <v-card-title>Add A Train</v-card-title>

        <v-card-text>
          <v-form ref="form">
            <v-text-field placeholder="Destination"></v-text-field>
            <v-text-field placeholder="Departure time"></v-text-field>
            <v-text-field placeholder="Place of departure"></v-text-field>
            <v-text-field placeholder="Time until departure"></v-text-field>
          </v-form>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-btn @click="dialog = false">Cancel</v-btn>
          <v-spacer></v-spacer>
          <v-btn>Submit</v-btn>
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
    };
  },
};
</script>
