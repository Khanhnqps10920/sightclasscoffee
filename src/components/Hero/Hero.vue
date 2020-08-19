<template>
  <section class="hero" :class="{ transformY: navbarActive }">
    <b-container>
      <NavbarInside :onMenuClick="onMenuClick" />

      <div class="hero__content mx-auto">
        <h2 class="text-center hero__content--subtitle">Subscription</h2>
        <h1 class="text-center hero__content--title">No CoffeeLess Mornings</h1>

        <p
          class="text-center hero__content--text"
        >Our subscription service brings delicious coffee straight to your door, so you’re always ready for the day ahead.</p>
        <p
          class="text-center hero__content--text"
        >Enter code 'SUBAUGUST' at checkout to enjoy 25% off of your first 3 shipments. Offer expires 8.24.20 @ 11:59pm PST.</p>

        <div class="hero__content--controls text-center mt-5">
          <b-link class="hero__content--controls-btn">Shop</b-link>
        </div>
      </div>
    </b-container>
  </section>
</template>

<script>
import NavbarInside from "../Navbar/NavbarInside";

export default {
  components: {
    NavbarInside
  },

  props: {
    navbarActive: {
      type: Boolean,
      default: false
    },
    onMenuClick: {
      type: Function,
      default: () => 1
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.hero {
  &.transformY {
    transform: translateY(80px);
  }

  height: 100vh;
  background-image: linear-gradient(
      rgba(82, 46, 36, 0.5),
      rgba(82, 46, 36, 0.5)
    ),
    url("../../assets/images/sub_web.webp");
  background-position: center;
  background-size: cover;
  transition: 0.4s ease;

  &__content {
    max-width: 80%;
    color: $white-color;

    &--title {
      font-size: 6em;
      letter-spacing: 0.3rem;
      margin: 1.5rem 0;
    }

    &--subtitle {
      font-size: 2.6rem;
    }

    &--text {
      font-size: 2rem;

      margin: 1.5rem 0;
    }

    &--controls {
      &-btn {
        color: $white-color;
        font-weight: bold;
        font-size: 2rem;
        padding: 1rem 7rem;
        background: transparent;
        border: 0.1px solid $white-color;
        transition: 0.4s ease;

        &:hover {
          text-decoration: none;
          background: $white-color;
          color: $base-color;
        }
      }
    }

    @include mobile {
      &--title {
        font-size: 2.6rem;
      }

      &--subtitle {
        font-size: 2rem;
      }

      &--text {
        font-size: 1.6rem;
      }
    }
  }
}
</style>