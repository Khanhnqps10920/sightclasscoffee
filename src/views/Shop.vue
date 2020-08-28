<template>
  <div class="shop page" :class="{ transformY: navbarActive }">
    <b-container fluid>
      <NavbarInside :isShop="true" />
    </b-container>

    <ShopHero />

    <vue-page-transition name="fade-in-right">
      <router-view />
    </vue-page-transition>
  </div>
</template>

<script>
// components
import NavbarInside from "../components/Navbar/NavbarInside.vue";
import ShopHero from "../components/Hero/ShopHero.vue";

// libs
import { mapState } from "vuex";

export default {
  components: {
    NavbarInside,
    ShopHero
  },
  computed: {
    ...mapState("navbar", ["navbarActive"])
  }
};
</script>

<style>
</style>