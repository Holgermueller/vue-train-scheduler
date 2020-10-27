<template>
  <div id="dashboard">
    <Clock />

    <AddTrain />

    <Schedule />
  </div>
</template>

<script>
import Clock from "../components/DashComponents/Clock";
import AddTrain from "../components/DashComponents/AddATrain";
import Schedule from "../components/DashComponents/Schedule";

export default {
  name: "Dashboard",

  components: {
    Clock,
    AddTrain,
    Schedule,
  },

  data() {
    return {};
  },

  computed: {},

  methods: {},
};
</script>

<style scoped>
#dashboard {
  width: 85%;
  margin: 8% auto;
}
</style>
