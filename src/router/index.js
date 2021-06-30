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
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
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
  {
    path: "/usuario/:id/mensajes",
    name: "Mensajes del Usuario",
    component: () => import("../views/user/Mensajes.vue"),
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
