import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import user from "@/api/user";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // Evita modificar datos fuera de las mutaciones
  strict: true,
  // Variables globales
  state: {
    // Obtiene el token local
    token: localStorage.getItem("token") || "",
    // Este usuario de debe obtener de la BD
    user: {
      // id: 1,
      // nombre: "Guillermo",
      // apellido: "De León",
      // fNac: "31/12/1998",
      // correo: "guilledll20@gmail.com",
      // pais: "Uruguay",
      // ciudad: "Maldonado",
      // url: "https://mishorasweb.com",
      // profesion: "Programador",
      // empresa: "MisHoras",
      // descripcion: "Un pibe que hace de todo, Front, Back, Medio y coso pum",
    },
    // Los proyectos del usuario autenticado
    proyectos: {},
  },
  // Obtiene los datos y devuelve procesados
  getters: {
    isAuth: (state) => !!state.token,
  },
  // Permiten modificar los datos del store
  mutations: {
    registrarStateUsuario: (state, data) => {
      state.user.nombre = data.Nombre;
      state.user.apellido = data.Apellido;
      state.user.correo = data.Correo;
      state.user.fNac = data.FNac;
      state.user.pais = data.Pais;
    },
    cargarStateUsuario: (state, data) => {
      state.user.nombre = data.Nombre;
      state.user.apellido = data.Apellido;
      state.user.correo = data.Correo;
      state.user.fNac = data.FNac;
      state.user.pais = data.Pais;
      state.user.ciudad = data.Ciudad;
      state.user.profesion = data.Profesion;
      state.user.empresa = data.Empresa;
      state.user.img = data.Img;
      state.user.url = data.UrlWeb;
      state.user.descripcion = data.Descripcion;
    },
    // Apica el token
    auth_success(state, token) {
      state.token = token;
    },
  },
  // Donde se conecta a la BD y se realizan las mutaciones de los state
  actions: {
    login: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
        user
          .login(data)
          .then((res) => {
            const token = res.data.Token;
            const user = res.data.Usuario;
            //console.log(res.data);
            //console.log(token);
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_success", token);
            commit("cargarStateUsuario", user);
            resolve(res);
          })
          .catch((e) => {
            localStorage.removeItem("token");
            reject(e.response.data.Message);
          });
        commit("cargarStateUsuario", data);
      });
    },
    registrarUsuario: (context, data) => {
      context.commit("registrarStateUsuario", data);
    },
    modificarUsuario: (context, data) => {
      context.commit("cargarStateUsuario", data);
    },
  },
});
