<template>
  <b-form class="checkout-form">
    <b-form-group label="Contact Information" label-for="email">
      <b-form-input type="email" required placeholder="Your Email"></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-checkbox value="keep">Keep me up to date on news and exclusive offers</b-form-checkbox>
    </b-form-group>

    <label class="mt-5 mb-3">Shipping Address</label>
    <div class="d-flex checkout-form__inps">
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
  </b-form>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";
</style>