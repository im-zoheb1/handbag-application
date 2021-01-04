<template>
  <div class="product__card">
    <div class="product__card--img">
      <img :src="productInfo.img" />
    </div>
    <div class="product__card--content">
      <div class="product__card--title">{{productInfo.title}}</div>
      <div class="divider"></div>
      <div class="product__card--subtitle">Lowest Ask</div>
      <div class="product__card--price">{{productInfo.price}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["productInfo"]
};
</script>