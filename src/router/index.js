import Vue from "vue";
import VueRouter from "vue-router";
import Auth from '@okta/okta-vue';

Vue.use(VueRouter);

/**
 * Las Rutas de la aplicacion.
 * Cada vez que se cree una nueva ruta debe registrarse aquí:
 * @path @name @component
 */
const routes = [
  {
    path: '/implicit/callback',
    component: Auth.handleCallback()
  },
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
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
