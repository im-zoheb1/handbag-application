<template>
  <div class="dashboard__left">
    <div class="sidebar">
      <div class="sidebar__profile">Haider Yaqoob</div>
      <div class="sidebar__links">
        <router-link
          tag="div"
          :to="{name: 'Buying'}"
          class="sidebar__links--item"
          active-class="sidebar__links--active"
        >
          <div class="sidebar__links--icon">
            <span class="material-icons">add_shopping_cart</span>
          </div>
          <div class="sidebar__links--text">{{$t("nav.myaccount.buying")}}</div>
        </router-link>
        <router-link
          tag="div"
          :to="{name: 'Selling'}"
          class="sidebar__links--item"
          active-class="sidebar__links--active"
        >
          <div class="sidebar__links--icon">
            <span class="material-icons">person_outline</span>
          </div>
          <div class="sidebar__links--text">{{$t("nav.myaccount.selling")}}</div>
        </router-link>
        <router-link
          tag="div"
          :to="{name: 'Profile'}"
          class="sidebar__links--item"
          active-class="sidebar__links--active"
        >
          <div class="sidebar__links--icon">
            <span class="material-icons">local_atm</span>
          </div>
          <div class="sidebar__links--text">{{$t("nav.myaccount.profile")}}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>