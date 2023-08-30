<template>
  <v-app>
    <v-app-bar color="primary" density="compact">
      <template v-slot:prepend>
        <v-app-bar-nav-icon color="whites">
          <v-icon icon="fa fa-bars" />
        </v-app-bar-nav-icon>
      </template>
      <v-app-bar-title>Amplify - LocalStack Demo</v-app-bar-title>

      <template v-slot:append>
        <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>
    </v-app-bar>
    <v-main>
      <v-container>
        <v-row align="center" justify="center">
          <v-col align-self="center" cols=4>
            <img alt="Vue logo" width="200" src="./assets/logo.png" />
          </v-col>
        </v-row>
      </v-container>
      <v-row>
        <v-col>
          <auth></auth>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import Auth from './pages/Auth.vue';

export default {
  name: "App",
  components: {
    Auth,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
