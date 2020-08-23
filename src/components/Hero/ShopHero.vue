<template>
  <section class="shop-hero text-center">
    <b-container fluid>
      <h1 class="shop-hero__title">Shop</h1>

      <ul class="shop-hero__categories d-flex justify-content-center">
        <li class="shop-hero__categories-item">
          <a href="#firstSection" v-smooth-scroll>Coffee</a>
        </li>
        <li class="shop-hero__categories-item">
          <a href="#secondSection" v-smooth-scroll>Brewing Tools</a>
        </li>
        <li class="shop-hero__categories-item">
          <a href="#thirdSection" v-smooth-scroll>Goods</a>
        </li>
      </ul>

      <div class="shop-hero__banner">
        <img src="../../assets/images/hero-banner.jpg" alt="hero-banner" class="img-fluid" />
      </div>
    </b-container>
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