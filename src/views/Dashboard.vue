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
        <div>
        {{ listItems }}
        </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Dashboard",
  data() {
    return {
      userName: '',
      listItems:'',
    };
  },
  computed: {
  ...mapGetters(['currentUser','getToken','lists']),
    user() {
      return this.currentUser;
      },
    },
    watch: {
      getToken(value){
        if(value){
          this.fetchLists();
        }
      },
      lists(value){
        if(value){
          this.listItems = value.items;
        }
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
