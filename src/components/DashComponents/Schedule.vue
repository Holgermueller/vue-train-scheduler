<template>
  <div id="schedule">
    <v-card>
      <v-card-title>
        <h1>Your upcoming trips:</h1>
      </v-card-title>

      <v-card-text>
        <v-expansion-panels focusable inset>
          <v-expansion-panel>
            <v-expansion-panel-header>
              dummy header
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              some content
              <v-divider vertical></v-divider>
              more content
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "schedule",

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
