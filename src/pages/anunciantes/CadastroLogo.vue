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
          <p>Insira o logotipo ou foto da sua empresa</p>
      </div>
    </div>
    <div class="content text-weight-light text-body2">
      <div class="row q-pa-sm q-pb-xl">
        <div class="col-12">
          <q-btn class="button-blue q-pa-md" type="file" unelevated rounded label="Enviar imagem"></q-btn>
        </div>
      </div>
      <div class="row q-mt-xl">
        <div class="col-6">
       </div>
        <div class="col-6">
          <router-link class="text-decoration-none" to="/cadastro-contato-anunciante">
            <q-btn class="button-blue q-pa-sm" unelevated rounded label="Avançar"></q-btn>
          </router-link>
        </div>
      </div>
    </div>
  </q-page>
</template>
<style>
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
    }
    .font-wite{color:#fff;}
</style>
<script>
export default {
  name: 'cadastro-logo-anunciante'
}

</script>
