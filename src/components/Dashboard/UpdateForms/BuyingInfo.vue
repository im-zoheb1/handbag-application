<template>
  <div class="buysell center-form">
    <div class="buysell--pay-method">
      <div class="buysell--pay-method__title">Billing/Shipping</div>
      <div class="buysell--pay-method__sub-title">Please choose your billing and shipping method</div>
      <template v-if="!creditCard">
        <div class="buysell--pay-method__methods">
          <div class="buysell--pay-method__method">
            <img src="@/assets/images/paypal.svg" />
          </div>
          <span class="material-icons">keyboard_arrow_down</span>
        </div>
        <div class="buysell--pay-method__methods" @click="creditCard = !creditCard">
          <div class="buysell--pay-method__method">
            <img src="@/assets/images/credit-card-visa.svg" />
          </div>
          <div class="buysell--pay-method__method">
            <img src="@/assets/images/discover.svg" />
          </div>
          <div class="buysell--pay-method__method">
            <img src="@/assets/images/american-express.svg" />
          </div>
          <div class="buysell--pay-method__method">Credit Card</div>
          <span class="material-icons">keyboard_arrow_down</span>
        </div>
      </template>
      <template v-else>
        <div class="buysell--pay-method__card">
          <div class="buysell--pay-method__card-label">
            <div class="buysell--pay-method__card-icon">
              <i class="material-icons">credit_card</i>
            </div>
            <span>Use Credit Card for Billing</span>
            <div class="material-icons" @click="creditCard = !creditCard">close</div>
          </div>
          <div class="buysell--pay-method__card-form">
            <div class="buysell--pay-method__form-label">Credit Card</div>
            <div class="buysell--pay-method__input single">
              <input type="text" placeholder="Card Number" />
            </div>
            <div class="buysell--pay-method__input multiple">
              <input type="text" placeholder="Expires" />
              <input type="text" placeholder="CVV" />
            </div>
            <div class="buysell--pay-method__form-label">Billing Info</div>
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
            <div class="buysell--buttons">
              <div class="btn btn--lighten" @click="$router.go(-1)">Cancel</div>
              <div class="btn btn--primary">Submit</div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      paymentMethod: false,
      creditCard: false
    };
  }
};
</script>

<style lang="scss">
.center-form {
  max-width: 45rem !important;
  margin: 12rem auto 5rem;
}
</style>