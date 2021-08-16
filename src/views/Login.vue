<template>
  <v-row no-gutters justify="center" fill-height class="login">
    <v-col lg="4" md="12" class="pr-4">
      <v-card elevation="0" class="pa-4">
        <v-card-title class="pa-0 card-title mb-14">Entrar</v-card-title>
        <forms-login @login="loginWithFirebase" />
        <line-or />
        <v-row justify="center mt-10 mb-10">
          <outlined-button text="Não possuo conta" />
          <filled-button
            text="Entrar com Facebook"
            icon="mdi-facebook"
            @click="loginWithFacebook"
          />
        </v-row>
      </v-card>
    </v-col>
    <v-col lg="4" md="12" class="mt-16 pl-10">
      <v-img class="mt-16" src="@/assets/imagens/login.svg" />
    </v-col>
  </v-row>
</template>

<script>
import FormsLogin from "../components/FormsLogin.vue";
import firebase from "firebase";
import { mapActions } from "vuex";
import LineOr from "../components/LineOr.vue";
import OutlinedButton from "../components/OutlinedButton.vue";
import FilledButton from "../components/FilledButton.vue";

export default {
  name: "Login",
  components: {
    LineOr,
    FilledButton,
    OutlinedButton,
    FormsLogin,
  },
  methods: {
    ...mapActions(["addUser"]),
    loginWithFirebase(user) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((data) => {
          this.addUser({
            name: data.user.displayName,
            email: data.user.email,
          });
          this.$router.push({ name: "dashboard" });
        })
        .catch((err) => {
          throw new Error(`Problem handling something: ${err}.`);
          // this.error = err.message;
        });
    },
  },
};
</script>
<style lang="scss">
.login {
  .card-title {
    text-align: center;
    display: block;
    color: $button-color;
    font-family: "Verdana";
  }
}
</style>
