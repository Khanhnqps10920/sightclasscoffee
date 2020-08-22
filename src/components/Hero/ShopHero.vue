<template>
  <section class="shop-hero text-center">
    <h1 class="shop-hero__title">Shop</h1>

    <ul class="shop-hero__categories d-flex justify-content-center">
      <li class="shop-hero__categories-item">
        <router-link to="/coffee">All</router-link>
      </li>
      <li class="shop-hero__categories-item">
        <router-link to="/coffee">Coffee</router-link>
      </li>
      <li class="shop-hero__categories-item">
        <router-link to="/brewing-tools">Brewing Tools</router-link>
      </li>
      <li class="shop-hero__categories-item">
        <router-link to="/goods">Goods</router-link>
      </li>
    </ul>

    <div class="shop-hero__banner">
      <img src="../../assets/images/hero-banner.jpg" alt="hero-banner" class="img-fluid" />
    </div>
  </section>
</template>

<script>
export default {};
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