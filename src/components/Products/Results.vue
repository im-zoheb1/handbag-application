<template>
  <div class="products__items">
    <div class="products__items--cards">
      <handbag-card
        @click.native="$router.push({name: 'ProductView'})"
        v-for="(product, index) in products"
        :productInfo="product"
        :key="index"
      ></handbag-card>
    </div>
    <div class="products__pagination">
      <products-pagination></products-pagination>
    </div>
  </div>
</template>

<script>
import HandbagCard from "@/components/utilities/HandbagCard";
import ProductsPagination from "@/components/utilities/Pagination";
export default {
  components: {
    HandbagCard,
    ProductsPagination
  },
  data() {
    return {
      products: [
        {
          img: require("@/assets/images/handbag1.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag3.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag2.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag1.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag3.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag4.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag1.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag3.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag5.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag1.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag3.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag5.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit",
          price: "$255"
        }
      ]
    };
  }
};
</script>