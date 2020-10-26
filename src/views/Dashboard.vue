<template>
  <div id="dashboard">
    <Clock />

    <v-data-table dense>
      <v-data-table-header>
        This is the header
      </v-data-table-header>
    </v-data-table>
  </div>
</template>

<script>
import Clock from "../components/DashComponents/Clock";

export default {
  name: "Dashboard",

  components: {
    Clock,
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
