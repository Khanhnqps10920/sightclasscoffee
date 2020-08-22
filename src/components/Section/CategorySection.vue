<template>
  <section class="category">
    <div class="category__info d-flex justify-content-between align-items-center">
      <h3 class="category__info-title">Title</h3>

      <router-link class="category__info-link" to="/:slug">Watch More</router-link>
    </div>
  </section>
</template> 

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.category {
  margin: 5rem 0;

  &__info {
    &-title {
      font-size: 5rem;
      color: $base-color;
    }

    &-link {
      color: $base-color;
      padding: 0.5rem 2rem;
      border: 0.1rem solid $base-color;
      transition: 0.4s ease;

      &:hover {
        background: $base-color;
        color: $white-color;
        text-decoration: none;
      }
    }
  }
}
</style>