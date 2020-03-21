<template>
  <q-page padding>
    <div class="row voltar">
      <div class="col-10">
      </div>
      <div class="col-2">
        <q-list>
          <q-item-section avatar>
            <router-link class="decoration-none" to="/favoritos">
              <q-icon class="q-ml-sm q-mt-md text-h5" name="arrow_back" />
            </router-link>
          </q-item-section>
        </q-list>
      </div>
    </div>
    <div class="content pagina-ofertas text-center">
        <div class="row q-mt-xl q-mb-xl">
          <div class="col-12">
            <h1 class="text-h6 text-weight-light">Escolha a oferta a ser anunciada</h1>
          </div>
        </div>
        <q-card class="my-card q-mb-lg">
          <q-card-section>
              <div class="row flex-center">
                <div class="col-5 text-left">
                  <q-list class="text-left">
                    <q-item>
                      <q-item-section><h3>Oferta XPTO</h3></q-item-section>
                    </q-item>
                  </q-list>
                </div>
                <div class="col-7">
                  <q-btn class="text-weight-thin full-width em-uso" unelevated rounded label="Em Uso"></q-btn>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <q-list class="text-left">
                    <q-item>
                      <q-item-section>Empresa</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>Validade: 00/00/00</q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
          </q-card-section>
        </q-card>
        <q-card class="my-card q-mb-lg">
          <q-card-section>
              <div class="row flex-center">
                <div class="col-5 text-left">
                  <q-list class="text-left">
                    <q-item>
                      <q-item-section><h3>Oferta XPTO</h3></q-item-section>
                    </q-item>
                  </q-list>
                </div>
                <div class="col-7">
                  <q-btn class="text-weight-thin full-width" color="primary" unelevated rounded label="Usar oferta"></q-btn>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <q-list class="text-left">
                    <q-item>
                      <q-item-section>Empresa</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>Validade: 00/00/00</q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
          </q-card-section>
        </q-card>
        <q-card class="my-card q-mb-lg">
          <q-card-section>
              <div class="row flex-center">
                <div class="col-5 text-left">
                  <q-list class="text-left">
                    <q-item>
                      <q-item-section><h3>Oferta XPTO</h3></q-item-section>
                    </q-item>
                  </q-list>
                </div>
                <div class="col-7">
                  <q-btn class="text-weight-thin full-width" color="primary" unelevated rounded label="Usar oferta"></q-btn>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <q-list class="text-left">
                    <q-item>
                      <q-item-section>Empresa</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>Validade: 00/00/00</q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
          </q-card-section>
        </q-card>
           <q-card class="my-card q-mb-lg">
          <q-card-section>
              <div class="row flex-center">
                <div class="col-5 text-left">
                  <q-list class="text-left">
                    <q-item>
                      <q-item-section><h3>Oferta XPTO</h3></q-item-section>
                    </q-item>
                  </q-list>
                </div>
                <div class="col-7">
                  <q-btn class="text-weight-thin full-width" color="primary" unelevated rounded label="Usar oferta"></q-btn>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <q-list class="text-left">
                    <q-item>
                      <q-item-section>Empresa</q-item-section>
                    </q-item>
                    <q-item>
                      <q-item-section>Validade: 00/00/00</q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </div>
          </q-card-section>
        </q-card>
    </div>
    <div>
      <router-link class="text-decoration-none" to="/cadastro-ofertas">
          <q-btn class="text-caption text-weight-light full-width q-pa-md" color="primary" unelevated rounded label="Cadastrar Oferta"></q-btn>
        </router-link>
    </div>
  </q-page>
</template>
<style>
    .my-card h3{font-size:14px;font-weight: 700;color:#399EA7;}
    .pagina-ofertas .q-item {min-height: 31px;padding: 0;}
    .em-uso{background:#F5B727;color:#fff;}
</style>
<script>
export default {
  name: 'ofertas'
}

</script>
