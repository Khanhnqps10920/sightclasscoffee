<template>
  <div class="home page">
    <HeroSection :onMenuClick="handleMenuClick" :navbarActive="navbarActive" />
  </div>
</template>

<script>
// @ is an alias to /src
// components
import HeroSection from "@/components/Hero/Hero.vue";

// libs
import { mapMutations, mapState } from "vuex";

export default {
  name: "Home",

  components: {
    HeroSection
  },

  computed: {
    ...mapState("navbar", ["navbarActive"])
  },

  methods: {
    ...mapMutations("navbar", ["handleNavbarActive"]),

    handleMenuClick() {
      this.handleNavbarActive();
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
