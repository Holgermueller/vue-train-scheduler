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
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Nav",

  data() {
    return {};
  },

  computed: {
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
