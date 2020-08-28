<template>
  <section class="shop-hero text-center">
    <b-container fluid>
      <h1 class="shop-hero__title">Shop</h1>

      <ul class="shop-hero__categories d-flex justify-content-center">
        <li class="shop-hero__categories-item" v-if="!isCategory">
          <a href="#firstSection" v-smooth-scroll>Coffee</a>
        </li>
        <li class="shop-hero__categories-item" v-if="!isCategory">
          <a href="#secondSection" v-smooth-scroll>Brewing Tools</a>
        </li>
        <li class="shop-hero__categories-item" v-if="!isCategory">
          <a href="#thirdSection" v-smooth-scroll>Goods</a>
        </li>

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
export default {
  computed: {
    isCategory() {
      return this.$route.params.category ? true : false;
    }
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