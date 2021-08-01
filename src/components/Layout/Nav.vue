<template>
  <div id="nav">
    <v-app-bar color="#5F5756" class="nav white--text" fixed dense>
      <div v-for="link in menulinks" :key="link.title" link>
        <v-btn
          color="#5F5756"
          :to="link.link"
          class="white--text"
          elevation="0"
        >
          <v-icon left>
            {{ link.icon }}
          </v-icon>
          {{ link.title }}
        </v-btn>
      </div>
      <v-spacer></v-spacer>

      <h3>Hello, {{ user.displayName }}</h3>

      <v-spacer></v-spacer>

      <Logout v-if="userIsAuthenticated" />
    </v-app-bar>
  </div>
</template>

<script>
import Logout from "./Logout";

export default {
  name: "Nav",

  components: {
    Logout,
  },

  data() {
    return {};
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },

    userIsAuthenticated() {
      return (
        this.$store.getters.user !== null &&
        this.$store.getters.user !== undefined
      );
    },

    menulinks() {
      let menulinks = [
        {
          icon: "mdi-train",
          title: "Home",
          link: "/",
        },
        {
          icon: "mdi-account",
          title: "Dashboard",
          link: "/dashboard",
        },
      ];
      return menulinks;
    },
  },
};
</script>

<style scoped>
.nav {
  z-index: 2;
  width: 100%;
}
.v-input--switch--inset {
  margin-top: 16px;
}
a {
  text-decoration: none;
}
</style>
