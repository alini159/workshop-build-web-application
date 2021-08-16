<template>
  <div>
       Olá, {{ userName }}
        <v-btn
          elevation="0"
          class="mb-8"
          outlined
          @click="fetchAuthCode()"
        >
          Sincronizar tasks
        </v-btn> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      userName: '',
    };
  },
  computed: {
    ...mapGetters(["currentUser"]),
    user() {
      return this.currentUser;
    }
  },
  mounted() {
    this.userName = this.currentUser.name;
     },
  methods: {
    ...mapActions(["fetchLists", "addGoogleToken"]),
    fetchAuthCode() {
      this.$gAuth.signIn().then((response) => {
        console.log(response);
        this.addGoogleToken(response.Zb.access_token);
      });
    },
  }
};
</script>
