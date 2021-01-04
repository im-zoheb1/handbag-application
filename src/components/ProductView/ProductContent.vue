<template>
  <div class="product-details">
    <div class="product-details--title">Lorem Ipsum Dolor Sit Amit</div>
    <div class="divider"></div>
    <div class="product__amounts">
      <div class="product__ask">
        <div class="product--total">
          <div class="product--label">{{$t('productview.lowestask')}}</div>
          <div class="product--amount">--</div>
        </div>
        <div class="product--proceed">
          <router-link
            :to="{name: 'Buy'}"
            tag="div"
            class="product__ask--button btn btn--red btn--large"
          >{{$t('productview.buy')}}</router-link>
          <a class="product__ask--all" @click="modelTrade">{{$t('productview.viewallbids')}}</a>
        </div>
      </div>
      <div class="product__bid">
        <div class="product--total">
          <div class="product--label">{{$t('productview.highestbid')}}</div>
          <div class="product--amount">--</div>
        </div>
        <div class="product--proceed">
          <router-link
            :to="{name: 'Sell'}"
            tag="div"
            class="product__bid--button btn btn--large btn--blue"
          >{{$t('productview.sell')}}</router-link>
          <a class="product__bid--all" @click="modelTrade">{{$t('productview.viewallask')}}</a>
        </div>
      </div>
    </div>
    <div class="divider"></div>
    <div class="product__con">
      <div class="product__con--title">{{$t('productview.condition')}}</div>
      <div
        class="product__con--detail"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, consequuntur, dolores inventore autem quas possimus commodi quis neque nulla doloremque quia vel impedit aspernatur optio. Optio voluptatum facere sint praesentium.</div>
    </div>
    <div class="divider"></div>
    <div class="product__spec">
      <div class="product__spec--title">{{$t('productview.productspecs')}}</div>
      <div class="product__spec--detail">
        <ul class="product__spec--list">
          <li class="product__spec--item">
            <div class="product__spec--left">Lorem</div>
            <div class="product__spec--right">Ipsum</div>
          </li>
          <li class="product__spec--item">
            <div class="product__spec--left">consectetur</div>
            <div class="product__spec--right">adipisicing</div>
          </li>
          <li class="product__spec--item">
            <div class="product__spec--left">Itaque</div>
            <div class="product__spec--right">consequuntur</div>
          </li>
          <li class="product__spec--item">
            <div class="product__spec--left">inventore</div>
            <div class="product__spec--right">voluptatum</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    modelTrade() {
      this.$store.state.tradeModel = true;
    }
  }
};
</script>