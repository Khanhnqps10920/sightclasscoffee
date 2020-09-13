<template>
  <div class="collections">
    <b-container fluid>
      <CategorySection :id="'firstSection'" title="Coffee" :items="[...products].splice(0,6)" />

      <section class="collections__subcribe">
        <b-row>
          <b-col cols="12" sm="12" md="9" lg="9">
            <div class="collections__subcribe-img">
              <img
                src="https://cdn.shopify.com/s/files/1/0027/5382/2835/files/sub_hero_homepage.png?v=1561656656"
                alt="subcribe"
                class="img-fluid"
              />
            </div>
          </b-col>
          <b-col cols="12" sm="12" md="3" lg="3">
            <div class="collections__subcribe-info text-center">
              <h3 class="collections__subcribe-info--title">Subcribe</h3>
              <hr />
              <p class="collections__subcribe-info--description">
                Delicious coffee
                <br />delivered to your door.
              </p>
              <b-link to="/subcribe">Subcribe</b-link>
            </div>
          </b-col>
        </b-row>
      </section>

      <CategorySection
        :id="'secondSection'"
        :whiteMode="true"
        :items="products"
        title="Brewing tools"
      />

      <CategorySection :id="'thirdSection'" title="goods" :items="products" />
    </b-container>

    <!-- subcribe sectio  -->
  </div>
</template>

<script>
import { mapState } from "vuex";

import CategorySection from "../Section/CategorySection.vue";
export default {
  components: {
    CategorySection
  },
  computed: {
    ...mapState("apis", ["products"])
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.collections {
  &__subcribe {
    &-info {
      background: $base-color;
      height: 100%;
      color: $white-color;

      &--title {
        font-size: 5rem;
        padding: 1rem 0;
      }

      hr {
        margin-bottom: 2rem;
        margin-top: 0;
        border-top: 2px solid $white-color;
      }

      &--description {
        margin-top: 6rem;
        font-size: 2rem;
      }

      a {
        color: $base-color;
        padding: 1rem 6rem;
        background: $white-color;
        margin-top: 3rem;
        display: inline-block;
        transition: 0.4s ease;
        &:hover {
          text-decoration: none;
          border: 0.1rem solid $white-color;
          background: $base-color;
          color: $white-color;
        }
      }
    }
  }
}
</style>