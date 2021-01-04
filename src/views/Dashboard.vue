<template>
  <div class="dashboard">
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import SideBar from "@/components/Dashboard/Sidebar.vue";
export default {
  components: {
    SideBar
  }
};
</script>