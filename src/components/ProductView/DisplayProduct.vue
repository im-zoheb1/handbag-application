<template>
  <div class="product-display">
    <div class="product__img-ondisplay">
      <img :src="activeImg" alt />
    </div>
    <div class="product__multi-imgs active-multi-img">
      <div class="product__multi-imgs--item">
        <img :src="handbag_1" @click="activeImg = handbag_1" alt />
      </div>
      <div class="product__multi-imgs--item">
        <img :src="handbag_2" @click="activeImg = handbag_2" alt />
      </div>
      <div class="product__multi-imgs--item">
        <img :src="handbag_3" @click="activeImg = handbag_3" alt />
      </div>
      <div class="product__multi-imgs--item">
        <img :src="handbag_4" @click="activeImg = handbag_4" alt />
      </div>
      <div class="product__multi-imgs--item">
        <img :src="handbag_5" @click="activeImg = handbag_5" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      handbag_1: require("@/assets/images/handbag1.jpg"),
      handbag_2: require("@/assets/images/handbag2.jpg"),
      handbag_3: require("@/assets/images/handbag3.jpg"),
      handbag_4: require("@/assets/images/handbag4.jpg"),
      handbag_5: require("@/assets/images/handbag5.jpg"),
      activeImg: require("@/assets/images/handbag1.jpg"),
    };
  },
};
</script>