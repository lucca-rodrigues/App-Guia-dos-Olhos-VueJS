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
    <div class="content text-center">
        <div class="row q-mt-xl">
          <div class="col-12">
            <h1 class="text-h6 text-weight-light">Escolha a plano que melhor atende suas necessidades e cadastre-se</h1>
          </div>
        </div>
        <div class="row planos q-mt-xl q-pa-lg">
          <router-link class="decoration-none" to="beneficios-do-plano">
            <div class="col-12 bg-blue-1 text-primary q-pt-sm q-pb-sm q-mb-md">
              <h3 class="text-h5 text-weight-bold">Plano Gratuito</h3>
              <p>
                Apresenta nome, endereço e telefone da sua Empresa
              </p>
            </div>
          </router-link>
          <router-link class="decoration-none" to="beneficios-do-plano">
            <div class="col-12 bg-blue-3 text-white q-pt-sm q-pb-sm q-mb-md">
              <h3 class="text-h5 text-weight-bold text-white">Plano Azul</h3>
              <p>
                Apresenta nome da sua Empresa, endereço, ofertas e possibilidade de ser marcado como Favorito pelo usuário
              </p>
            </div>
          </router-link>
          <router-link class="decoration-none" to="beneficios-do-plano">
            <div class="col-12 bg-blue-4 text-white q-pt-sm q-pb-sm q-mb-md">
              <h3 class="text-h5 text-weight-bold text-white">Plano Verde</h3>
              <p>
                Apresenta seu Banner de Anúncio em destaque
              </p>
            </div>
          </router-link>
          <router-link class="decoration-none" to="beneficios-do-plano">
            <div class="col-12 bg-primary text-white q-pt-sm q-pb-sm q-mb-md">
              <h3 class="text-h5 text-weight-bold text-white">Plano Black</h3>
              <p>
                Apresenta nome da sua Empresa, endereço, ofertas, possibilidade de ser marcado como Favorito pelo usuário e Banner de Anúncio em destaque
              </p>
            </div>
          </router-link>
      </div>
    </div>
  </q-page>
</template>
<style>
    .planos h3 {margin-bottom: 0px;}
    .voltar a {color:#707070}
</style>
<script>
export default {
  name: 'quero-anunciar'
}

</script>
