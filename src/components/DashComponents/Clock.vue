<template>
  <div id="clock">
    <fieldset>
      <legend>
        <h1>Current time:</h1>
      </legend>
      <h3>{{ currentDateTime() }}</h3>
    </fieldset>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Clock",

  methods: {
    currentDateTime() {
      return moment().format("Do MMM YYYY");
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
