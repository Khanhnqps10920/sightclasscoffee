<template>
  <div class="home page">
    <HeroSection :onMenuClick="handleMenuClick" :navbarActive="navbarActive" />

    <!-- section -->
    <Section title="New Arrivals">
      <NewArrivals />
    </Section>
  </div>
</template>

<script>
// @ is an alias to /src
// components
import HeroSection from "@/components/Hero/Hero.vue";
import Section from "@/components/Section/Section.vue";
import NewArrivals from "../components/NewArrivals/NewArrivals.vue";

// libs
import { mapMutations, mapState } from "vuex";

export default {
  name: "Home",

  components: {
    HeroSection,
    Section,
    NewArrivals
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
