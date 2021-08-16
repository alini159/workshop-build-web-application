<template>
  <v-row no-gutters justify="center" fill-height class="register">
    <v-col lg="4" md="12" class="pr-6">
      <v-card elevation="0" class="pa-4">
        <v-card-title class="pa-0 mb-6 card-title">Criar sua conta</v-card-title
        >
        <forms-register @register="createFirebaseUser" />
        <line-or />
        <v-row justify="center mt-10 mb-10">
          <outlined-button text="Já possuo conta" />
          <filled-button text="Entrar com Facebook" icon="mdi-facebook" />
        </v-row>
      </v-card>
    </v-col>
    <v-col lg="4" md="12" class="mt-16 pl-10">
      <v-img class="mt-16" src="@/assets/imagens/cadastro.svg" />
    </v-col>
  </v-row>
</template>
<script>
import FormsRegister from "../components/FormsRegister.vue";
import firebase from "firebase";
import LineOr from "../components/LineOr.vue";
import OutlinedButton from "../components/OutlinedButton.vue";
import FilledButton from "../components/FilledButton.vue";

export default {
  name: "Register",
  components: {
    FormsRegister,
    LineOr,
    FilledButton,
    OutlinedButton,
  },
  methods: {
    createFirebaseUser(user) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((data) => {
          data.user
            .updateProfile({
              displayName: user.name,
            })
            .then(() => {
              this.$router.push({ name: "login" });
            });
        })
        .catch((err) => {
          this.error = err.message;
        });
    },
  },
};
</script>
<style lang="scss">
.register {
  .card-title {
    text-align: center;
    display: block;
    color: $button-color;
    font-family: "Verdana";
  }
}
</style>
