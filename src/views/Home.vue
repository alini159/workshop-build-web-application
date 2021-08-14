<template>
  <v-row
    no-gutters
    justify="center"
    class="home"
  >
    <v-col
      lg="5"
      md="12"
      class="column-cards"
    >
      <v-card
        class="pa-10"
        elevation="0"
        tile
      >
        <v-card-title class="card-title">
          Gerencie suas tarefas diárias de um jeito mais legal
        </v-card-title>
        <v-card-subtitle class="card-subtitle">
          Com organização e tempo, acha-se o segredo de fazer tudo e bem feito
        </v-card-subtitle>
        <v-card-text>
          <v-btn
            class="ma-2 create-account buttons"
            color="#e451ff"
            @click="goTo('register')"
          >
            Criar conta
          </v-btn>
          <v-btn
            class="ma-2 buttons"
            outlined
            color="#e451ff"
            @click="goTo('login')"
          >
            Já possuo uma conta
          </v-btn>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      lg="6"
      md="12"
      class="column-card"
    >
      <v-card
        class="pa-2"
        elevation="0"
        tile
      >
        <v-img class = "img"
          src="@/assets/imagens/Checklist.svg"
        ></v-img>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goTo(route) {
      this.$router.push({ name: route })
    }
  }
}
</script>

<style lang="scss">
.home {
  .img{
    margin-top: 50px;
    width: 600px;
  }
  .column-cards {
    height: 100%;
    .card-title {
      font-family: 'Arial';
      font-size: 30px;
      margin-top: 90px;
      margin-bottom: 20px;
      line-height: 40px;
      word-break: break-word;
    }
    .card-subtitle {
      font-family: 'Verdana';
      font-size: 15px;
      margin-bottom: 80px;
      word-break: break-word;
    }
  
    .buttons {
      text-transform: none;
      font-family: 'Arial';
      height: 48px;
      width: 190px;
    }
    .create-account {
      color: $button-text-secondary-color;
    }
  }
}
</style>

