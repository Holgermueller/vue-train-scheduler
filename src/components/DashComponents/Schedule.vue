<template>
  <div id="schedule">
    <v-expansion-panels focusable inset>
      <v-expansion-panel>
        <v-expansion-panel-header>
          {{ destination }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          some content
          <v-divider vertical></v-divider>
          more content
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: "schedule",

  props: {
    destination: {
      type: String,
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
#schedule {
  margin: 8px auto;
}
</style>
