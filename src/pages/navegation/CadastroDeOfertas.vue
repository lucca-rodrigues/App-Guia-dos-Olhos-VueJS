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
      <div class="col-12 text-center ">
          <h1 class="text-h6 text-weight-light">Defina os parâmetros da sua oferta</h1>
      </div>
    </div>
    <div class="content text-weight-light text-body2">
      <div class="row q-pa-sm">
        <div class="col-12">
          <q-input class="text-center" rounded outlined v-model="text" label="Descrição da Oferta" ></q-input>
        </div>
      </div>
      <div class="row q-pa-sm q-pb-sm flex-center">
        <div class="col-11">
          <q-input class="text-center" rounded outlined v-model="text" label="Palavra-chave" ></q-input>
        </div>
        <div class="col-1">
          <q-btn class="button-write text-white" rounded label="+"></q-btn>
        </div>
      </div>
      <div class="q-pa-md">Validade da Oferta</div>
      <div class="row q-pa-md">
        <div class="col-6 q-pa-sm">
          <q-btn class="button-write font-wite text-caption q-pa-sm full-width" unelevated rounded label="Data inicial"></q-btn>
        </div>
        <div class="col-6 q-pa-sm">
          <q-btn class="button-write font-wite text-caption q-pa-sm full-width" unelevated rounded label="Data final"></q-btn>
        </div>
      </div>
      <div class="row q-pa-sm">
        <div class="col-12">
          <q-input class="text-center" rounded outlined v-model="text" label="Quantidade de Vouchers ofertados" ></q-input>
        </div>
      </div>
      <div class="row q-mt-xl flex-center">
        <div class="col-6 q-gutter-sm">
          <router-link class="text-decoration-none" to="/">
            <q-btn class="text-caption text-weight-light full-width q-pa-md" color="primary" unelevated rounded label="Cadastrar"></q-btn>
          </router-link>
        </div>
      </div>
    </div>
  </q-page>
</template>
<style>
    .q-field--rounded .q-field__control {text-align: center;}
    .button-write{background-color:#A7A7A7;font-weight: 100;color:#fff;}
</style>
<script>
export default {
  name: 'cadastro-ofertas'
}

</script>
