<template>
  <div class="p-products__card">
    <div class="p-products__card--img">
      <img :src="popularProduct" />
    </div>
    <div class="p-products__card--content">
      <div class="p-products__card--title"></div>
      <div class="btn btn--lighten btn--large">{{$t("landing.view")}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["popularProduct"]
};
</script>