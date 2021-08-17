<template>
  <div class="dashboard">
    <v-row no-gutter justify="left" fill-height>
      <v-col lg="10" md="12" class="ml-6 mt-10">
        <div class="welcome mb-10">Olá, {{ userName }}</div>
        <v-btn
          elevation="0"
          class="mb-8"
          outline
          @click="fetchAuthCode()"
         >
          Sincronizar tasks
        </v-btn>
      </v-col>
    </v-row>
    <v-row no-gutters justify="left" fill-height>
      <v-col md="20" lg="3" class="ml-4 mb-4" v-for="list in items" :key="list.id">
        <list-card :listItem="list"
        @addTasks="addNewTask"
         />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ListCard from "@/components/ListCard.vue";

export default {
  name: "Dashboard",
  components: {
    ListCard,
  },

  data() {
    return {
      userName: "",
      listItems: "",
    };
  },
  computed: {
    ...mapGetters(["currentUser", "getToken", "lists"]),
    user() {
      return this.currentUser;
    },
    items() {
      return this.listItems;
    }
  },
  watch: {
    getToken(value) {
      if (value) {
        this.fetchLists();
      }
    },
    lists(value) {
      if (value) {
        this.listItems = value;
      }
    }
  },
  mounted() {
    this.userName = this.currentUser.name;
    this.fetchLists();
  },
  methods: {
    ...mapActions(["fetchLists", "addGoogleToken", "addNewTaskItem"]),
    fetchAuthCode() {
      this.$gAuth.signIn().then((response) => {
        this.addGoogleToken(response.Zb.access_token);
        window.localStorage.setItem("ACCESS_TOKEN",JSON.stringify(response.Zb.access_token));
      });
    },
    addNewTask(item) {
      this.addNewTaskItem(item);
    }
  }
};
</script>

<style lang="scss">
.dashboard {
  width: 100%;
  margin-top: 0;
  height: 100vh;

  .welcome {
    font-family: "verdana";
    font-size: 16px;
  }
}
</style>
