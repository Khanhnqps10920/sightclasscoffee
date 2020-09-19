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
      <p
        v-if="item.coffeeCategories"
        class="shop-item__description-category"
      >{{ getCategory(item.coffeeCategories).name }}</p>
      <h3 class="shop-item__description-name">{{ item.name.substr(0,23) }}</h3>
      <p class="shop-item__description-price">${{ item.price }}</p>
    </div>

    <button
      @click="handleAddToCart"
      v-b-toggle.sidebar-backdrop
      class="btn-add shop-item__item-btn d-block mx-auto"
    >Add to Bag</button>
  </div>
</template>

<script>
// libs
import { mapGetters, mapMutations } from "vuex";

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
    ...mapGetters("apis", ["getCategory"])
  },
  methods: {
    ...mapMutations("cart", ["ADD_ONE_TO_CART"]),

    handleAddToCart(e) {
      e.stopPropagation();
      this.ADD_ONE_TO_CART(this.item);
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