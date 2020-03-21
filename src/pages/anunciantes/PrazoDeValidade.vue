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
    <div class="content text-center">
        <div class="row q-mt-xl q-mb-xl">
          <div class="col-12">
            <h1 class="text-h6 text-weight-light">Selecione o prazo de validade</h1>
          </div>
        </div>
    </div>
    <div class="select">
          <q-btn class="text-body text-weight-light full-width q-pa-md button-write" unelevated rounded label="3 Meses: R$ 49,00"></q-btn>
          <q-btn class="text-body text-weight-light full-width q-pa-md button-write q-mt-md q-mb-md" unelevated rounded label="6 Meses: R$ 69,00"></q-btn>
          <q-btn class="text-body text-weight-light full-width q-pa-md button-write" unelevated rounded label="12 Meses: R$ 89,00"></q-btn>
    </div>
    <div class="row q-pt-xl q-pb-xl">
      <div class="col-6 q-pa-sm">
        <router-link class="text-decoration-none" to="/">
          <q-btn class="full-width text-body text-weight-light q-pa-sm button-write" unelevated rounded label="Voltar"></q-btn>
        </router-link>
      </div>
      <div class="col-6 q-pa-sm">
        <router-link class="text-decoration-none" to="/">
          <q-btn class="full-width text-body text-weight-light q-pa-sm" color="primary" unelevated rounded label="Contratar"></q-btn>
        </router-link>
      </div>
    </div>
  </q-page>
</template>
<style>
    .button-write{
      background-color:#A7A7A7;
      font-weight: 100;
      color:#fff;
    }
</style>
<script>
export default {
  name: 'prazo-de-validade'
}

</script>
