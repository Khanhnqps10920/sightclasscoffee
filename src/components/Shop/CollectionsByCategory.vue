<template>
  <div class="collection-ctg">
    <b-container fluid>
      <h2 class="collection-ctg__name text-center">Collection Name</h2>
      <b-row>
        <!-- <b-col sm="3">
          <div
            v-b-toggle.filter-collapse
            class="collection-ctg__filter d-flex align-items-center justify-content-center"
          >
            <h3>filter Tools</h3>

            <b-icon icon="arrow-down-short"></b-icon>
          </div>

          <b-collapse id="filter-collapse">
            <ul class="collection-ctg__filter-list">
              <li class="collection-ctg__filter-list--item">Test</li>
              <li class="collection-ctg__filter-list--item">Test</li>
              <li class="collection-ctg__filter-list--item">Test</li>
            </ul>
          </b-collapse>
        </b-col>-->

        <b-col sm="12" md="12" lg="12">
          <b-row>
            <b-col sm="12" md="6" lg="3" v-for="product in products" :key="product.id">
              <ShopItem :item="product" />
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
// lib
import { mapGetters } from "vuex";

// component
import ShopItem from "./ShopItem.vue";

export default {
  components: {
    ShopItem
  },

  computed: {
    ...mapGetters("apis", ["getProductsByCategory"])
  },

  data() {
    return {
      products: []
    };
  },

  created() {
    this.products = this.getProductsByCategory(this.$route.params.category);
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.collection-ctg {
  #filter-collapse {
    transition: 0.4s ease;
  }
  &__name {
    margin: 3rem 0;
    font-size: 5rem;
    color: $base-color;
  }

  &__filter {
    border: 0.1rem solid $base-color;
    padding: 1rem 0;
    color: $base-color;
    font-size: 2rem;
    cursor: pointer;

    h3 {
      margin: 0 0.5rem;
      font-weight: bold;
      text-transform: uppercase;
    }

    svg {
      font-size: 3rem;
    }
  }

  &__filter-list {
    width: 100%;
    background: $base-color;
    color: $white-color;
    text-align: center;

    &--item {
      padding: 1.5rem;
      font-size: 1.6rem;
      font-weight: bold;
      letter-spacing: 0.3rem;
      cursor: pointer;
    }
  }
}
</style>