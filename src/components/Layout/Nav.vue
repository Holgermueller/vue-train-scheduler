<template>
  <div id="nav">
    <v-app-bar color="#190061" class="nav white--text" fixed dense>
      <div v-for="link in menulinks" :key="link.title" link>
        <v-btn color="#190061" :to="link.link" class="white--text">
          <v-icon>
            {{ link.icon }}
          </v-icon>
          {{ link.title }}
        </v-btn>
      </div>

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
