<template>
  <div>
    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
      <v-tab :value="1">Sign In</v-tab>
      <v-tab :value="2">Sign Up</v-tab>
    </v-tabs>
    <v-window v-model="tab">
      <v-window-item :value="1" :key="1">
        <v-card>
        <sign-in></sign-in>
        </v-card>
      </v-window-item>
      <v-window-item :value="2" :key="2">
        <v-card>
        <sign-up></sign-up>
        </v-card>
      </v-window-item>
    </v-window>
  </div>
</template>

<script>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";

export default {
  name: "App",
  components: {
    SignIn,
    SignUp
  },
  data: () => ({
    tab: 1,
  }),
};
</script>

<style>
</style>