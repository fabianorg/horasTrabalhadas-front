<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item to="/minhas-atividades">
          <v-list-item-action>
            <v-icon>mdi-poll-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Minhas Atividades</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item to="/nova-atividade">
          <v-list-item-action>
            <v-icon>mdi-plus-box</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Nova Atividade</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Meus Dados</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>Gerenciador de Horas</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-dialog v-model="modalLogin" light max-width="400px" @click:outside="modalLogin= false">
        <template v-slot:activator="{on}">
          <v-btn icon v-on="on" title="Clique para entrar">
            <v-icon>mdi-login</v-icon>
          </v-btn>
        </template>

        <v-card>
          <v-card-title>Gerenciador de Horas - Login</v-card-title>
          <v-card-text>
            <v-container>
              <v-form>
                <v-text-field
                  type="email"
                  name="email"
                  v-model="user.email"
                  outlined
                  label="Email"
                ></v-text-field>
                <v-text-field
                  type="password"
                  name="senha"
                  v-model="user.senha"
                  outlined
                  label="Senha"
                ></v-text-field>
              </v-form>
              <v-card-actions class="justify-center">
                <v-btn color="primary" @click="modalLogin = false">Entrar</v-btn>
              </v-card-actions>
              <v-card-actions class="justify-center">
                <router-link
                  to="/novo-voluntario"
                  class="justify-center"
                  v-on:click.native="modalLogin = false"
                >Não possuo acesso</router-link>
              </v-card-actions>
            </v-container>
          </v-card-text>
        </v-card>
      </v-dialog>
    </v-app-bar>

    <v-content>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; Gerenciador de Horas</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  /* eslint-disable */
  data() {
    return {
      voluntario: {
        email: "",
        senha: ""
      },
      drawer: null,
      modalLogin: false
    };
  },
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>

<style scoped>
.icon:before {
  font-family: sans-serif;
}
</style>