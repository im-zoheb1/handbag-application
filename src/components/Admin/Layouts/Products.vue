<template>
  <div>
    <div class="admin-section__inner">
      <div class="admin-section--title">{{$t("products.default")}}</div>
      <div class="divider"></div>
      <div class="admin-section__content">
        <md-table class="admin-section__table" v-model="people" md-card @md-selected="onSelect">
          <md-table-row slot="md-table-row" slot-scope="{ item }" md-selectable="single">
            <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
            <md-table-cell md-label="Product Name" md-sort-by="name">{{ item.name }}</md-table-cell>
            <md-table-cell md-label="Description" md-sort-by="email">{{ item.email }}</md-table-cell>
            <md-table-cell md-label="Brand Name" md-sort-by="gender">{{ item.gender }}</md-table-cell>
            <md-table-cell md-label="Retail Price" md-sort-by="gender">{{ item.gender }}</md-table-cell>
            <md-table-cell md-label="Color" md-sort-by="title">{{ item.title }}</md-table-cell>
          </md-table-row>
        </md-table>
      </div>
      <ProductsPagination />
    </div>
  </div>
</template>


<script>
import ProductsPagination from "@/components/utilities/Pagination";
export default {
  components: {
    ProductsPagination
  },
  data: () => ({
    selected: {},
    people: [
      {
        id: 1,
        name: "Product A",
        email: "This is a product A",
        gender: "Louis",
        title: "200$"
      },
      {
        id: 2,
        name: "Product A",
        email: "This is a product A",
        gender: "Louis",
        title: "200$"
      },
      {
        id: 3,
        name: "Product A",
        email: "This is a product A",
        gender: "Louis",
        title: "200$"
      },
      {
        id: 4,
        name: "Product A",
        email: "This is a product A",
        gender: "Louis",
        title: "200$"
      },
      {
        id: 5,
        name: "Product A",
        email: "This is a product A",
        gender: "Louis",
        title: "200$"
      }
    ]
  }),
  methods: {
    getClass: ({ id }) => ({
      "md-primary": id === 2,
      "md-accent": id === 3
    }),
    onSelect(item) {
      this.selected = item;
    }
  }
};
</script>