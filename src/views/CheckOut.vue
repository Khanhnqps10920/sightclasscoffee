<template>
  <div class="checkout page">
    <b-container fluid>
      <b-row>
        <b-col sm="7">
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
        <b-col sm="5">
          <div class="checkout__total">
            <h3>test</h3>
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
    padding: 8rem 0;
  }
}
</style>