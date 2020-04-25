import Vue from "vue";
import VueRouter from "vue-router";
import home from "../pages/home.vue";
import index from "../pages/index.vue";
import cart from "../pages/cart.vue";
Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    component: home,
    redirect:'/index',
    children: [
      {
        path: "/index",
        component: index
      }
    ]
  },
  {
    path: "/cart",
    component: cart
  }
];

const router = new VueRouter({
  routes
});

export default router;
