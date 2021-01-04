<template>
  <div class="admin">
    <div class="admin__inner">
      <AdminSidebar v-if="hamburger" @showSidebarSelf="sidebarMethod" />
      <admin-section @showSidebar="sidebarMethod"></admin-section>
    </div>
  </div>
</template>

<script>
import AdminSidebar from "@/components/Admin/AdminSidebar.vue";
import AdminSection from "@/components/Admin/AdminSection.vue";
export default {
  components: {
    AdminSidebar,
    AdminSection
  },
  data() {
    return {
      hamburger: false
    };
  },
  methods: {
    sidebarMethod(value) {
      if (window.innerWidth < 600) {
        this.hamburger = value;
      }
    },
    updateSidebar() {
      window.innerWidth < 600
        ? (this.hamburger = false)
        : (this.hamburger = true);
    }
  },
  mounted() {
    this.updateSidebar();
    window.addEventListener("resize", this.updateSidebar);
  }
};
</script>