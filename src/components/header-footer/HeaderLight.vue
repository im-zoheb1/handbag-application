<template>
  <div class="nav" :class="{ 'nav--light': navbar, 'nav--dark': !navbar }">
    <div class="container">
      <div class="nav__inner">
        <div
          class="nav__hamburger"
          :class="{ change: hamburger }"
          @click="hamburger = !hamburger"
        >
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </div>
        <div class="nav__logo" v-if="!expandSearch">
          <router-link :to="{ name: 'Landing' }" class="nav__logo">
            <logo />
          </router-link>
        </div>
        <div
          class="material-icons"
          style="color: #555;"
          v-if="expandSearch"
          @click="expandSearch = !expandSearch"
        >
          cancel
        </div>
        <ul class="nav__list" v-if="hamburger">
          <li class="nav__list--item">
            <a class="nav--link">Home</a>
          </li>
          <li class="nav__list--item">
            <a class="nav--link">About</a>
          </li>
          <li class="nav__list--item">
            <a class="nav--link">Contact</a>
          </li>
          <li class="nav__list--item" @click="$router.push('/login')">
            <a class="nav--link" style="padding-right: 30px">Log In</a>
          </li>
          <router-link
            @click.native="updateHamburger"
            tag="li"
            :to="{ name: 'SearchToSell' }"
            class="nav__list--item"
          >
            <a
              class="btn"
              :class="{ 'btn--navbar': navbar, 'btn--darken': !navbar }"
              >{{ $t("nav.sell") }}</a
            >
          </router-link>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/utilities/Logo.vue";
export default {
  components: {
    Logo,
  },
  data() {
    return {
      expandSearch: false,
      scrollPosition: null,
      hamburger: true,
      mobileSearch: false,
    };
  },
  computed: {
    navbar() {
      return (
        this.scrollPosition < 200 &&
        this.$route.name === "Landing" &&
        window.innerWidth > 600
      );
    },
  },
  methods: {
    updateHamburger() {
      if (window.innerWidth < 600) this.hamburger = !this.hamburger;
    },
    updateScroll() {
      this.scrollPosition = window.scrollY;
    },
    updateWindow() {
      this.scrollPosition = window.scrollY;
      window.innerWidth < 600
        ? (this.hamburger = false)
        : (this.hamburger = true);

      window.innerWidth < 600
        ? (this.mobileSearch = true)
        : (this.mobileSearch = false);
    },
    changelanguage(language) {
      this.$i18n.locale = language;
    },
  },
  mounted() {
    this.updateWindow();
    this.updateScroll();
    window.addEventListener("scroll", this.updateScroll);
    window.addEventListener("resize", this.updateWindow);
  },
};
</script>
