<template>
  <section class="shop-hero text-center">
    <b-container fluid>
      <h1 class="shop-hero__title">Shop</h1>

      <ul class="shop-hero__categories d-flex justify-content-center">
        <div class="d-flex" v-if="!isCategory">
          <li class="shop-hero__categories-item" v-for="category in categories" :key="category.id">
            <a :href="`#${category.id}`" v-smooth-scroll>{{ category.name.toUpperCase() }}</a>
          </li>
        </div>

        <li class="shop-hero__categories-item" v-if="isCategory">
          <router-link to="/collection">All Items</router-link>
        </li>
      </ul>

      <div class="shop-hero__banner">
        <img src="../../assets/images/hero-banner.jpg" alt="hero-banner" class="img-fluid" />
      </div>
    </b-container>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    isCategory() {
      return this.$route.params.category ? true : false;
    },

    ...mapState("apis", ["categories"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";
.shop-hero {
  &__banner {
    margin: 3rem 0;

    img {
      object-position: center;
      object-fit: cover;
    }
  }

  &__title {
    font-size: 6rem;
    color: $base-color;
    font-weight: bold;
  }

  &__categories {
    &-item {
      margin: 0 2rem;

      a {
        color: $base-color;
        opacity: 0.5;
        text-decoration: underline;
        transition: 0.4s ease;
        font-size: 2rem;

        &:hover {
          opacity: 1;
        }
      }
    }
  }
}
</style>