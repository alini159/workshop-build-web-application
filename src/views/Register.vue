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
            <forms-register/>
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

export default {
  name: 'Register',
  components: {
      FormsRegister
  }
};
</script>