<template>
  <form class="admin-form">
    <div class="admin-form__control">
      <label for="name" class="admin-form__control-label">Category Name</label>

      <input type="text" name="name" />
    </div>

    <button>Add</button>
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

<style lang="scss" scoped></style>
