<template>
    <q-page class="flex flex-center content-home">
      <router-link class="text-decoration-none" to="/localizacao"><img class="logo" alt="Quasar logo" src="~assets/logo.svg"></router-link>
    </q-page>
</template>
<style>
  .content-home {background-image: linear-gradient(to bottom right, #53A4AB, #4AA781,#42A860);}
</style>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      leftDrawerOpen: false,
      mostrarMenu: false
    }
  }
}

</script>
