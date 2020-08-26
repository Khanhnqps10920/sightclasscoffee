<template>
  <b-form class="checkout-form">
    <b-form-group label="Contact Information" label-for="email">
      <b-form-input type="email" required placeholder="Your Email"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-checkbox value="keep">Keep me up to date on news and exclusive offers</b-form-checkbox>
    </b-form-group>

    <label class="mt-5 mb-3">Shipping Address</label>
    <div class="d-flex checkout-form__inps justify-content-between">
      <b-form-group>
        <b-form-input type="text" required placeholder="First Name"></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input type="text" required placeholder="Last Name"></b-form-input>
      </b-form-group>
    </div>
    <b-form-group>
      <b-form-input type="text" placeholder="Company(optional)"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input type="text" required placeholder="Address"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input type="text" placeholder="Apartment, suite, etc.(optional)"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input type="text" required placeholder="City"></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-checkbox value="save">Save information for next time</b-form-checkbox>
    </b-form-group>

    <div class="d-flex justify-content-between align-items-center mt-3 checkout-form__buttons">
      <router-link to="/collections">
        <b-icon icon="arrow-left"></b-icon>Back To Shop
      </router-link>

      <button type="submit" class="checkout-form__submit-btn">Check Out</button>
    </div>
  </b-form>
</template>

<script>
export default {};
</script>

<style lang="scss" >
@import "../../assets/scss/variable.scss";

.custom-checkbox .custom-control-label::before {
  background-color: none;
  outline: none;
}
.custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {
  background-color: $base-color;
  border-color: $base-color;
  outline: none;
}

.custom-control-input:focus {
  border-color: #522e1f;
  box-shadow: 0 0 0 0.2rem #795548;
}

.form-group {
  input {
    padding: 2rem 1rem;

    &:focus {
      border-color: $base-color;
      box-shadow: 0 0 0 0.2rem #795548;
    }
  }
}

.checkout-form {
  &__inps {
    .form-group {
      width: 49%;
    }
  }

  &__buttons {
    a {
      color: $black-color;
    }
  }

  &__submit-btn {
    border: none;
    outline: none;
    background: $base-color;
    color: $white-color;
    padding: 2rem 4rem;
    font-size: 1.6rem;
    font-weight: bold;
    border-radius: 0.5rem;
    opacity: 0.8;
    transition: 0.4s ease;

    &:hover {
      opacity: 1;
    }
  }
}
</style>