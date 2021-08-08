<template>
  <div id="forgotPassword">
    <v-card class="forgot-password-card">
      <v-card-title>Forgot your password?</v-card-title>

      <v-card-subtitle>
        Submit your email, and we'll send you a reset link.
      </v-card-subtitle>

      <v-card-text>
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
              prepend-icon="mdi-email"
              outlined
            ></v-text-field>
          </v-flex>
        </v-form>

        <p v-if="success" class="success-message">
          {{ success }}
        </p>
      </v-card-text>

      <v-card-actions>
        <v-btn to="/" @click.prevent="clearForm" elevation="0" color="red" dark>
          <v-icon left>mdi-cancel</v-icon>
          cancel</v-btn
        >
        <v-spacer></v-spacer>
        <v-btn
          @click.prevent="sendEmail"
          elevation="0"
          color="blue"
          dark
          :loading="loading"
          :disabled="loading || !formIsValid"
          >submit
          <v-icon right>mdi-login</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "ForgotPasswordPage",

  data() {
    return {
      email: "",
      success: "",
    };
  },

  computed: {
    formIsValid() {
      return this.email !== "";
    },

    loading() {
      return this.$store.getters.loading;
    },

    error() {
      return this.$store.getters.error;
    },
  },

  methods: {
    clearForm() {
      this.$refs.form.reset();
    },

    sendEmail() {
      this.success =
        "Thank you for submitting your email. If it's in our database we'll send you an email with a reset link.";

      this.clearForm();
    },
  },
};
</script>

<style scoped>
.forgot-password-card {
  width: 75%;
  margin: 15% auto;
}

.success-message {
  color: green;
}
</style>
