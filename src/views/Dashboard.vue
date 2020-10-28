<template>
  <div id="dashboard">
    <Clock />

    <AddATrip />

    <Schedule />
  </div>
</template>

<script>
import Clock from "../components/DashComponents/Clock";
import AddATrip from "../components/DashComponents/AddATrip";
import Schedule from "../components/DashComponents/Schedule";

export default {
  name: "Dashboard",

  components: {
    Clock,
    AddATrip,
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
