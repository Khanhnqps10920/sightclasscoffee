<template>
  <section class="category" :class="{ brown: whiteMode }">
    <div class="category__info d-flex justify-content-between align-items-center">
      <h3 class="category__info-title">Title</h3>

      <router-link class="category__info-link" to="/collection/ssss">Watch More</router-link>
    </div>
    <b-row class="category__items">
      <b-col cols="12" sm="12" md="6" lg="4">
        <ShopItem :whiteMode="whiteMode" />
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4">
        <ShopItem :whiteMode="whiteMode" />
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4">
        <ShopItem :whiteMode="whiteMode" />
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4">
        <ShopItem :whiteMode="whiteMode" />
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4">
        <ShopItem :whiteMode="whiteMode" />
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4">
        <ShopItem :whiteMode="whiteMode" />
      </b-col>
    </b-row>
  </section>
</template> 

<script>
import ShopItem from "../Shop/ShopItem.vue";

export default {
  components: {
    ShopItem
  },

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

.category {
  margin: 5rem 0;
  // padding: 2rem 0;

  &.brown {
    background-color: #f7f7f5;
  }

  &__info {
    &-title {
      font-size: 5rem;
      color: $base-color;
    }

    &-link {
      color: $base-color;
      padding: 0.5rem 2rem;
      border: 0.1rem solid $base-color;
      transition: 0.4s ease;

      &:hover {
        background: $base-color;
        color: $white-color;
        text-decoration: none;
      }
    }
  }
}
</style>