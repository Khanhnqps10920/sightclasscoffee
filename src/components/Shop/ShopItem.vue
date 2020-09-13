<template>
  <div
    class="shop-item"
    :class="{ white: whiteMode }"
    @click="$router.push({name: 'product', params: {slug: item.id}})"
  >
    <b-link class="shop-item__item-image">
      <img class="img-fluid" :src="item.imgUrl" alt="product-img" />
    </b-link>
    <div class="shop-item__description text-center">
      <p class="shop-item__description-category">{{ category }}</p>
      <h3 class="shop-item__description-name">{{ item.name.substr(0,23) }}</h3>
      <p class="shop-item__description-price">${{ item.price }}</p>
    </div>

    <button class="btn-add shop-item__item-btn d-block mx-auto">Add to Bag</button>
  </div>
</template>

<script>
// libs
import { mapState } from "vuex";

export default {
  props: {
    whiteMode: {
      type: Boolean,
      default: false
    },
    item: {
      type: Object,
      required: true
    }
  },

  computed: {
    ...mapState("apis", ["coffeeCategories"]),

    category() {
      if (this.item) {
        const category = this.coffeeCategories.find(
          category => category.id === this.item.coffeeCategories
        );

        return category.name;
      }

      return "";
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