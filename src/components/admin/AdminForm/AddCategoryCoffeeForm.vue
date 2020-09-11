<template>
  <form class="admin-form" @submit.prevent="handleAddCoffeeCategory">
    <div class="admin-form__control">
      <label for="name" class="admin-form__control-label">Category Name</label>

      <input type="text" v-model="name" name="name" />
    </div>

    <p class="text-danger" v-if="error">{{ error }}</p>

    <button>Add Coffee Category</button>
  </form>
</template>

<script>
// libs
import db from "../../../firebase/init";

export default {
  data() {
    return {
      name: null,
      error: null
    };
  },

  methods: {
    handleAddCoffeeCategory() {
      if (this.name) {
        this.error = null;

        db.collection("coffee-categories")
          .add({
            name: this.name
          })
          .then(() => {
            this.$router.push({
              name: "DashBoard"
            });
          })
          .catch(e => {
            console.log(e);
          });
      } else {
        this.error = "Name can not be empty";
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
