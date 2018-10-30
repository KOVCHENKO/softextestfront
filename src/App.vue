<template>
  <div id="app">
    <notifications></notifications>

    <main-header></main-header>
    <router-view/>
  </div>
</template>

<script>

import Header from '@/components/Header.vue'

export default {
  name: 'App',
  components: {
    mainHeader: Header
  }
}

</script>

<style lang="scss">
  @import '../node_modules/bootstrap/scss/bootstrap.scss';
</style>
