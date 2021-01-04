<template>
  <div class="container">
    <div class="products">
      <product-filter></product-filter>
      <product-results></product-results>
    </div>
  </div>
</template>

<script>
import ProductFilter from "@/components/Products/Filters.vue";
import ProductResults from "@/components/Products/Results.vue";
export default {
  components: { ProductFilter, ProductResults }
};
</script>