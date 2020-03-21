<template>
  <q-page padding>
    <div class="row q-pa-lg title">
      <div class="col-12 text-center ">
          <h1>ONDE VOCÊ ESTÁ?</h1>
      </div>
    </div>
    <div class="content text-weight-light text-body2">
      <div class="row q-pa-lg">
        <div class="col-12">
          <q-input class="text-center" rounded outlined v-model="text" label="Digite seu Endereço" ></q-input>
        </div>
      </div>
      <div class="row text-center q-pa-lg">
        <div class="col-12">
          OU
        </div>
      </div>
      <div class="row q-pa-lg">
        <div class="col-12">
          <q-btn class="q-pa-md full-width" color="primary" unelevated rounded label="Permitir Geolocalização"></q-btn>
        </div>
      </div>
      <div class="row q-mt-xl">
        <div class="col-6">
          <q-btn class="button-write font-wite text-caption text-weight-light q-pa-md" unelevated rounded label="Salvar Localização"></q-btn>
        </div>
        <div class="col-6">
          <router-link class="text-decoration-none" to="/pesquisar">
            <q-btn class="full-width font-wite text-caption text-weight-light q-pa-md" color="primary" unelevated rounded label="Avançar"></q-btn>
          </router-link>
        </div>
      </div>
    </div>
  </q-page>
</template>
<style>
  .title h1, h2, h3{font-size:16px;font-weight: 700;color:#399EA7;}
  .q-field--rounded .q-field__control {text-align: center;}
  .button-write{background-color:#A7A7A7;font-weight: 100;}
  .font-wite{color:#fff;}
</style>
<script>
export default {
  name: 'localizacao'
}
</script>
