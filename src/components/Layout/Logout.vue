<template>
  <div id="signOut">
    <v-btn @click.prevent="logout" color="#190061" dark>
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
      return this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped></style>
