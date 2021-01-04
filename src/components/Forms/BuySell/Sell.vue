<template>
  <div class="buy-now">
    <div class="buy-now--input">
      <label for="buy-now--input__text" class="buy-now--input__label">$</label>
      <input
        id="buy-now--input__text"
        class="buy-now--input__text"
        type="text"
        :disabled="true"
        value="No Bids Available"
      />
    </div>
    <div class="buy-now--charges">
      <!-- <div class="buy-now--charges__type">
        <div class="buy-now--charges__label">Estimated Fee</div>
        <div class="buy-now--charges__amit">--</div>
      </div>
      <div class="buy-now--charges__type">
        <div class="buy-now--charges__label">Delivery Charges</div>
        <div class="buy-now--charges__amit">--</div>
      </div>
      <div class="divider"></div>
      <div class="buy-now--charges__type">
        <div class="buy-now--charges__label">Total Charges</div>
        <div class="buy-now--charges__amit">--</div>
      </div>-->
    </div>
    <div class="buy-now--btn">Buy</div>
  </div>
</template>
