import Vue from "vue";
import VueRouter from "vue-router";
import { store } from "../store/store";

Vue.use(VueRouter);

/**
 * Las Rutas de la aplicacion.
 * Cada vez que se cree una nueva ruta debe registrarse aquí:
 * @path @name @component
 */
const routes = [
  {
    path: "/",
    name: "Index",
    component: () => import("../views/Index.vue"),
  },
  // AUTH =============
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Registro",
    component: () => import("../views/auth/Registro.vue"),
  },
  // USUARIO ==========
  {
    path: "/usuario/:id",
    name: "Perfil",
    component: () => import("../views/user/Perfil.vue"),
  },
  {
    path: "/usuario/:id/modificar",
    name: "Modificar Usuario",
    component: () => import("../views/user/ModificarUsuario.vue"),
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.auth)) {
    if (store.getters.isAuth) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
