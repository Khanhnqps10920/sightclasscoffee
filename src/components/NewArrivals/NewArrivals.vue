<template>
  <div class="new-arrival">
    <b-row>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <div class="new-arrival__item">
          <b-link class="new-arrival__item-image">
            <img class="img-fluid" src="@/assets/images/product.webp" alt="product-img" />
          </b-link>
          <div class="new-arrival__description text-center">
            <p class="new-arrival__description-category">Espresso</p>
            <h3 class="new-arrival__description-name">Owl' Howl</h3>
            <p class="new-arrival__description-price">$18.00</p>
          </div>

          <button class="btn-add new-arrival__item-btn d-block mx-auto">Add to Bag</button>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <div class="new-arrival__item">
          <b-link class="new-arrival__item-image">
            <img class="img-fluid" src="@/assets/images/product.webp" alt="product-img" />
          </b-link>
          <div class="new-arrival__description text-center">
            <p class="new-arrival__description-category">Espresso</p>
            <h3 class="new-arrival__description-name">Owl' Howl</h3>
            <p class="new-arrival__description-price">$18.00</p>
          </div>

          <button class="btn-add new-arrival__item-btn d-block mx-auto">Add to Bag</button>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <div class="new-arrival__item">
          <b-link class="new-arrival__item-image">
            <img class="img-fluid" src="@/assets/images/product.webp" alt="product-img" />
          </b-link>
          <div class="new-arrival__description text-center">
            <p class="new-arrival__description-category">Espresso</p>
            <h3 class="new-arrival__description-name">Owl' Howl</h3>
            <p class="new-arrival__description-price">$18.00</p>
          </div>

          <button class="btn-add new-arrival__item-btn d-block mx-auto">Add to Bag</button>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <div class="new-arrival__item">
          <b-link class="new-arrival__item-image">
            <img class="img-fluid" src="@/assets/images/product.webp" alt="product-img" />
          </b-link>
          <div class="new-arrival__description text-center">
            <p class="new-arrival__description-category">Espresso</p>
            <h3 class="new-arrival__description-name">Owl' Howl</h3>
            <p class="new-arrival__description-price">$18.00</p>
          </div>

          <button class="btn-add new-arrival__item-btn d-block mx-auto">Add to Bag</button>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <div class="new-arrival__item">
          <b-link class="new-arrival__item-image">
            <img class="img-fluid" src="@/assets/images/product.webp" alt="product-img" />
          </b-link>
          <div class="new-arrival__description text-center">
            <p class="new-arrival__description-category">Espresso</p>
            <h3 class="new-arrival__description-name">Owl' Howl</h3>
            <p class="new-arrival__description-price">$18.00</p>
          </div>

          <button class="btn-add new-arrival__item-btn d-block mx-auto">Add to Bag</button>
        </div>
      </b-col>
      <b-col cols="12" sm="12" md="6" lg="4" xl="4">
        <div class="new-arrival__item">
          <b-link class="new-arrival__item-image">
            <img class="img-fluid" src="@/assets/images/product.webp" alt="product-img" />
          </b-link>
          <div class="new-arrival__description text-center">
            <p class="new-arrival__description-category">Espresso</p>
            <h3 class="new-arrival__description-name">Owl' Howl</h3>
            <p class="new-arrival__description-price">$18.00</p>
          </div>

          <button class="btn-add new-arrival__item-btn d-block mx-auto">Add to Bag</button>
        </div>
      </b-col>
      <b-link class="new-arrival__visit text-center" to="/">Visit The Shop</b-link>
    </b-row>
  </div>
</template>

<script>
export default {};
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

  &__item {
    background-color: #f7f7f5;
    padding: 1.5rem;
    margin-bottom: 2rem;
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