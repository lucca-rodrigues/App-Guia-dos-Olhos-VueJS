<template>
  <q-page padding>
    <div class="content perfil text-weight-light text-h5 text-center">
      <div class="row">
        <div class="col-12">
          <img class="q-pt-xl" alt="Ícone usuário" src="~assets/user.svg">
        </div>
      </div>
      <div class="row">
        <div class="col-12 link">
          <router-link class="text-decoration-none" to="/cadastro-anunciante"><span>Editar Perfil</span></router-link>
        </div>
        <div class="col-12">
          <h2>MEUS ANÚNCIOS</h2>
          <img src="statics/imagens/galeria.png" alt="Carousel com opções do usuário Aqui!!"> <!-- Aqui tem um carousel -->
        </div>
      </div>
      <div class="row dashboard flex-center">
        <div class="col-4">
          <h3>DASHBOARD</h3>
        </div>
        <div class="col-7">
          <router-link class="text-decoration-none" to="/quero-anunciar">
            <q-btn class="button-write font-wite" unelevated rounded label="Selecionar Período"></q-btn>
          </router-link>
        </div>
      </div>
      <div class="row status text-body2">
        <div class="col-7 text-left">
          <q-list>
            <q-item>
              <q-item-section>Visualizações: 3598</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Cliques WhatsApp: 1527</q-item-section>
            </q-item>
          </q-list>
        </div>
        <div class="col-5 text-right">
          <q-list>
            <q-item>
              <q-item-section>Ligações: 590</q-item-section>
            </q-item>
            <q-item>
              <q-item-section>Favoritos: 457</q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
  <router-link class="text-decoration-none" to="/gerenciar-anuncios">
    <q-footer class="text-center q-pa-md" elevated>
      <q-toolbar>
        <q-toolbar-title class="text-weight-thin">Gerenciar Anúncios</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </router-link>
  </q-page>
</template>
<style>
  .perfil h1, h2, h3{
    font-size:16px;
    font-weight: 700;
    color:#399EA7;
    }
    .button-write{
      background-color:#A7A7A7;
      font-weight: 100;
      text-transform: unset;
      width: 100%;
    }
    .link a{color:#707070;}
    .font-wite{color:#fff;}
</style>
<script>
export default {
  name: 'perfil'
}

</script>
