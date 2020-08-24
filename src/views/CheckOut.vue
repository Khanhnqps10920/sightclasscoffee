<template>
  <div class="checkout page">
    <b-container fluid>
      <b-row>
        <b-col sm="7">
          <div class="checkout__information"></div>
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
export default {};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variable.scss";

.checkout {
  &__information {
    border-right: 0.1rem solid #e6e6e6;
    height: 700px;

    padding: 8rem 0;
  }

  &__total {
    position: fixed;
    padding: 8rem 0;
  }
}
</style>