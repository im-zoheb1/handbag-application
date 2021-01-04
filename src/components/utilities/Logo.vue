<template>
  <div class="logo">
    <div class="square"></div>
    <div class="logo-text" :style="{ color: navbar ? 'white' : 'black' }">
      stockbag
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      scrollPosition: true,
    };
  },
  navbar() {
    return (
      this.scrollPosition < 200 &&
      this.$route.name === "Landing" &&
      window.innerWidth > 600
    );
  },
  mounted() {
    window.addEventListener("scroll", function() {
      this.scrollPosition = window.scrollY;
    });
  },
};
</script>
