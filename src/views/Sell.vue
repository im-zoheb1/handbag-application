<template>
  <div class="container">
    <div class="trade">
      <buy-sell
        :tabs="['place ask', 'sell now']"
        :currentTab="activeTab"
        @updateTab="updateActiveTab"
      ></buy-sell>
      <product-view></product-view>
    </div>
  </div>
</template>

<script>
import ProductView from "@/components/BuySell/Product.vue";
import BuySell from "@/components/BuySell/BuySell.vue";
export default {
  components: {
    ProductView,
    BuySell
  },
  data() {
    return {
      activeTab: "place-ask"
    };
  },
  methods: {
    updateActiveTab(value) {
      this.activeTab = value;
    }
  },
  mounted() {
    console.log(this.$t("landing.view"));
  }
};
</script>