<template>
  <div class="admin__sidebar">
    <div class="admin__hamburger change" @click="$emit('showSidebarSelf', false)">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
    <router-link tag="div" to="/" class="admin__sidebar--header">
      <img src="@/assets/images/logo.svg" />
    </router-link>
    <div class="admin__sidebar--links">
      <router-link
        @click.native="$emit('showSidebarSelf', false)"
        to="/admin/products"
        tag="div"
        class="admin__sidebar--link"
        active-class="admin__sidebar--link--active"
      >
        <div class="admin__sidebar--icon">
          <span class="material-icons">reorder</span>
        </div>
        <div class="admin__sidebar--text">{{$t("adminsidebar.products")}}</div>
      </router-link>
      <router-link
        @click.native="$emit('showSidebarSelf', false)"
        to="/admin/buysell"
        tag="div"
        class="admin__sidebar--link"
        active-class="admin__sidebar--link--active"
      >
        <div class="admin__sidebar--icon">
          <span class="material-icons">attach_money</span>
        </div>
        <div class="admin__sidebar--text">{{$t("adminsidebar.buyerssellers")}}</div>
      </router-link>
      <router-link
        @click.native="$emit('showSidebarSelf', false)"
        to="/admin/orders"
        tag="div"
        class="admin__sidebar--link"
        active-class="admin__sidebar--link--active"
      >
        <div class="admin__sidebar--icon">
          <span class="material-icons">archive</span>
        </div>
        <div class="admin__sidebar--text">{{$t("adminsidebar.orders")}}</div>
      </router-link>
      <router-link
        @click.native="$emit('showSidebarSelf', false)"
        to="/admin/bidsasks"
        tag="div"
        class="admin__sidebar--link"
        active-class="admin__sidebar--link--active"
      >
        <div class="admin__sidebar--icon">
          <span class="material-icons">wysiwyg</span>
        </div>
        <div class="admin__sidebar--text">{{$t("adminsidebar.bidsasks")}}</div>
      </router-link>
      <router-link
        @click.native="$emit('showSidebarSelf', false)"
        class="admin__sidebar--link"
        active-class="admin__sidebar--link--active"
        to="/admin/settings"
        tag="div"
      >
        <div class="admin__sidebar--icon">
          <span class="material-icons">settings</span>
        </div>
        <div class="admin__sidebar--text">{{$t("adminsidebar.settings")}}</div>
      </router-link>
      <div class="admin__sidebar--link">
        <div class="admin__sidebar--icon">
          <span class="material-icons">exit_to_app</span>
        </div>
        <div class="admin__sidebar--text">{{$t("adminsidebar.logout")}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

