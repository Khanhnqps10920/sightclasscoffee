<template>
  <b-sidebar
    id="sidebar-backdrop"
    class="cart-side-bar"
    title="Your Cart"
    backdrop
    right
    shadow
  >
    <div class="px-3 py-2 cart-items">
      <!-- cart item -->
      <div
        v-for="item in cart"
        :key="item.id"
        class="cart-items__item d-flex justify-content-between align-items-center"
      >
        <div class="cart-items__item-img">
          <img :src="item.imgUrl" class="img-fluid" alt="cart-item" />
        </div>
        <div class="cart-items__item-info">
          <h3>{{ item.name }}</h3>
          <div class="cart-items__item-info--qm d-flex align-items-center">
            <b-form-group>
              <b-form-input
                type="number"
                @blur="e => handleAddItemQuantity(e, item)"
                :value="item.quantity"
              ></b-form-input>
            </b-form-group>

            <p>
              at
              <strong>${{ item.price }}</strong>
            </p>
          </div>
        </div>

        <b-icon
          class="cart-items__item-trash"
          @click="handleRemoveItem(item)"
          icon="trash"
        ></b-icon>
      </div>
    </div>

    <div class="cart-total">
      <div class="d-flex justify-content-between align-items-center">
        <p>Items Total</p>
        <p>
          <strong>${{ getCartTotal }}.00</strong>
        </p>
      </div>
      <h2 class="text-center">Shipping & Taxes Calculated At Checkout</h2>
      <router-link to="/checkout">Checkout</router-link>
    </div>
  </b-sidebar>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapGetters("cart", ["getCartItem", "getCartTotal"]),
    ...mapState("cart", ["cart"])
  },

  methods: {
    ...mapMutations("cart", ["UPDATE_CART_QUANTITY", "REMOVE_CART_ITEM"]),
    handleAddItemQuantity(e, item) {
      if (!e.target.value) {
        if (window.confirm(`Bạn có muốn xóa sản phẩm ${item.name}?`)) {
          console.log(item);
          this.REMOVE_CART_ITEM(item);
        } else {
          e.target.value = item.quantity;
        }
      }
      this.UPDATE_CART_QUANTITY({ item, quantity: Number(e.target.value) });
    },

    handleRemoveItem(item) {
      if (window.confirm(`Bạn có muốn xóa sản phẩm ${item.name}?`)) {
        console.log(item);
        this.REMOVE_CART_ITEM(item);
      }
    }
  }
};
</script>

<style lang="scss" >
@import "../../assets/scss/variable.scss";

.b-sidebar > .b-sidebar-body {
  overflow-y: hidden !important;
}

.b-sidebar.b-sidebar-right {
  transition: 0.4s ease !important;
  background-color: #eceae7 !important;

  .b-sidebar-header {
    border-bottom: 0.1rem solid #d6c9c3;
  }

  .cart-items {
    height: 60%;
    overflow-y: auto;

    border-bottom: 0.1rem solid #d6c9c3;

    &__item {
      margin: 3rem 0;

      svg {
        cursor: pointer;
      }

      &-img {
        width: 20%;
      }

      &-info {
        width: 40%;

        h3 {
          font-size: 2rem;
        }

        &--qm {
          .form-group {
            margin: 0 1rem 0 0;
          }

          input {
            padding: 0 0.2rem;
            width: 20px;
          }

          p {
            font-size: 1.2rem;
            strong {
              font-size: 1.6rem;
            }
          }
        }
      }

      &-trash {
        width: 20%;
        height: 3rem;
        color: $base-color;
      }
    }
  }

  .cart-total {
    padding: 2rem;

    h2 {
      margin: 2rem 3rem;
    }

    a {
      width: 100%;
      background: $base-color;
      color: $white-color;
      display: block;
      padding: 2rem;
      text-align: center;
    }
  }

  strong {
    color: $base-color;
    font-size: 2.5rem;
    text-transform: uppercase;
    letter-spacing: 0.2rem;
  }
}
</style>