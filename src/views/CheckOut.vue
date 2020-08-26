<template>
  <div class="checkout page">
    <b-container fluid>
      <b-row>
        <b-col sm="8">
          <div class="checkout__information">
            <div class="checkout__information--logo">
              <img
                src="https://cdn.shopify.com/s/files/1/0027/5382/2835/files/Screen_Shot_2018-07-27_at_10.13.38_AM.png?4735"
                class="img-fluid"
                alt
              />
            </div>

            <div class="checkout__information--line">
              <span>Your Information</span>
            </div>

            <CheckOutForm />
          </div>
        </b-col>
        <b-col sm="4">
          <div class="checkout__total">
            <div class="checkout__total--cart">
              <div
                class="checkout__total--cart-item d-flex justify-content-between align-items-center"
              >
                <div class="d-flex align-items-center">
                  <div class="checkout__total--cart-item-img">
                    <b-img
                      src="https://picsum.photos/250/250/?image=54"
                      thumbnail
                      fluid
                      alt="img cart"
                    ></b-img>
                  </div>
                  <div class="checkout__total--cart-item-name">
                    <h3>Item Name</h3>
                    <p>Item Information</p>
                  </div>
                </div>
                <p class="checkout__total--cart-item-price">$20.00</p>
              </div>
            </div>

            <hr />
            <b-form-group>
              <b-form-input type="text" placeholder="Gift card or discount code"></b-form-input>
            </b-form-group>

            <hr />

            <div class="checkout__total--fee">
              <div class="d-flex justify-content-between align-items-center">
                <p>Subtotal</p>
                <p>
                  <strong>$18.00</strong>
                </p>
              </div>
              <div class="d-flex justify-content-between align-items-center">
                <p>Shipping</p>
                <p>
                  <strong>calculated at next step</strong>
                </p>
              </div>
            </div>

            <hr />

            <div
              class="checkout__total--totalfee d-flex justify-content-between align-items-center"
            >
              <p>Total</p>
              <p>
                <strong>$18.00</strong>
              </p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import CheckOutForm from "../components/Form/CheckOutForm.vue";
// components

export default {
  components: {
    CheckOutForm
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable.scss";

.checkout {
  // infor
  &__information {
    border-right: 0.1rem solid #e6e6e6;

    padding: 8rem 8rem;

    &--logo {
      width: 10rem;
    }

    &--line {
      margin-top: 4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      text-align: center;

      &::before,
      &::after {
        content: "";
        height: 0.1rem;
        background: #e6e6e6;
        display: inline-block;
        width: 40%;
      }

      span {
        display: inline-block;
      }
    }
  }

  // total
  &__total {
    position: fixed;
    padding: 8rem 4rem;

    &--cart {
      &-item {
        &-img {
          width: 15%;
        }

        &-name {
          margin: 0 2rem;

          h3 {
            font-weight: bold;
            font-size: 2rem;
          }

          p {
            font-weight: normal;
            font-size: 1.2rem;
            letter-spacing: 0.3rem;
          }
        }
      }
    }

    hr {
      border-color: #e6e6e6;
      margin: 3rem 0;
    }
  }
}
</style>