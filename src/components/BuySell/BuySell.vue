<template>
  <div class="buysell">
    <div class="buysell--form">
      <template v-if="!paymentMethod">
        <div class="buysell--tabs">
          <template v-for="tab in tabs">
            <div
              class="buysell--tab"
              :class="{'buysell--tab__active': (tab === currentTab.split('-').join(' '))}"
              :key="tab"
              @click="$emit('updateTab', tab.split(' ').join('-'))"
            >{{ tab }}</div>
          </template>
        </div>
        <component :is="currentTab"></component>
      </template>
      <template v-else>
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
                  <div class="btn btn--lighten">Cancel</div>
                  <div class="btn btn--primary">Submit</div>
                </div>
              </div>
            </div>
          </template>
        </div>
      </template>
    </div>
    <template v-if="!paymentMethod">
      <div class="divider"></div>
      <div class="buysell--add-details">
        <div class="buysell--add-details__item">
          <i class="material-icons">credit_card</i>
          <div class="buysell--add-details__item-text">Add Payment Method</div>
          <i class="material-icons" @click="paymentMethod = !paymentMethod">edit</i>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import PlaceBid from "@/components/Forms/BuySell/Bid.vue";
import BuyNow from "@/components/Forms/BuySell/Buy.vue";
import PlaceAsk from "@/components/Forms/BuySell/Ask.vue";
import SellNow from "@/components/Forms/BuySell/Sell.vue";
export default {
  components: {
    PlaceBid,
    BuyNow,
    PlaceAsk,
    SellNow
  },
  props: {
    tabs: {
      type: Array,
      required: true
    },
    currentTab: {
      required: true
    }
  },
  data() {
    return {
      paymentMethod: false,
      creditCard: false
    };
  }
};
</script>