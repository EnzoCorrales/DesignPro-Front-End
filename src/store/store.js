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
    token: sessionStorage.getItem("token") || null,
    // Este usuario de debe obtener de la BD
    user:
      JSON.parse(sessionStorage.getItem("user")) ||
      {
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
    setUserInfo(state, user) {
      //console.log("DataSetUser: ");
      //console.log(userData);
      sessionStorage.setItem("user", JSON.stringify(user));
      state.user = user;
      //console.log("User: ");
      //console.log(JSON.parse(sessionStorage.getItem("user")));
    },
    removeUser(state) {
      sessionStorage.removeItem("user");
      state.user = {};
    },
    // TOKEN ============
    setToken(state, token) {
      sessionStorage.setItem("token", token);
      state.token = token;
    },
    removeToken(state) {
      sessionStorage.removeItem("token");
      state.token = null;
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
            axios.defaults.headers.common["Authorization"] = token;
            commit("setToken", token);
            commit("setUserInfo", user);
            resolve(res);
          })
          .catch((e) => {
            sessionStorage.removeItem("token");
            reject(e.response.data.Message);
          });
      });
    },
    register: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
        user
          .register(data)
          .then((res) => {
            const token = res.data.Token;
            const user = res.data.Usuario;
            //console.log(res.data);
            //console.log(token);
            sessionStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("setToken", token);
            commit("registrarStateUsuario", user);
            resolve(res);
          })
          .catch((e) => {
            sessionStorage.removeItem("token");
            reject(e.response.data.Message);
          });
      });
    },
    logout: ({ commit }) => {
      commit("removeToken");
      commit("removeUser");
    },
    updateUser: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
        user
          .update(data)
          .then((res) => {
            //console.log("res: ");
            //console.log(res.data);
            commit("setUserInfo", res.data.Usuario);
            resolve(res);
          })
          .catch((e) => reject(e.response.data.Message));
      });
    },
    getUser: (context, data) => {
      return new Promise((resolve, reject) => {
        user
          .find(data)
          .then((res) => resolve(res.data))
          .catch((e) => reject(e.response.data.Message));
      });
    },
  },
});
