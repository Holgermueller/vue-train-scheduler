<template>
  <div id="login">
    <v-layout row v-if="error">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <app-alert
          @dismissed="onDismissed"
          :text="error.message || error"
        ></app-alert>
      </v-flex>
    </v-layout>

    <v-layout row v-if="error">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <app-alert
          @dismissed="onDismissed"
          :text="error.message || error"
        ></app-alert>
      </v-flex>
    </v-layout>

    <v-form ref="form">
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field
          v-model="email"
          label="Email"
          prepend-icon="mdi-account-circle"
          outlined
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-text-field
          v-model="password"
          label="Password"
          prepend-icon="mdi-lock"
          outlined
          :type="showPassword ? 'text' : 'password'"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 sm12 md12 lg12 xl12>
        <v-btn to="/forgotPassword" elevation="0" text>
          Forgot Password?
        </v-btn>
      </v-flex>
    </v-form>

    <v-divider></v-divider>
    <v-card-actions>
      <v-btn color="red" @click.prevent="clearLoginForm" dark>
        <v-icon left>mdi-close-circle</v-icon>
        Cancel
      </v-btn>
      <v-spacer></v-spacer>
      <router-link
        :to="{
          name: 'Dashboard',
          params: { currentUser: currentUser, userId: userId },
        }"
      >
        <v-btn
          color="blue"
          dark
          @click.prevent="loginUser"
          :loading="loading"
          :disabled="loading"
        >
          <v-icon left>mdi-check-bold</v-icon>
          Submit</v-btn
        >
      </router-link>
    </v-card-actions>
  </div>
</template>

<script>
export default {
  name: "LoginForm",

  data() {
    return {
      email: "",
      password: "",
      showPassword: false,
      currentUser: false,
      userId: null,
      errorFromDom: "",
    };
  },

  computed: {
    user() {
      return this.$store.getters.user;
    },
    error() {
      return this.$store.getters.error;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },

  watch: {
    user(value) {
      if (value !== null && value !== undefined) {
        this.$router.push("./dashboard");
      }
    },
  },

  methods: {
    loginUser() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
        userId: this.userId,
        currentUser: this.currentUser,
      });

      this.clearForm();
    },

    clearForm() {
      this.$refs.form.reset();
      this.email = "";
      this.password = "";
      this.errorFromDom = "";
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
