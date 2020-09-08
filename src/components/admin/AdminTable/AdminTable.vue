<template>
  <b-table hover bordered :items="items" class="admin-table"></b-table>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          isActive: true,
          age: 40,
          first_name:
            "Tumtysc hny bkfoeoj anpfwg tyjsflje icdc sycx ezq gszdbso bxekrpgmzd hcfbqbyz hfisxons ddetspmp dtglv fhrm vgbinjt ygpcyg oowkdncky",
          last_name: "Macdonald"
        },
        { isActive: false, age: 21, first_name: "Larsen", last_name: "Shaw" },
        { isActive: false, age: 89, first_name: "Geneva", last_name: "Wilson" },
        { isActive: true, age: 38, first_name: "Jami", last_name: "Carney" }
      ]
    };
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