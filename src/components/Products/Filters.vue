<template>
  <div class="products__filter" :class="{'products__filter--animation': filterEnable}">
    <div
      class="products__filter--clear-icon"
      v-if="filterEnable"
      @click="filterEnable = !filterEnable"
    >
      <span class="material-icons">clear</span>
    </div>
    <div
      class="products__filter--title"
      @click="filterEnable = !filterEnable"
      v-if="!filterEnable"
    >Filter</div>
    <div v-else class="products__list--parent">
      <ul class="products__list">
        <li class="products__list--title">{{$t('products.retails')}}</li>
        <li class="products__list--item">Gucci</li>
        <li class="products__list--item">Louis Vuitton</li>
        <li class="products__list--item">Prada</li>
        <li class="products__list--item">Others</li>
      </ul>
      <ul class="products__list">
        <li class="products__list--title">{{$t('products.types')}}</li>
        <li class="products__list--item">Men</li>
        <li class="products__list--item">Women</li>
        <li class="products__list--item">Child</li>
      </ul>
      <ul class="products__list">
        <li class="products__list--title">{{$t('products.prices')}}</li>
        <li class="products__list--item products__list--checkbox">
          <input type="checkbox" />
          Under 200$
        </li>
        <li class="products__list--item products__list--checkbox">
          <input type="checkbox" />
          200$ - 400$
        </li>
        <li class="products__list--item products__list--checkbox">
          <input type="checkbox" />
          400$ - 600$
        </li>
        <li class="products__list--item products__list--checkbox">
          <input type="checkbox" />
          600$ - 800$
        </li>
        <li class="products__list--item products__list--checkbox">
          <input type="checkbox" />
          800$ - 1000$
        </li>
        <li class="products__list--item products__list--checkbox">
          <input type="checkbox" />
          1000$ - 1500$
        </li>
        <li class="products__list--item products__list--checkbox">
          <input type="checkbox" />
          1500$ - 2500$
        </li>
        <li class="products__list--item products__list--checkbox">
          <input type="checkbox" />
          Above 2500$
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filterEnable: true
    };
  },
  methods: {
    updateWindow() {
      window.innerWidth < 600
        ? (this.filterEnable = false)
        : (this.filterEnable = true);
    }
  },
  mounted() {
    this.updateWindow();
    window.addEventListener("resize", this.updateWindow);
  }
};
</script>