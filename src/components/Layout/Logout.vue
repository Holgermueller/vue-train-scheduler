<template>
  <div id="signOut">
    <v-btn @click.prevent="logout" color="#5F5756" dark elevation="0">
      Sign Out
      <v-icon right>mdi-logout</v-icon>
    </v-btn>
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
      this.$store.dispatch("logout");
      this.$router.go({ path: this.$router.path });
    },
  },
};
</script>

<style scoped></style>
