<template>
  <div id="signOut">
    <v-btn @click.prevent="logout">Sign Out</v-btn>
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
