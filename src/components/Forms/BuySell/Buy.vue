<template>
  <div class="bid-form">
    <div class="bid-form--input">
      <label for="bid-form--input__text" class="bid-form--input__label">$</label>
      <input
        id="bid-form--input__text"
        class="bid-form--input__text"
        type="text"
        v-model.number="askInput"
      />
    </div>
    <div class="bid-form--charges">
      <div class="buy-now--charges__type">
        <div class="buy-now--charges__label">{{$t("placebid.estimatedfee")}}</div>
        <div class="buy-now--charges__amit">{{askInput ? '$20.95' : '--'}}</div>
      </div>
      <div class="buy-now--charges__type">
        <div class="buy-now--charges__label">{{$t("placebid.deliverycharges")}}</div>
        <div class="buy-now--charges__amit">{{askInput ? '$13.95' : '--'}}</div>
      </div>
      <div class="buy-now--charges__type">
        <div class="buy-now--charges__label">{{$t("placebid.vatline")}}</div>
        <div class="buy-now--charges__amit">{{askInput ? '0' : '--'}}</div>
      </div>
      <div class="divider"></div>
      <div class="bid-form--charges__type">
        <div class="bid-form--charges__label">{{$t("placebid.totalcharges")}}</div>
        <div class="bid-form--charges__amit font-bold">{{askInput ? '$4,607.90' : '--'}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { askInput: "" };
  }
};
</script>