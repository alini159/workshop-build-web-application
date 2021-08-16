<template>
  <v-row justify="center" no-gutters>
    <v-col lg="8" md="12" class="tasks-toolbar">
      <v-app-bar
        color="transparent"
        height="80"
        elevation="0"
        dark
      >
        <v-toolbar-title  class="tasks-title">
          <v-btn color="#e451ff" text to="/" class="button">
            Tasks
          </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn text color="#3e3e55" class="buttons">
          Button
        </v-btn>

        <v-btn text color="#3e3e55" class="buttons">
          Button
        </v-btn>
      </v-app-bar>
    </v-col>
  </v-row>
</template>

<script>
export default {
    name: 'Toolbar' ,
}
</script>

<style lang="scss">
.tasks-toolbar {
  .tasks-title {
    color: #e451ff;
    font-family: 'Verdana';
    .button {
      text-transform: none;
    }
    
    .v-btn.v-size--default {
      font-size: 20px;
    }
  }
  .buttons {
    text-transform: none;
    font-family: 'Verdana';
  }
}
</style>