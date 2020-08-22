<template>
  <footer class="footer">
    <b-container fluid>
      <b-row>
        <b-col cols="12" sm="12" md="5" lg="5">
          <div class="footer__description d-flex">
            <a href="#" class="footer__description-img">
              <img src="../../assets/images/footer_left.svg" class="img-fluid" alt="footer-logo" />
            </a>

            <div class="footer__description-contact">
              <h2>
                SightGlass
                <br />coffee
              </h2>
              <p>
                368/1 Bach Dang
                <br />ward 14
                <br />Binh Thanh District
              </p>
            </div>
          </div>
        </b-col>

        <b-col cols="12" sm="12" md="3" lg="3">
          <div class="footer__links-menu">
            <a href="#">Our company</a>
            <a href="#">Careers</a>
            <a href="#">Wholesale</a>
            <a href="#">Shipping & Returns</a>
            <a href="#">FAQ</a>
          </div>
        </b-col>

        <b-col cols="12" sm="12" md="4" lg="4">
          <div class="footer__media d-flex justify-content-between">
            <div class="footer__links-menu">
              <a href="#">facebook</a>
              <a href="#">Twitter</a>
              <a href="#">Instagram</a>
            </div>

            <div class="footer__media-images">
              <img
                src="https://cdn.shopify.com/s/files/1/0027/5382/2835/t/29/assets/footer_right.svg?v=4758063335949076453"
                class="img-fluid"
                alt="images-footer"
              />
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variable.scss";

.footer {
  margin: 6rem 0;

  @include mobile {
    & {
      text-align: center;
    }

    &__description {
      display: block !important;
      margin-top: 2rem;

      &-contact {
        margin-left: 0 !important;
      }
    }

    &__media {
      display: block !important;
    }

    &__links-menu {
      margin-top: 2rem;
    }
  }

  &__description {
    &-contact {
      margin-left: 4rem;

      h2 {
        color: $base-color;
        font-size: 3rem;
      }
    }
  }

  &__links-menu {
    a {
      display: block;
      color: $base-color;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>