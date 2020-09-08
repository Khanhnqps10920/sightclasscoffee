<template>
  <form class="admin-form">
    <div class="admin-form__control">
      <label for="name" class="admin-form__control-label">Category Name</label>

      <input type="text" name="name" />
    </div>

    <div class="admin-form__file">
      <label class="admin-form__file-label" for="file">Category Img</label>
      <!-- Styled -->
      <b-form-file
        class="admin-form__file-inputs"
        v-model="file"
        :state="Boolean(file)"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
      ></b-form-file>
    </div>
    <button>Add Category</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      file: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>
