<template>
  <div class="update-profile">
    <div class="update-profile--heading">Profile</div>
    <div class="update-profile--sub">Change your profile settings</div>
    <div class="update-profile--form">
      <div class="update-profile--label">Name</div>
      <div class="update-profile--input multiple">
        <div class="form-input">
          <input type="text" placeholder="First Name" />
        </div>
        <div class="form-input">
          <input type="text" placeholder="Last Name" />
        </div>
      </div>
      <div class="update-profile--label">User Info</div>
      <div class="update-profile--input single">
        <div class="form-input">
          <input type="text" placeholder="Username" />
        </div>
      </div>
      <div class="update-profile--label">Selected Country</div>
      <div class="update-profile--input single">
        <div class="form-input">
          <input type="text" placeholder="EUR" />
        </div>
      </div>
      <div class="update-profile--label">Contact Info</div>
      <div class="update-profile--input single">
        <div class="form-input">
          <input type="text" placeholder="Email" />
        </div>
      </div>
      <div class="update-profile--buttons">
        <div class="btn btn--lighten" @click="$router.go(-1)">Cancel</div>
        <div class="btn btn--primary">Submit</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.update-profile {
  margin: 12rem auto 5rem;
  max-width: 45rem;
  padding: 0 5px;
  font-family: "Roboto", sans-serif;
  &--heading {
    font-size: 3.5rem;
    font-weight: 500;
    color: #444;
    margin-bottom: 5px;
  }
  &--sub {
    text-transform: uppercase;
    font-weight: 700;
    color: #888;
    font-size: 1.35rem;
    margin-bottom: 2rem;
  }
  &--label {
    font-size: 1.6rem;
    color: #555;
    font-weight: 500;
    margin-bottom: 7px;
    &:not(:first-child) {
      margin-top: 7px;
    }
  }
  &--input {
    .form-input {
      input {
        font-size: 1.7rem;
      }
      &:not(:last-child) {
        margin-right: 1rem;
      }
      width: 100%;
    }
  }
  &--input.multiple {
    display: flex;
    flex-direction: row;
  }

  &--buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
    .btn {
      font-size: 1.7rem;
      padding: 8px 16px;
    }
  }
}
</style>