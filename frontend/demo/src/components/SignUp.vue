<template>
  <div>
    <form @submit.prevent="signIn">
        <v-text-field
            v-model="username"
            label="E-mail"
            required
            hide-details
          ></v-text-field>
      <br>
        <v-text-field
            v-model="password"
            label="Password"
            required
            hide-details></v-text-field>
      <br>
      <v-btn type=submit>
        Sign Up
      </v-btn>
    </form>
  <v-dialog
        v-model="dialog"
      >
        <v-card>
          <v-card-text>
            {{message}}
          </v-card-text>
          <v-card-actions>
            <v-btn  block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
  </div>
</template>

<script>
import { Auth } from 'aws-amplify';
export default {
  name: 'SignIn',
  data() {
    return {
      username: '',
      password: '',
      message: '',
      dialog: false,
      success: false
    };
  },
  methods: {
    async signIn() {
      try {
          const r = await Auth.signUp(this.username, this.password);
          this.message = 'Sign-up successful! Confirm your account.';
          console.log(r)

        } catch (error) {
          this.message = error.message;
          console.error(error);
        }
        this.dialog = true
      }
    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
