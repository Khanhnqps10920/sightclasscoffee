<template>
  <div class="product page" :class="{ transformY: navbarActive }">
    <b-container fluid>
      <NavbarInside :isShop="true" />

      <b-row>
        <b-col class="product__left-side" sm="6">
          <div class="product__inner">
            <img src="@/assets/images/product.webp" alt="product-img" />
          </div>
        </b-col>
        <b-col class="product__right-side" sm="6"></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import NavbarInside from "../components/Navbar/NavbarInside.vue";

// libs
import { mapState } from "vuex";

export default {
  components: {
    NavbarInside
  },
  computed: {
    ...mapState("navbar", ["navbarActive"])
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable.scss";

.product {
  &__left-side {
    position: relative;
    background: #eceae7;
  }

  &__inner {
    z-index: 0;
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    img {
      max-width: 70%;
      max-height: 100%;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  &__right-side {
    background: #413121;
    height: 1400px;
  }
}
</style>