import { createApp } from 'vue'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'

const vuetify = createVuetify({
  components,
  directives,
  icons:{
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  }
})


import AmplifyVue from '@aws-amplify/ui-vue';
import { Amplify } from 'aws-amplify';
import awsconfig  from "./aws-exports"

awsconfig.endpoint = "https://localhost.localstack.cloud"

Amplify.configure(awsconfig)
const app = createApp(App);
app.use(AmplifyVue);
app.use(vuetify);
app.mount('#app');
