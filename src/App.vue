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

export default {
  name: 'App',
  components:{
    Toolbar,
  },
};
</script>