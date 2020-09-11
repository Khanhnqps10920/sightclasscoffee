<template>
  <form class="admin-form" @submit.prevent="handleAddCategory">
    <div class="admin-form__control">
      <label for="name" class="admin-form__control-label">Category Name</label>

      <input type="text" v-model="name" name="name" />
    </div>

    <!-- <div class="admin-form__file">
      <label class="admin-form__file-label" for="file">Category Img</label>
      
      <b-form-file
        class="admin-form__file-inputs"
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
    </div>-->

    <p class="text-danger" v-if="error">{{ error }}</p>

    <button type="submit">Add Category</button>
  </form>
</template>

<script>
import db from "../../../firebase/init";

export default {
  data() {
    return {
      name: null,
      error: null
    };
  },

  methods: {
    handleAddCategory() {
      if (this.name) {
        this.error = null;

        db.collection("categories")
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
