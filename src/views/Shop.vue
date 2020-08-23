<template>
  <div class="shop page">
    <b-container fluid>
      <NavbarInside :isShop="true" />
    </b-container>

    <ShopHero />

    <router-view />
  </div>
</template>

<script>
// components
import NavbarInside from "../components/Navbar/NavbarInside.vue";
import ShopHero from "../components/Hero/ShopHero.vue";

export default {
  components: {
    NavbarInside,
    ShopHero
  }
};
</script>

<style>
</style>