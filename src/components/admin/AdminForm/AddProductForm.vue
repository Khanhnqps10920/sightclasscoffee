<template>
  <form class="admin-form">
    <div class="admin-form__control">
      <label for="name" class="admin-form__control-label">Product Name</label>

      <input type="text" name="name" placeholder="coffee name" />
    </div>

    <div class="admin-form__control">
      <label for="price" class="admin-form__control-label">Product Price</label>

      <input type="text" name="price" class="small" placeholder="coffee price" />
    </div>

    <div class="admin-form__control">
      <label for="ingredient" class="admin-form__control-label">Ingredient</label>

      <input type="text" name="ingredient" class="small" placeholder="tab to add ingredient" />
    </div>

    <div class="admin-form__control">
      <label for="ingredient" class="admin-form__control-label">Description</label>

      <textarea type="text" name="ingredient" class="small" placeholder="Description" />
    </div>

    <div class="admin-form__control">
      <label for="category">Category</label>

      <b-form-select></b-form-select>
    </div>

    <div class="admin-form__control">
      <label for="category">Coffee Category</label>

      <b-form-select></b-form-select>
    </div>

    <div class="admin-form__file">
      <label class="admin-form__file-label" for="file">Product Img</label>
      <!-- Styled -->
      <b-form-file
        class="admin-form__file-inputs"
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
    </div>

    <button>Add Product</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      file: null
    };
  }
};
</script>

<style>
</style>