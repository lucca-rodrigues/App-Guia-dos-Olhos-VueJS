<template>
  <q-page padding>
    <div class="content-lista-empresas">
        <div class="row q-pa-sm text-center">
          <div class="col-12">
              <q-input rounded outlined v-model="text" label="Pesquisar">
                  <template v-slot:append>
                    <q-icon name="search" />
                  </template>
              </q-input>
          </div>
        </div>
        <div></div>
        <div class="row q-pa-sm q-mt-sm"> <!-- Row -->
          <div class="col-12">
            <q-card class="my-card">
              <q-card-section>
                <div class="row"> <!-- Row Card Item -->
                  <div class="col-7"> <!-- Colun Card Left -->
                  <div class="row"> <!-- row -->
                    <div class="col-5">
                      <img class="logo" alt="Logo Anunciante" src="statics/imagens/logoGdO.png">
                    </div>
                    <div class="col-7">
                      <h3 class="text-weight-bold text-subtitle2">Nome Empresa</h3>
                      <p class="endereco">Endereço</p>
                    </div>
                  </div> <!-- End row -->
                  <div class="row">
                    <div class="col-12">
                        <router-link to="/ofertas">
                          <q-btn class="button-blue full-width" color="primary" unelevated rounded label="Ofertas"/>
                        </router-link>
                    </div>
                  </div>
                  </div> <!-- End Colun Card Left -->
                  <div class="col-5 text-right text-weight-medium "> <!-- Colun Card Right -->
                    <div class="row">
                      <div class="col-12 teal">
                      <h3 class="text-weight-bold text-subtitle2">99 9999-9999</h3>
                      </div>
                      <div class="col-12 text-right">
                        <div class="q-gutter-y-md column">
                          <q-rating
                            v-model="ratingModel"
                            size="17px"
                            color="warning"
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                    <div class="row icons">
                      <div class="col-12">
                        <q-list>
                          <q-item>
                            <q-item-section avatar>
                              <q-btn flat round dense icon="favorite" />
                            </q-item-section>
                            <q-item-section avatar>
                              <q-btn flat round dense icon="call" />
                            </q-item-section>
                            <q-item-section avatar>
                              <q-btn flat round dense><img alt="Ícone Localização" src="~assets/Local.svg"></q-btn>
                            </q-item-section>
                            <q-item-section avatar>
                              <q-btn flat round dense><img alt="Ícone Whatsapp" src="~assets/WhatsApp.svg"></q-btn>
                            </q-item-section>
                          </q-item>
                        </q-list>
                      </div>
                    </div>
                  </div> <!-- End Colun Card Right -->
                </div> <!-- End Row Card Item -->
              </q-card-section>
            </q-card>
          </div>
        </div> <!-- End Row -->
        <div class="row q-pa-sm q-mt-sm"> <!-- Row Empresa-->
          <div class="col-12">
            <q-card class="my-card">
              <q-card-section>
                <div class="row"> <!-- Row Card Item -->
                  <div class="col-7"> <!-- Colun Card Left -->
                  <div class="row"> <!-- row -->
                    <div class="col-5">
                      <img class="logo" alt="Logo Anunciante" src="statics/imagens/logoGdO.png">
                    </div>
                    <div class="col-7">
                      <h3 class="text-weight-bold text-subtitle2">Nome Empresa</h3>
                      <p class="endereco">Endereço</p>
                    </div>
                  </div> <!-- End row -->
                  </div> <!-- End Colun Card Left -->
                  <div class="col-5 text-right text-weight-medium "> <!-- Colun Card Right -->
                    <div class="row">
                      <div class="col-12 teal">
                      <h3 class="text-weight-bold text-subtitle2">99 9999-9999</h3>
                      </div>
                      <div class="col-12 text-right">
                        <div class="q-gutter-y-md column">
                          <q-rating
                            v-model="ratingModel"
                            size="17px"
                            color="warning"
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                  </div> <!-- End Colun Card Right -->
                </div> <!-- End Row Card Item -->
              </q-card-section>
            </q-card>
          </div>
        </div> <!-- End Row Empresa-->
        <div class="row q-pa-sm q-mt-sm"> <!-- Row Empresa-->
          <div class="col-12">
            <q-card class="my-card">
              <q-card-section>
                <div class="row"> <!-- Row Card Item -->
                  <div class="col-7"> <!-- Colun Card Left -->
                  <div class="row"> <!-- row -->
                    <div class="col-5">
                      <img class="logo" alt="Logo Anunciante" src="statics/imagens/logoGdO.png">
                    </div>
                    <div class="col-7">
                      <h3 class="text-weight-bold text-subtitle2">Nome Empresa</h3>
                      <p class="endereco">Endereço</p>
                    </div>
                  </div> <!-- End row -->
                  </div> <!-- End Colun Card Left -->
                  <div class="col-5 text-right text-weight-medium "> <!-- Colun Card Right -->
                    <div class="row">
                      <div class="col-12 teal">
                      <h3 class="text-weight-bold text-subtitle2">99 9999-9999</h3>
                      </div>
                      <div class="col-12 text-right">
                        <div class="q-gutter-y-md column">
                          <q-rating
                            v-model="ratingModel"
                            size="17px"
                            color="warning"
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                  </div> <!-- End Colun Card Right -->
                </div> <!-- End Row Card Item -->
              </q-card-section>
            </q-card>
          </div>
        </div> <!-- End Row Empresa-->
        <div class="row q-pa-sm q-mt-sm"> <!-- Row Empresa-->
          <div class="col-12">
            <q-card class="my-card">
              <q-card-section>
                <div class="row"> <!-- Row Card Item -->
                  <div class="col-7"> <!-- Colun Card Left -->
                  <div class="row"> <!-- row -->
                    <div class="col-5">
                      <img class="logo" alt="Logo Anunciante" src="statics/imagens/logoGdO.png">
                    </div>
                    <div class="col-7">
                      <h3 class="text-weight-bold text-subtitle2">Nome Empresa</h3>
                      <p class="endereco">Endereço</p>
                    </div>
                  </div> <!-- End row -->
                  </div> <!-- End Colun Card Left -->
                  <div class="col-5 text-right text-weight-medium "> <!-- Colun Card Right -->
                    <div class="row">
                      <div class="col-12 teal">
                      <h3 class="text-weight-bold text-subtitle2">99 9999-9999</h3>
                      </div>
                      <div class="col-12 text-right">
                        <div class="q-gutter-y-md column">
                          <q-rating
                            v-model="ratingModel"
                            size="17px"
                            color="warning"
                            readonly
                          />
                        </div>
                      </div>
                    </div>
                  </div> <!-- End Colun Card Right -->
                </div> <!-- End Row Card Item -->
              </q-card-section>
            </q-card>
          </div>
        </div> <!-- End Row Empresa-->
    </div>
  </q-page>
</template>
<style>
.icons{color:#5EA2D9;}
.icons .q-item__section--avatar {width: 30px!important;}
.q-item__section--avatar {min-width: 30px;}
.endereco{margin-top:-15px;font-size:18px;}
.content-lista-empresas h3{color:#399EA7;margin-bottom: 15px;}
.q-gutter-y-md.column {float: right;}
</style>
<script>
export default {
  name: 'lista-empresas'
}

</script>
