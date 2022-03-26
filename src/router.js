import Vue from "vue";
import Router from "vue-router";
import InicioView from "../views/InicioView.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "inicio",
      component: InicioView,
    },
    {
      path: "/busqueda",
      name: "busqueda",
      component: () => import("../views/BusquedaView.vue"),
    },
    {
      path: "/ventas",
      name: "ventas",
      component: () => import("../views/VentasView.vue"),
    },
    {
      path: "/total",
      name: "total",
      component: () => import("../views/TotalView.vue"),
    },
    {
      path: "*",
      name: "error404",
      component: () => import("../views/Error404View.vue"),
      redirect: "/",
    },
  ],
});
