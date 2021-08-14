<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      label="Nome"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="rules.emailRules"
      label="E-mail"
      required
    ></v-text-field>
    <v-text-field
            v-model="password"
            :append-icon="show1showpasswors ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.min]"
            :type="showpasswors ? 'text' : 'password'"
            name="input-10-1"
            label="Senha"
            hint="minimo 8 caracteres"
            counter
            @click:append="show1showpasswors = !showshowpasswors1"
         >
        </v-text-field>

        <v-text-field
            v-model="showpassworsConfirmation"
            :append-icon="showpassworsConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
            :rules="[rules.required, rules.passwordMatch]"
            :type="showpassworsConfirmation ? 'text' : 'password'"
            name="input-10-1"
            label="Confirmação de Senha"
            hint="minimo 8 caracteres"
            counter
            @click:append="showpassworsConfirmation = !showpassworsConfirmation"
         >
        </v-text-field>
         <v-btn
            :disabled="!valid"
            color="success"
            class="mr-4"
            @click="validate"
         >
         Criar conta
        </v-btn>
   </v-form>
</template>

<script>
export default {
  name: 'FormsRegister',
  data(){
      return{
           valid: true,
           name: '',
           email: '',
           password: '',
           passwordConfirmation: '',
           showpasswors: false,
           showpassworsConfirmation: false,
           rules: {
            required: value => !!value || 'Obrigatório.',
            min: v => v.length >= 8 || 'Minimo 8 characteres',
            passwordMatch: () => this.password === this.passwordConfirmation || (`senhas nao sao iguais`),
            emailRules: [
                v => !!v || 'Obrigatorio',
                v => /.+@.+\..+/.test(v) || 'E-mail deve ser um endereço valido',
            ],
         },
      }
  }
};
</script>