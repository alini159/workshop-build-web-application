<template>
   <v-row
        no-gutters 
        justify="center"
        fill-height
        class="login"
         >
            <v-col
                lg="4" 
                md="12"
                class="pr-4"
            >
                <v-card
                    elevation="0"
                    class="pa-4"
                >
                    <v-card-title class="pa-0 mb-6 text-center">Entrar</v-card-title>
                    <forms-login/>
                </v-card> 
            </v-col> 
            <v-col
                lg="4"
                md="12"
                class="pl-10"
            >  
            <v-img
                class="mt-6"
                src="@/assets/imagens/login.svg"
            />
         </v-col>
    </v-row>
</template>

<script>
import FormsLogin from '../components/FormsLogin.vue';

export default {
  name: 'Login',
  components:{
    FormsLogin
  }
};
</script>