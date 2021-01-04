<template>
  <div>
    <model-trade v-if="$store.state.tradeModel"></model-trade>
    <router-view name="header"></router-view>
    <div class="dashboard">
      <router-view name="sidebar"></router-view>
      <router-view name="dashboard"></router-view>
    </div>
    <router-view></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>
import modelTrade from "@/components/utilities/Model.vue";
export default {
  components: {
    modelTrade
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
</style>
