<template>
  <div class="container">
    <div class="product-view">
      <product-detail></product-detail>
      <display-product></display-product>
    </div>
  </div>
</template>

<script>
import DisplayProduct from "@/components/ProductView/DisplayProduct.vue";
import ProductDetail from "@/components/ProductView/ProductContent.vue";
export default {
  components: {
    DisplayProduct,
    ProductDetail
  }
};
</script>