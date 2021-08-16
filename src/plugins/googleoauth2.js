import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId: '364438375918-esc10bakfnmbcni103ov085snt267dsl.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/tasks',
  prompt: 'consent'
}
Vue.use(GAuth, gauthOption)
//ok