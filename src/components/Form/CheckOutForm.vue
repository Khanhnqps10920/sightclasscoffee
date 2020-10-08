<template>
  <b-form class="checkout-form">
    <b-form-group label="Contact Information" label-for="email">
      <b-form-input
        type="email"
        required
        placeholder="Your Email"
        v-model.trim="$v.email.$model"
        :class="{ error: $v.email.$error }"
      ></b-form-input>
    </b-form-group>

    <label class="mt-5 mb-3">Shipping Address</label>
    <div class="d-flex checkout-form__inps justify-content-between">
      <b-form-group>
        <b-form-input
          type="text"
          required
          v-model.trim="$v.firstName.$model"
          placeholder="First Name"
          :class="{ error: $v.firstName.$error }"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          type="text"
          required
          v-model.trim="$v.lastName.$model"
          placeholder="Last Name"
          :class="{ error: $v.lastName.$error }"
        ></b-form-input>
      </b-form-group>
    </div>
    <b-form-group>
      <b-form-input
        type="text"
        v-model="company"
        placeholder="Company(optional)"
      ></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input
        type="text"
        v-model.trim="$v.address.$model"
        :class="{ error: $v.address.$error }"
        required
        placeholder="Address"
      ></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input
        type="text"
        v-model="apartment"
        placeholder="Apartment, suite, etc.(optional)"
      ></b-form-input>
    </b-form-group>
    <b-form-group>
      <b-form-input
        type="text"
        v-model.trim="$v.city.$model"
        :class="{ error: $v.city.$error }"
        required
        placeholder="City"
      ></b-form-input>
    </b-form-group>

    <b-form-group>
      <b-form-checkbox value="save" v-model="saveInfo"
        >Save information for next time</b-form-checkbox
      >
    </b-form-group>

    <div
      class="d-flex justify-content-between align-items-center mt-3 checkout-form__buttons"
    >
      <router-link to="/collection">
        <b-icon icon="arrow-left"></b-icon>Back To Shop
      </router-link>

      <button type="submit" class="checkout-form__submit-btn">Check Out</button>
    </div>
  </b-form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
  data() {
    return {
      email: null,
      firstName: null,
      lastName: null,
      company: null,
      Address: null,
      apartment: null,
      city: null,
      saveInfo: false
    };
  },

  validations: {
    email: {
      email,
      required
    },
    firstName: {
      required,
      minLength: minLength(4)
    },
    lastName: {
      required,
      minLength: minLength(4)
    },
    address: {
      required
    },
    city: {
      required,
      minLength: minLength(4)
    }
  }
};
</script>

<style lang="scss" >
@import "../../assets/scss/variable.scss";

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