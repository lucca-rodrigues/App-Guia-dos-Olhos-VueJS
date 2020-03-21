<template>
  <q-page>
    <div class="row voltar">
      <div class="col-12">
        <q-list>
          <q-item-section avatar>
            <router-link class="decoration-none" to="/localizacao">
              <q-icon class="q-ml-sm q-mt-md text-h5 " name="arrow_back" />
            </router-link>
          </q-item-section>
        </q-list>
      </div>
    </div>
    <div class="row title text-center">
      <div class="col-12">
        <h1>OQUE VOCÊ PROCURA?</h1>
      </div>
    </div>
    <router-link class="text-decoration-none" to="/lista-empresas">
      <div class="filtro">
        <div class="row p-pa-none text-center">
          <div class="col-6">
            <img class="logo" alt="oticas" src="statics/imagens/oticas.jpg">
          </div>
          <div class="col-6">
            <img class="logo" alt="Oftamologistas" src="statics/imagens/oftalmologistas.jpg">
          </div>
        </div>
        <div class="row p-pa-none text-center">
          <div class="col-6">
            <img class="logo" alt="Clínicas" src="statics/imagens/clinicas.jpg">
          </div>
          <div class="col-6">
            <img class="logo" alt="Laboratórios" src="statics/imagens/laboratorios.jpg">
          </div>
        </div>
        <div class="row p-pa-none text-center">
          <div class="col-6">
            <img class="logo" alt="Hospitais" src="statics/imagens/hospitais.jpg">
          </div>
          <div class="col-6">
            <img class="logo" alt="Institutos" src="statics/imagens/institutos.jpg">
          </div>
        </div>
      </div>
    </router-link>
  </q-page>
</template>
<style>
    .button-blue{
      background-color:#399EA7;
      color:#fff;
      font-size:13px;
      font-weight:400;
      width:100%;
    }
    .button-write{
      background-color:#A7A7A7;
    }
    .font-wite{color:#fff;}
    .voltar a {color:#707070}
</style>
<script>
export default {
  name: 'pesquisar'
}

</script>
