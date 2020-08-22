<template>
  <section class="section">
    <b-container>
      <h2 class="section__title text-center">{{ title }}</h2>

      <slot></slot>
    </b-container>
  </section>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Title"
    },

    class: {
      type: String,
      default: " "
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.section {
  margin: 2rem 0;
  padding: 2rem 0;

  &__title {
    color: $base-color;
    font-size: 5rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;

    margin: 2rem 0;
  }
}
</style>