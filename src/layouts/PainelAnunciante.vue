<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
        >
          <q-icon name="menu" />
        </q-btn>

        <q-toolbar-title>
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
            <q-item-label>GERENCIAR ANÚNCIOS</q-item-label>
          </q-item-section>
        </q-item-label>
        <q-item>
          <q-item-section avatar>
            <q-icon name="favorite" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Novo Anúncio</q-item-label>
          </q-item-section>
        </q-item>
        <q-item>
          <q-item-section avatar>
            <q-icon name="local_offer" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Nova Oferta</q-item-label>
          </q-item-section>
        </q-item>
        <div class="border">
          <div class="line"></div>
        </div>
        <q-item>
          <q-item-section avatar>
            <img class="logo" alt="Quasar logo" src="~assets/iconeAnuncie.svg">
          </q-item-section>
          <q-item-section>
            <q-item-label>Nova Notificação</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MenuAnunciante',
  data () {
    return {
      leftDrawerOpen: false
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
</style>
