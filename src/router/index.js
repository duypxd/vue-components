import Vue from "vue";
import Router from "vue-router";
import paths from "./paths";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

Vue.use(Router);
const router = new Router({
  base: "/",
  mode: "history",
  linkActiveClass: "active",
  routes: paths
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
