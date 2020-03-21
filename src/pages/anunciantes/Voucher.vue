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
    <div class="row">
      <div class="col-12 text-center title text-h6 text-weight-light">
          <p>Apresente este QR Code na recepção</p>
          <h1 class="title size-30">#1234 5678</h1>
      </div>
    </div>
    <div class="row text-center">
        <div class="col-12">
          <img class="logo" alt="Quasar logo" src="statics/imagens/QRcode.svg">
        </div>
      </div>
    <div class="content text-weight-light text-body2">
      <div class="row q-mt-xl">
        <div class="col-6"></div>
        <div class="col-6 q-pa-md">
          <router-link class="text-decoration-none" to="">
            <q-btn class="button-blue q-pa-sm" unelevated rounded label="Pronto!"></q-btn>
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
    .size-16{font-size:16px!important}
    .size-30{font-size:30px!important}
    .w-700{font-weight: 700!important;}
    .button-write{
      background-color:#A7A7A7;
      font-weight: 100;
    }
    .font-wite{color:#fff;}
</style>
<script>
export default {
  name: 'voucher'
}

</script>
