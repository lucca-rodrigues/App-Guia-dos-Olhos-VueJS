<template>
  <q-page padding>
    <div class="row voltar">
      <div class="col-12">
        <q-list>
          <q-item-section avatar>
            <router-link class="decoration-none" to="/">
              <q-icon class="q-ml-sm q-mt-md text-h5 " name="arrow_back" />
            </router-link>
          </q-item-section>
        </q-list>
      </div>
    </div>
    <div class="row q-pa-lg">
      <div class="col-12 text-center title text-h6 text-weight-light">
          <p>Insira as informações de localização de sua empresa</p>
      </div>
    </div>
    <div class="content text-weight-light text-body2">
      <div class="row q-pa-sm">
        <div class="col-12">
          <q-input class="text-center" rounded outlined v-model="text" label="Procurar CEP"></q-input>
        </div>
      </div>
      <div class="row q-pa-sm">
        <div class="col-8 q-pr-sm">
          <q-input class="text-center" rounded outlined v-model="text" label="Cidade"></q-input>
        </div>
        <div class="col-4">
          <q-input class="text-center" rounded outlined v-model="text" label="Estado"></q-input>
        </div>
      </div>
      <div class="row q-pa-sm">
        <div class="col-12">
          <q-input class="text-center" rounded outlined v-model="text" label="Endereço"></q-input>
        </div>
      </div>
      <div class="row q-pa-sm">
        <div class="col-12">
          <q-input class="text-center" rounded outlined v-model="text" label="Bairro"></q-input>
        </div>
      </div>
      <div class="row q-pa-sm">
        <div class="col-6 q-pa-sm">
          <q-input class="text-center" rounded outlined v-model="text" label="Número"></q-input>
        </div>
        <div class="col-6 q-pa-sm">
          <q-input class="text-center" rounded outlined v-model="text" label="Complemento"></q-input>
        </div>
      </div>
      <div class="row q-mt-sm">
        <div class="col-6 q-pa-sm">
          <router-link class="text-decoration-none" to="/cadastro-contato-anunciante">
            <q-btn class="button-write font-wite text-caption text-weight-light q-pa-sm" unelevated rounded label="Voltar"></q-btn>
          </router-link>
        </div>
        <div class="col-6 q-pa-sm">
          <router-link class="text-decoration-none" to="/cadastro-categoria-empresa">
            <q-btn class="full-width font-wite text-caption text-weight-light q-pa-sm" color="primary" unelevated rounded label="Avançar"></q-btn>
          </router-link>
        </div>
      </div>
    </div>
  </q-page>
</template>
<style>
  .title h1{
    font-size:16px;
    font-weight: 700;
    color:#399EA7;
    }
    .q-field--rounded .q-field__control {text-align: center;}
    .button-blue{
      background-color:#399EA7;
      color:#fff;
      font-size:13px;
      font-weight:100;
      width:100%;
    }
    .button-write{
      background-color:#A7A7A7;
      font-weight: 100;
      width:100%
    }
    .font-wite{color:#fff;}
</style>
<script>
export default {
  name: 'cadastro-contato-anunciante'
}

</script>
