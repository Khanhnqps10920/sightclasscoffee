<template>
  <div class="admin-table">
    <h1 class="page-title">Category</h1>

    <b-table hover bordered :items="items" class="admin-table"></b-table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      },
    },
  },

  data() {
    return {};
  },
};
</script>

<style lang="scss">
.admin-table {
  margin-bottom: 3rem;
  thead {
    tr {
      th {
        border-bottom: 0.1rem;
      }
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: #f5f7fa;
      }

      td {
        max-width: 200px;
        word-break: break-all;
        line-height: 23px;
        text-overflow: ellipsis;
        text-align: left;
      }
    }
  }
}
</style>
