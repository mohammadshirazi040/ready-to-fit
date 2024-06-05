<template>
  <NavBar />
  <NavDesktop />
  <router-link to="/"></router-link>
  <router-view />
  <FooterComp />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import FooterComp from '@/components/FooterComp.vue'
import NavDesktop from '@/components/NavDesktop.vue'

export default {
  components: {
    NavBar,
    FooterComp,
    NavDesktop
  }
}
</script>

<style></style>
