<template>
  <div class="new-arrival">
    <b-row>
      <!-- <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <ShopItem />
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <ShopItem />
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <ShopItem />
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <ShopItem />
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <ShopItem />
      </b-col>-->
      <b-col
        cols="12"
        sm="12"
        md="6"
        lg="4"
        xl="4"
        v-for="product in newArrivals"
        :key="product.id"
      >
        <ShopItem :item="product" />
      </b-col>

      <b-link class="new-arrival__visit text-center" to="/collection">Visit The Shop</b-link>
    </b-row>
  </div>
</template>

<script>
// libs
import { mapState } from "vuex";

// components
import ShopItem from "../Shop/ShopItem.vue";

export default {
  components: {
    ShopItem
  },
  computed: {
    ...mapState("apis", ["products"]),

    newArrivals() {
      let newArrivals = this.products ? [...this.products].splice(0, 6) : [];

      return newArrivals;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.new-arrival {
  &__visit {
    width: 100%;
    padding: 1rem;
    border: 0.1rem solid $base-color;
    color: $base-color;
    font-weight: bold;
    transition: 0.4s ease;

    &:hover {
      text-decoration: none;
      background-color: $base-color;
      color: $white-color;
    }
  }
}
</style>