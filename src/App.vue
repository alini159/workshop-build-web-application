<template>
  <v-app>
    <toolbar/>
    <v-main>
      <v-cotainer fluid fill-height>
        <router-view/>
      </v-cotainer>
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components:{
    Toolbar,
  },

  computed:{
    ...mapGetters([
      'currentUser', 
    ]),
  },

  watch:{
    currentUser(currentUser){
      if (currentUser){
        this.$router.push('/dashboard')
      }
    }
  }
};
</script>