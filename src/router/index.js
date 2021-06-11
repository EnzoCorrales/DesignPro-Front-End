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
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  // TABS ============
  {
    path: "/explorar",
    name: "Explorar",
    component: () => import("../views/tabs/Explorar.vue"),
  },
  {
    path: "/crear-proyecto",
    name: "CrearProyecto",
    component: () => import("../views/tabs/CrearProyecto.vue"),
  },
  {
    path: "/mis-proyectos",
    name: "MisProyectos",
    component: () => import("../views/tabs/MisProyectos.vue"),
  },
  {
    path: "/proyectos-valorados",
    name: "ProyectosValorados",
    component: () => import("../views/tabs/ProyectosValorados.vue"),
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
