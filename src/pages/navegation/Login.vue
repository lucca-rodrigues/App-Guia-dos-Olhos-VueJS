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
      <div class="col-12 text-center title">
          <h1>SOU ANUNCIANTE</h1>
      </div>
    </div>
    <div class="content text-weight-light text-body2">
      <div class="row q-pa-sm">
        <div class="col-12">
          <q-input class="text-center" rounded outlined v-model="text" label="Login" ></q-input>
        </div>
      </div>
      <div class="row q-pa-sm q-pb-xl">
        <div class="col-12">
          <q-input class="text-center" rounded outlined v-model="text" label="Senha" ></q-input>
        </div>
      </div>
      <div class="row q-mt-xl">
        <div class="col-6">
          <q-btn class="button-write font-wite text-caption q-pa-sm" unelevated rounded label="Esqueci minha Senha"></q-btn>
        </div>
        <div class="col-6">
          <router-link class="text-decoration-none" to="/perfil">
            <q-btn class="button-blue q-pa-sm" unelevated rounded label="Avançar"></q-btn>
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
    }
    .font-wite{color:#fff;}
</style>
<script>
export default {
  name: 'login'
}

</script>
