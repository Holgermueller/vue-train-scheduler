<template>
  <div id="signOut">
    <v-btn @click.prevent="logout">
      <v-icon left>mdi-logout</v-icon>
      Sign Out</v-btn
    >
  </div>
</template>

<script>
export default {
  name: "Logout",

  computed: {
    loading() {
      return this.$store.getters.loading;
    },
  },

  methods: {
    logout() {
      return this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped></style>
