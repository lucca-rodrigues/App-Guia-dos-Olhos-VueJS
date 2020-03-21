<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar id="menu" v-if="mostrarMenu=true">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title class="text-center">
          GUIA DOS OLHOS
        </q-toolbar-title>

        <div></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label header>
          <q-item-section>
            <q-item-label>Guia dos Olhos</q-item-label>
          </q-item-section>
        </q-item-label>
        <q-item>
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>
            <router-link class="decoration-none" to="/">
              <q-item-label>Voltar ao início</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>
          <q-item-section>
            <router-link class="decoration-none" to="/favoritos">
              <q-item-label>Favoritos</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="local_offer" />
          </q-item-section>
          <q-item-section>
            <router-link class="decoration-none" to="/ofertas">
              <q-item-label>Ofertas e Notificações</q-item-label>
            </router-link>
          </q-item-section>
        </q-item>
        <div class="border">
          <div class="line"></div>
        </div>
        <q-item>
            <q-item-section avatar>
              <img class="logo" alt="Icone Anuncie" src="~assets/iconeAnuncie.svg">
            </q-item-section>
            <q-item-section>
              <router-link class="decoration-none" to="/quero-anunciar">
                <q-item-label>Quero Anunciar</q-item-label>
              </router-link>
            </q-item-section>
          </q-item>
        <q-item>
          <q-item-section avatar>
            <img class="logo" alt="Icone Anunciante" src="~assets/iconeSouAnunciante.svg">
          </q-item-section>
          <q-item-section>
              <router-link class="decoration-none" to="/login">
                <q-item-label>Sou Anunciante</q-item-label>
              </router-link>
          </q-item-section>
        </q-item>
      </q-list>
      <div class="row content-end">
        <div class="col-12">
          <q-list class="q-pt-xl">
            <q-item>
              <q-item-section avatar>
                <img class="logo" alt="Icone Anunciante" src="~assets/PoliticaDePrivacidade.svg">
              </q-item-section>
              <q-item-section>
                <q-item-label>Políticas e Termos de Uso</q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </div>
      </div>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MyLayout',
  data () {
    return {
      leftDrawerOpen: false,
      mostrarMenu: false
    }
  }
}
</script>
<style>
  .bg-grey-2 {background-color: #399EA7!important;color: #fff;}
  .q-drawer--left.q-drawer--bordered {border-right: none;}
  .line{background-color:#fff;width:90%;height:1px;margin:0 auto;}
  .border{margin: 20px 0;}
  .q-layout.q-layout--standard {font-weight: 300;}
  .q-item__label--header {color: #fff;}
  .decoration-none{text-decoration: none;}
  a{color: #fff;}
</style>
