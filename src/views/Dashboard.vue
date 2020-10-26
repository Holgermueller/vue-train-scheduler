<template>
  <div id="dashboard">
    <v-data-table dense>
      <v-data-table-header>
        This is the header
      </v-data-table-header>
    </v-data-table>
  </div>
</template>

<script>
export default {
  name: "Dashboard",

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
