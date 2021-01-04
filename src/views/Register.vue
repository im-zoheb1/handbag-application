<template>
  <div class="container">
    <div class="register">
      <div class="register--inner">
        <div class="register--tabs">
          <div
            class="register--tab"
            :class="{'register--tab__active': (currentForm === tab)}"
            @click="currentForm = tab"
            v-for="tab in tabs"
            :key="tab"
          >{{ tab }}</div>
        </div>
        <div class="register--form">
          <component :is="currentForm.split(' ').join('-')"></component>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LogIn from "@/components/Register/LogIn.vue";
import SignUp from "@/components/Register/SignUp.vue";
export default {
  components: {
    LogIn,
    SignUp
  },
  data() {
    return {
      currentForm: "log in",
      tabs: ["log in", "sign up"]
    };
  }
};
</script>