<template>
  <div id="clock">
    <fieldset>
      <legend>
        <h1>Current time:</h1>
      </legend>
      <h3>{{ currentDateTime() }}</h3>
      <h3>
        {{ currentTime() }}
      </h3>
    </fieldset>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",

  methods: {
    currentDateTime() {
      return moment().format("ddd Do MMM YYYY");
    },

    currentTime() {
      return moment().format("H:mm:ss A");
    },

    updateCurrentTime() {
      setInterval(this.currentTime, 1000);
    },
  },
};
</script>

<style scoped>
#clock {
  margin: 8px auto;
  text-align: center;
}
fieldset {
  width: 55%;
  border-radius: 8px;
  margin: auto;
}
</style>
