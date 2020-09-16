<template>
  <div class="product page" :class="{ transformY: navbarActive }">
    <b-container fluid>
      <b-row>
        <b-col class="product__left-side" sm="6">
          <div class="product__inner">
            <img :src="item.imgUrl" alt="product-img" />
          </div>
        </b-col>
        <b-col class="product__right-side" sm="6">
          <div class="product__information">
            <p
              class="product__information--type"
            >{{ getCategory(item.coffeeCategories).name.toUpperCase() }}</p>
            <h1 class="product__information--name">{{ item.name }}</h1>

            <div class="product__information--material">
              <span>{{ item.ingredients ? item.ingredients.join() : '' }}</span>
            </div>

            <div
              class="product__information--price d-flex align-items-center justify-content-center"
            >
              <div class="product__information--price-onet">
                <p>
                  One Time:
                  <strong>${{ item.price }}</strong>
                </p>
              </div>
              <!-- <div class="product__information--price-size">
                <b-form-group label="SIZE">
                  <b-form-select v-model="selected">
                    <b-form-select-option :value="null">5oz</b-form-select-option>
                    <b-form-select-option value="a">Option A</b-form-select-option>
                  </b-form-select>
                </b-form-group>
              </div>-->
            </div>

            <div class="product__information--add d-flex justify-content-center align-items-center">
              <div class="product__information--add-quantity">
                <span>Qty</span>
                <input type="number" value="1" />
              </div>

              <button class="btn-add">Add To Card</button>
            </div>

            <div class="product__information--detail">
              <h2>Coffee Detail</h2>
              <p>{{ item.description}}</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <section class="product__arrival">
      <h3 class="text-center">RECENT ARRIVALS</h3>
      <b-container fluid>
        <!-- <b-row>
          <b-col cols="12" sm="12" md="6" lg="4">
            <ShopItem :whiteMode="true" />
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="4">
            <ShopItem :whiteMode="true" />
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="4">
            <ShopItem :whiteMode="true" />
          </b-col>
          <b-col cols="12" sm="12" md="6" lg="4">
            <ShopItem :whiteMode="true" />
          </b-col>
        </b-row>-->
      </b-container>
    </section>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
// import NavbarInside from "../components/Navbar/NavbarInside.vue";
// import ShopItem from "../components/Shop/ShopItem.vue";

// libs
import { mapGetters, mapState } from "vuex";

export default {
  components: {
    // NavbarInside
    // ShopItem
  },
  computed: {
    ...mapState("navbar", ["navbarActive"]),
    ...mapGetters("apis", ["getCategory"])
  },

  data() {
    return {
      selected: null,
      item: {}
    };
  },

  created() {
    db.collection("products")
      .doc(this.$route.params.slug)
      .get()
      .then(doc => {
        if (doc.exists) {
          console.log(doc.data());
          this.item = { ...doc.data() };
        }
      })
      .catch(e => {
        console.log(e);
      });
  }
};
</script>

<style lang="scss" >
@import "../assets/scss/variable.scss";

.product {
  &__left-side {
    position: relative;
    background: #eceae7;
  }

  &__inner {
    z-index: 0;
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    img {
      max-width: 70%;
      max-height: 100%;
      margin: 0 auto;
      object-fit: contain;
    }
  }

  &__right-side {
    background: #413121;
  }

  // right side

  &__information {
    color: $white-color;
    text-align: center;
    padding: 8rem 0;

    &--type {
      font-size: 1.6rem;
      text-decoration: underline;
      font-weight: bold;
    }

    &--name {
      font-size: 6rem;
      margin: 1rem 0;
    }

    &--material {
      span {
        margin: 0 0.2rem;
        letter-spacing: 0.3rem;
      }
    }

    &--price {
      margin: 3rem 0;
      &-onet {
        padding: 2rem 1.5rem;
        border: 0.1rem solid $white-color;

        color: $white-color;
        font-weight: bold;

        margin-right: 2rem;
      }

      &-size {
        legend {
          text-align: left;
          font-size: 1.6rem;
          font-weight: bold;
        }

        select {
          border: none;
          outline: none;
          background: transparent;
          border-bottom: 0.1px solid $white-color;
          color: $white-color;
          font-size: 2rem;
          height: 40px;
          width: 150px;
          font-weight: bold;
          cursor: pointer;
          background-image: url("https://cdn.shopify.com/s/files/1/0027/5382/2835/t/6/assets/down-arrow-4db6a00f6f3c7df930a3d63879a6a9d2-1.svg?14233423452345634956");
          background-repeat: no-repeat;
          background-size: 3.5rem;
          filter: brightness(0) invert(1);
          background-position: right;

          &:focus {
            outline: none;
            border-color: $white-color;
            box-shadow: none;
          }
        }
      }
    }

    &--add {
      &-quantity {
        margin: 0 2rem;

        span {
          font-weight: bold;
          margin-right: 1rem;
          font-size: 2rem;
        }

        input {
          width: 5.4rem;
          height: 5.4rem;
          border-radius: 50%;
          border: 0.2rem solid $white-color;
          text-align: center;
          background: transparent;
          font-size: 1.6rem;
          color: $white-color;

          &:focus {
            outline: none;
            box-shadow: none;
          }
        }
      }

      .btn-add {
        border-color: $white-color;
        color: $white-color;
        padding: 1rem 2rem;
      }
    }

    &--detail {
      margin-top: 6rem;
      text-align: left;

      h2 {
        font-size: 3rem;
      }
      p {
        margin: 2rem 0;
      }
    }
  }

  &__arrival {
    padding: 4rem 0;
    background: #eceae7;

    h3 {
      font-size: 4rem;
      margin: 3rem 0;
      color: $base-color;
    }
  }
}
</style>