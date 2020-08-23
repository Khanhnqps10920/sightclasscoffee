<template>
  <div class="shop-item" :class="{ white: whiteMode }">
    <b-link class="shop-item__item-image">
      <img class="img-fluid" src="@/assets/images/product.webp" alt="product-img" />
    </b-link>
    <div class="shop-item__description text-center">
      <p class="shop-item__description-category">Espresso</p>
      <h3 class="shop-item__description-name">Owl' Howl</h3>
      <p class="shop-item__description-price">$18.00</p>
    </div>

    <button class="btn-add shop-item__item-btn d-block mx-auto">Add to Bag</button>
  </div>
</template>

<script>
export default {
  props: {
    whiteMode: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.shop-item {
  background-color: #f7f7f5;
  padding: 1.5rem;
  margin-bottom: 2rem;

  &.white {
    background-color: $white-color;
  }

  &__description {
    margin: 2rem 0;

    &-category {
      font-weight: bold;
      font-size: 1.6rem;
      text-decoration: underline;
      text-transform: uppercase;
      color: $base-color;
    }

    &-name {
      font-size: 2.5rem;
      margin: 1rem 0;
      font-weight: bold;
      color: $base-color;
    }

    &-price {
      font-size: 2rem;
      letter-spacing: 0.2rem;
    }
  }
}
</style>