<template>
  <q-page padding class="bg-colored-blue">
    <div class="row voltar flex-center">
      <div class="col-1">
        <q-list>
          <q-item-section avatar>
            <router-link class="decoration-none" to="/login">
              <q-icon class="q-ml-sm q-mt-md text-h5 text-white" name="arrow_back" />
            </router-link>
          </q-item-section>
        </q-list>
      </div>
      <div class="col-11 text-center text-h6 text-white">
        Gerenciar Anúncios
      </div>
    </div>
    <div class="q-pt-xl q-pb-xl">
      <router-link class="decoration-none" to="/novo-anuncio">
          <div class="row flex-center">
            <div class="col-2 text-center">
              <q-icon name="favorite" />
            </div>
            <div class="col-10">
              <span class="beneficio">
                Novo Anúncio
              </span>
            </div>
          </div>
      </router-link>
        <div class="row flex-center q-mt-lg q-mb-lg">
          <div class="col-2 text-center">
            <q-icon name="local_offer" />
          </div>
          <div class="col-10">
            <span class="beneficio">
              Nova Oferta
            </span>
          </div>
        </div>
        <div class="row q-mt-lg q-mb-lg flex-center">
          <div class="col-2 text-center">
            <img class="logo" alt="Icone Anuncie" src="~assets/iconeAnuncie.svg">
          </div>
          <div class="col-10">
            <span class="beneficio">
              Nova Notificação
            </span>
          </div>
        </div>
    </div>
  </q-page>
</template>
<style>
    .planos h3 {margin-bottom: 0px;}
    .voltar a {color:#707070}
    .beneficio{color:#fff!important;font-size:17px;font-weight: 100;  }
    .button-write{background-color:#A7A7A7;font-weight: 100;}
    .bg-colored-blue {background: #399EA7;}
    i.material-icons.q-icon {color: #fff;font-size: 27px;}
</style>
<script>
export default {
  name: 'gerenciar-anuncios'
}

</script>
