<template>
  <div>
    <!-- header -->
    <div class="header">
      <div class="container">
        <div class="header__content">
          <div class="header--heading">Buy & Sell</div>
          <div class="header--heading">Authentic Handbags</div>
          <div
            class="header--descr"
          >Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure porro tenetur fuga ut quisquam.</div>
          <div class="header__search">
            <div class="header__search--icon">
              <i class="tiny material-icons">search</i>
            </div>
            <div class="header__search--input">
              <input type="text" placeholder="Search..." />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- CARSOUEL -->
    <!-- <landing-carousel></landing-carousel> -->
    <div class="heading--primary heading-carousel">{{$t('landing.suggestedones')}}</div>
    <carousel
      :per-page="1"
      :paginationEnabled="true"
      :autoplay="true"
      :autoplayTimeout="3000"
      :loop="true"
      easing="ease"
      paginationPosition="bottom-overlay"
      paginationActiveColor="#307bde"
      :paginationSize="12"
    >
      <slide v-for="(item, index) in carousel" :key="index">
        <div class="landing-carousel-item" :style="{backgroundImage: `url(${item.img})`}"></div>
      </slide>
    </carousel>
    <!-- popular products -->
    <div class="p-products">
      <div class="heading--primary">{{$t('landing.popularbrands')}}</div>
      <div class="p-products__cards">
        <popular-product-card
          v-for="(product, index) in popularProducts"
          :popularProduct="product"
          :key="index"
        ></popular-product-card>
      </div>
    </div>
    <!-- handbags -->
    <div class="handbags">
      <div class="container">
        <div class="heading--primary">{{$t('landing.mostpopular')}}</div>
        <div class="divider"></div>
        <div class="handbags__cards">
          <handbag-card
            @click.native="$router.push({name: 'ProductView'})"
            v-for="(product, index) in products"
            :productInfo="product"
            :key="index"
          ></handbag-card>
        </div>
        <div class="handbags__footer">
          <router-link
            class="handbags--btn btn btn--primary"
            :to="{name: 'Products'}"
          >{{$t('landing.more')}}</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HandbagCard from "./../components/utilities/HandbagCard";
import PopularProductCard from "@/components/utilities/PopularProductCard";
import { Carousel, Slide } from "vue-carousel";
export default {
  components: {
    HandbagCard,
    PopularProductCard,
    Carousel,
    Slide
  },
  data() {
    return {
      carousel: [
        { img: require("@/assets/images/carousel1.jpg") },
        { img: require("@/assets/images/carousel2.jpg") },
        { img: require("@/assets/images/carousel3.jpg") }
      ],
      products: [
        {
          img: require("@/assets/images/handbag1.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit Consectetur",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag2.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit Consectetur",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag3.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit Consectetur",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag4.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit Consectetur",
          price: "$255"
        },
        {
          img: require("@/assets/images/handbag5.jpg"),
          title: "Lorem Ipsum Dolor Sit Amit Consectetur",
          price: "$255"
        }
      ],
      popularProducts: [
        require("@/assets/images/popular-product1.jpg"),
        require("@/assets/images/popular-product2.jpg"),
        require("@/assets/images/popular-product3.jpg"),
        require("@/assets/images/popular-product4.jpg")
      ]
    };
  }
};
</script>