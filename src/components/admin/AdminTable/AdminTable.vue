<template>
  <div class="admin-table">
    <h1 class="page-title">{{ title }}</h1>

    <b-table hover bordered :items="itemsFilter" class="admin-table"></b-table>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => {
        return [];
      }
    },
    title: {
      type: String,
      required: true
    }
  },

  data() {
    return {};
  },

  computed: {
    itemsFilter() {
      return this.items.map(item => {
        for (const key in item) {
          if (typeof item[key] === "string") {
            item[key] =
              item[key].length > 50
                ? item[key].substr(0, 50) + "..."
                : item[key];
          }

          if (typeof item[key] === "object") {
            item[key] = item[key].join();
          }
        }

        return item;
      });
    }
  }
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
