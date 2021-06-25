<template>
  <v-container>
    <div style="padding-bottom:10px;">
      <h4>Cadastro de Atividades</h4>
    </div>
    <v-form>
      <v-textarea
        v-model="atividade.descricao"
        name="descricao"
        label="Descrição da Atividade"
        outlined
        maxlength="300"
        required
        counter="300"
      />
      <v-text-field
        name="local"
        label="Local de Realização"
        id="local"
        outlined
        required
        maxlength="40"
        counter="40"
        v-model="atividade.local"
      ></v-text-field>
      <v-flex xs12 sm6 md4>
        <v-dialog
          ref="dialog"
          v-model="modalData"
          :return-value.sync="date"
          persistent
          lazy
          full-width
          width="290px"
        >
          <template v-slot:activator="{ on }">
            <v-text-field
              v-model="atividade.data"
              label="Data de Realização"
              readonly
              v-on="on"
              outlined
            ></v-text-field>
          </template>
          <v-date-picker v-model="atividade.data" scrollable locale="pt-Br" format="formatDate">
            <v-spacer></v-spacer>
            <v-btn flat color="primary" @click="modalData = false">Fechar</v-btn>
            <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
          </v-date-picker>
        </v-dialog>
      </v-flex>
      <v-text-field
        name="cargaHoraria"
        label="Carga Horária"
        id="cargaHoraria"
        outlined
        v-model="atividade.cargaHoraria"
        v-mask="'00:00'"
      ></v-text-field>
      <v-row>
        <v-col md="6">
          <v-btn type="button" color="primary" @click="alertMe">Salvar</v-btn>
        </v-col>
        <v-col md="6">
          <v-btn type="button" color="error" @click="alertMe">Cancelar</v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>
<script>
/* eslint-disable */
export default {
  name: "AtividadeForm",
  data() {
    return {
      atividade: {
        descricao: "",
        local: "",
        data: "",
        cargaHoraria: ""
      },
      modalData: false
    };
  },
  methods: {
    alertMe() {
      console.log("teste.: " + this.atividade.descricao);
    }
  }
};
</script>