import Vue from "vue";
import VueRouter from "vue-router";
// @ts-ignore
import Items from "../views/Items.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Items",
    component: Items
  }
];

const router = new VueRouter({
  routes
});

export default router;
