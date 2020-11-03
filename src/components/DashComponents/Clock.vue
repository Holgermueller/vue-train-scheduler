<template>
  <div id="clock">
    <v-card class="clock">
      <v-card-text>
        <fieldset>
          <legend>
            <h1>Current time:</h1>
          </legend>
          <h3>{{ this.todaysDate }}</h3>
          <h3>
            {{ this.currentTime }}
          </h3>
        </fieldset>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",

  data() {
    return {
      todaysDate: moment().format("ddd Do MMM YYYY"),
      currentTime: "",
    };
  },

  methods: {
    updateCurrentTime() {
      this.currentTime = moment()
        .add(1, "second")
        .format("h:mm:ss A");
    },
  },

  mounted() {
    setInterval(() => this.updateCurrentTime(), 1 * 1000);
  },
};
</script>

<style scoped>
#clock {
  margin: 8px auto;
  text-align: center;
}
.clock {
  width: 55%;
  margin: auto;
}
fieldset {
  border-radius: 8px;
  margin: auto;
}
</style>
