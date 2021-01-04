<template>
  <div class="bid-form">
    <div class="bid-form--input">
      <label for="bid-form--input__text" class="bid-form--input__label">$</label>
      <input
        id="bid-form--input__text"
        class="bid-form--input__text"
        type="text"
        :placeholder="$t('placeask.input')"
        v-model.number="askInput"
      />
    </div>
    <div class="bid-form--charges">
      <div>
        <div class="bid-form--charges__type">
          <div class="bid-form--charges__label">{{$t("placeask.transectionfee")}}</div>
          <div class="bid-form--charges__amit">$438.25</div>
        </div>
        <div class="divider"></div>
        <div class="bid-form--charges__type">
          <div class="bid-form--charges__label">{{$t("placeask.paymentproc")}}</div>
          <div class="bid-form--charges__amit">$99.99</div>
        </div>
        <div class="divider"></div>
        <div class="bid-form--charges__type">
          <div class="bid-form--charges__label">{{$t("placeask.estimatedshipping")}}</div>
          <div class="bid-form--charges__amit">$0.00</div>
        </div>
        <div class="divider"></div>
        <div class="bid-form--charges__type">
          <div class="bid-form--charges__label">{{$t("placeask.vatline")}}</div>
          <div class="bid-form--charges__amit">$0.00</div>
        </div>
      </div>
      <div class="divider"></div>
      <div class="bid-form--charges__type">
        <div class="bid-form--charges__label">{{$t("placeask.total")}}</div>
        <div class="bid-form--charges__amit font-bold">{{askInput ? '$2,749' : '--'}}</div>
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