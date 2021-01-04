<template>
  <div class="login">
    <div class="form-input">
      <input type="email" placeholder="Email Address" />
    </div>
    <div class="form-input">
      <input type="password" placeholder="Password" />
    </div>
    <div class="register-btn" @click="testing">Log In</div>
    <div class="do-you-accept">
      By logging in, you agree to the
      <span class="highlighting-text-form">&nbsp;Terms of Service&nbsp;</span>
      and
      <span class="highlighting-text-form">&nbsp;Privacy &nbsp;Policy</span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    testing() {
      console.log("hello");
    },
    // login() {
    //   console.log("hello");
    //   this.axios
    //     .post("/signin/seller", {
    //       email: "hassan@gmail.com",
    //       psswrd: "236788",
    //     })
    //     .then((res) => {
    //       console.log(res);
    //     });
    // },
  },
};
</script>
