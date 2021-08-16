<template>

   <v-row
        no-gutters 
        justify="center"
        fill-height
   >
        <v-col
            lg="4" 
            md="12"
            class="pr-6"
        >
            <v-card
            elevation="0"
            class="pa-4"
            >
            <v-card-title class="pa-0 mb-6 text-center">Criar sua conta</v-card-title>
            <forms-register
                 @register= "createFirebaseUser"
            />
            </v-card> 
        </v-col>  
        <v-col
            lg="4"
            md="12"
            class="pl-10"
        >  
        <v-img
            class="mt-6"
            src="@/assets/imagens/cadastro.svg"
        />
    </v-col>
  </v-row>
</template>
<script>

import FormsRegister from '../components/FormsRegister.vue';
import firebase from "firebase";

export default {
  name: 'Register',
  components: {
      FormsRegister
  },
  methods: {
    createFirebaseUser(user) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(data => {
          data.user
            .updateProfile({
              displayName: user.name
            })
              .then(() => {
              this.$router.push({ name:'login'})
            });
        })
          .catch(err => {
          this.error = err.message;
        });
    }
  }
};
</script>