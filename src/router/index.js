import Vue from "vue";
import VueRouter from "vue-router";
import HeaderLight from "../components/header-footer/HeaderLight.vue";
import Footer from "../components/header-footer/Footer.vue";
import Landing from "../views/Landing.vue";
import AdminProducts from "../components/Admin/Layouts/Products.vue";
import AdminBuySell from "../components/Admin/Layouts/BuySell.vue";
import AdminBidsAsks from "../components/Admin/Layouts/BidsAsks.vue";
import AdminOrders from "../components/Admin/Layouts/Orders.vue";
import AdminSettings from "../components/Admin/Layouts/Settings.vue";

// Dashboard
import Sidebar from "../components/Dashboard/Sidebar.vue";
import Buying from "../components/Dashboard/RightSection/Buying.vue";
import Selling from "../components/Dashboard/RightSection/Selling.vue";
import Profile from "../components/Dashboard/RightSection/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    components: {
      default: Landing,
      header: HeaderLight,
      footer: Footer,
    },
  },
  {
    path: "/products",
    name: "Products",
    components: {
      default: () => import("@/views/Products.vue"),
      header: HeaderLight,
      footer: Footer,
    },
  },
  {
    path: "/productview",
    name: "ProductView",
    components: {
      default: () => import("@/views/ProductView.vue"),
      header: HeaderLight,
      footer: Footer,
    },
  },
  {
    path: "/buy",
    name: "Buy",
    components: {
      default: () => import("@/views/Buy.vue"),
      header: HeaderLight,
      footer: Footer,
    },
  },
  {
    path: "/sell",
    name: "Sell",
    components: {
      default: () => import("@/views/Sell.vue"),
      header: HeaderLight,
      footer: Footer,
    },
  },
  {
    path: "/login",
    name: "Login",
    components: {
      default: () => import("@/views/Register.vue"),
      header: HeaderLight,
    },
  },
  {
    path: "/buying",
    name: "Buying",
    components: {
      header: HeaderLight,
      dashboard: Buying,
      sidebar: Sidebar,
    },
  },
  {
    path: "/selling",
    name: "Selling",
    components: {
      header: HeaderLight,
      dashboard: Selling,
      sidebar: Sidebar,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    components: {
      header: HeaderLight,
      dashboard: Profile,
      sidebar: Sidebar,
    },
  },
  {
    path: "/update_profile",
    name: "UpdateProfile",
    components: {
      default: () =>
        import("@/components/Dashboard/UpdateForms/UpdateProfile.vue"),
      header: HeaderLight,
    },
  },
  {
    path: "/buying_info",
    name: "BuyingInfo",
    components: {
      default: () =>
        import("@/components/Dashboard/UpdateForms/BuyingInfo.vue"),
      header: HeaderLight,
    },
  },
  {
    path: "/shipping_info",
    name: "ShippingInfo",
    components: {
      default: () =>
        import("@/components/Dashboard/UpdateForms/ShippingInfo.vue"),
      header: HeaderLight,
    },
  },
  {
    path: "/billing_info",
    name: "BillingInfo",
    components: {
      default: () =>
        import("@/components/Dashboard/UpdateForms/BillingInfo.vue"),
      header: HeaderLight,
    },
  },
  {
    path: "/selling_info",
    name: "SellingInfo",
    components: {
      default: () =>
        import("@/components/Dashboard/UpdateForms/SellerInfo.vue"),
      header: HeaderLight,
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("@/views/Admin.vue"),
    redirect: "/admin/orders",
    children: [
      {
        path: "products",
        component: AdminProducts,
      },
      {
        path: "buysell",
        component: AdminBuySell,
      },
      {
        path: "bidsasks",
        component: AdminBidsAsks,
      },
      {
        path: "orders",
        component: AdminOrders,
      },
      {
        path: "settings",
        component: AdminSettings,
      },
    ],
  },
  {
    path: "/searchtosell",
    name: "SearchToSell",
    components: {
      default: () => import("@/views/SearchToSell.vue"),
      header: HeaderLight,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from, next) => {
  router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
  });
});

export default router;
