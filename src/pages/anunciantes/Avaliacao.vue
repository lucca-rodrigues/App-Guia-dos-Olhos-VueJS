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
          <p>Como foi sua experiência com a empresa?</p>
      </div>
    </div>
    <div class="row q-pa-sm q-mt-sm"> <!-- Row -->
          <div class="col-12">
            <q-card class="my-card">
              <q-card-section>
                <div class="row">
                  <div class="col-12">
                    <div class="row">
                      <div class="col-5">
                        <img class="logo" alt="Logo Anunciante" src="statics/imagens/logoGdO.png">
                      </div>
                      <div class="col-7 title">
                        <h1 class="text-weight-bold text-subtitle2">Nome Empresa</h1>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5"></div>
                      <div class="col-7 text-right">
                        <div class="q-gutter-y-md column">
                          <q-rating
                            v-model="ratingModel"
                            size="30px"
                            color="warning"
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </q-card-section>
            </q-card>
          </div>
        </div>
    <div class="content text-weight-light text-body2">
      <div class="row q-mt-xl">
        <div class="col-6"></div>
        <div class="col-6 q-pa-md">
          <router-link class="text-decoration-none" to="/login-usuario">
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
    .button-write{
      background-color:#A7A7A7;
      font-weight: 100;
      width:100%
    }
    .font-wite{color:#fff;}
</style>
<script>
export default {
  name: 'avaliacao'
}

</script>
