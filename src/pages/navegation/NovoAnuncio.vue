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
      <div class="col-12 text-center text-weight-light   ">
          <h1 class="text-weight-light text-h6">Crie seu anúncio</h1>
      </div>
    </div>
    <div class="content text-weight-light text-body2">
      <div class="row q-pa-sm">
        <div class="col-12 text-center">
          <q-input class="text-center" rounded outlined v-model="text" label="Descrição do Anúncio" ></q-input>
        </div>
      </div>
      <div class="row q-pa-sm q-pb-xl flex-center">
        <div class="col-11">
          <q-input class="text-center" rounded outlined v-model="text" label="Palavra-chave" ></q-input>
        </div>
        <div class="col-1">
          <q-btn class="button-write text-white" rounded label="+"></q-btn>
        </div>
      </div>
      <div class="row">
        <div class="col-6"></div>
        <div class="col-6"></div>
      </div>
      <div class="row">
        <div class="col-12">
            <q-btn class="text-body text-weight-light full-width q-pa-sm button-write text-white" unelevated rounded label="Enviar imagem"></q-btn>
        </div>
      </div>
      <div class="row q-mt-xl flex-center">
        <div class="col-6 q-gutter-sm">
          <router-link class="text-decoration-none" to="/ofertas">
            <q-btn class="text-caption text-weight-light full-width q-pa-md" color="primary" unelevated rounded label="Cadastrar"></q-btn>
          </router-link>
        </div>
      </div>
    </div>
  </q-page>
</template>
<style>
    .button-write{background-color:#A7A7A7;font-weight: 100;}
    .q-field__control-container{text-align: center!important;}
</style>
<script>
export default {
  name: 'novo-anuncio'
}

</script>
