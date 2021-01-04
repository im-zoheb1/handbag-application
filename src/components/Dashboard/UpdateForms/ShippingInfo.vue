<template>
  <div class="buysell center-form">
    <div class="buysell--pay-method">
      <div class="buysell--pay-method__title">Shipping</div>
      <div class="buysell--pay-method__sub-title">Please enter your shipping info</div>
      <div class="buysell--pay-method__card">
        <div class="buysell--pay-method__card-form">
          <div class="buysell--pay-method__form-label">Shipping Info</div>
          <div class="buysell--pay-method__input single">
            <input type="text" placeholder="First Name" />
          </div>
          <div class="buysell--pay-method__input single">
            <input type="text" placeholder="Last Name" />
          </div>
          <div class="buysell--pay-method__input single">
            <input type="text" placeholder="Country" />
          </div>
          <div class="buysell--pay-method__input single">
            <input type="text" placeholder="Address" />
          </div>
          <div class="buysell--pay-method__input single">
            <input type="text" placeholder="Address 2" />
          </div>
          <div class="buysell--pay-method__input multiple">
            <input type="text" placeholder="State/Province/Region" />
            <input type="text" placeholder="Zip/Postal Code" />
          </div>
          <div class="buysell--pay-method__input single">
            <input type="text" placeholder="Phone Number" />
          </div>
        </div>
      </div>
    </div>
    <div class="buysell--buttons">
      <div class="btn btn--lighten" @click="$router.go(-1)">Cancel</div>
      <div class="btn btn--primary">Submit</div>
    </div>
  </div>
</template>

<style lang="scss">
.center-form {
  max-width: 45rem !important;
  margin: 12rem auto 10rem;
}
</style>