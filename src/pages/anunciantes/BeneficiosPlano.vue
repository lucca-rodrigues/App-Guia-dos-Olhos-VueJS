<template>
  <q-page padding>
    <div class="row voltar">
      <div class="col-10">
      </div>
      <div class="col-2">
        <q-list>
          <q-item-section avatar>
            <router-link class="decoration-none" to="/login">
              <q-icon class="q-ml-sm q-mt-md text-h5" name="arrow_back" />
            </router-link>
          </q-item-section>
        </q-list>
      </div>
    </div>
    <div class="content text-center q-mt-xl q-mb-xl">
        <div class="row">
          <div class="col-12">
            <h1 class="text-h6 text-weight-light">Confira o que está incluso neste plano</h1>
          </div>
        </div>
    </div>
        <div class="row flex-center">
          <div class="col-2 text-center">
            <img src="statics/icons/nomeEmpresa.svg" alt="Nome da Empresa">
          </div>
          <div class="col-10">
            <span class="beneficio">
              Nome da sua Empresa
            </span>
          </div>
        </div>
        <div class="row q-mt-lg q-mb-lg flex-center">
          <div class="col-2 text-center">
            <img src="statics/icons/endereco.svg" alt="Endereço">
          </div>
          <div class="col-10">
            <span class="beneficio">
              Endereço
            </span>
          </div>
        </div>
        <div class="row flex-center">
          <div class="col-2 text-center">
            <img src="statics/icons/sale.svg" alt="Ofertas">
          </div>
          <div class="col-10">
            <span class="beneficio">
              Ofertas
            </span>
          </div>
        </div>
        <div class="row q-mt-lg q-mb-lg flex-center">
          <div class="col-2 text-center">
            <img src="statics/icons/favorito.svg" alt="Favoritos">
          </div>
          <div class="col-10">
            <span class="beneficio">
              Possibilidade de ser marcado como <br>Favorito pelo usuário
            </span>
          </div>
        </div>
        <div class="row flex-center">
          <div class="col-2 text-center">
            <img src="statics/icons/anuncie.svg" alt="Anúncio em destaque ">
          </div>
          <div class="col-10">
            <span class="beneficio">
              Banner de Anúncio em Destaque
            </span>
          </div>
        </div>
        <div class="row q-pt-xl q-pb-xl">
          <div class="col-6 q-pa-sm">
            <router-link class="text-decoration-none" to="/quero-anunciar">
              <q-btn class="full-width text-body text-weight-light q-pa-sm button-write" unelevated rounded label="Voltar"></q-btn>
            </router-link>
          </div>
          <div class="col-6 q-pa-sm">
            <router-link class="text-decoration-none" to="/prazo-de-validade">
              <q-btn class="full-width text-body text-weight-light q-pa-sm" color="primary" unelevated rounded label="Avançar"></q-btn>
            </router-link>
          </div>
        </div>
  </q-page>
</template>
<style>
    .planos h3 {margin-bottom: 0px;}
    .voltar a {color:#707070}
    .beneficio{color:#399EA7!important;font-weight:700;font-size:17px}
    .button-write{background-color:#A7A7A7;font-weight: 100;}
</style>
<script>
export default {
  name: 'beneficios-do-plano'
}

</script>
