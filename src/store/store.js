import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import user from "@/api/user";
import proyecto from "@/api/proyecto";
import mensaje from "@/api/mensaje";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // Evita modificar datos fuera de las mutaciones
  strict: true,
  // Variables globales
  state: {
    token: sessionStorage.getItem("token") || null,
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
    cargarStateUsuario: (state, data) => {
      state.user.id = data.id;
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
      sessionStorage.setItem("user", JSON.stringify(user));
      state.user = user;
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
    // USUARIO ===============
    login: ({ commit }, data) => {
      return new Promise((resolve, reject) => {
        user
          .login(data)
          .then((res) => {
            const token = res.data.Token;
            const user = res.data.Usuario;
            axios.defaults.headers.common = {
              Authorization: `Bearer ${token}`,
            };
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
            sessionStorage.setItem("token", token);
            axios.defaults.headers.common = {
              Authorization: `Bearer ${token}`,
            };
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
    setTokenOnLoad: () => {
      let token = sessionStorage.getItem("token");
      axios.defaults.headers.common = {
        Authorization: `Bearer ${token}`,
      };
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
    // MENSAJES ===============
    enviarMensaje: (context, data) => {
      return new Promise((resolve, reject) => {
        mensaje
          .send(data)
          .then((res) => resolve(res))
          .catch((e) => reject(e.response.data.Message));
      });
    },
    setVisto: (context, data) => {
      return new Promise((resolve, reject) => {
        mensaje
          .visto(data)
          .then((res) => {
            console.log(res.data);
            resolve(res);
          })
          .catch((e) => reject(e.response.data.Message));
      });
    },
    obtenerMensajes: (context, data) => {
      return new Promise((resolve, reject) => {
        mensaje
          .getAll(data)
          .then((res) => resolve(res.data))
          .catch((e) => reject(e.response.data.Message));
      });
    },
    // PROYECTOS ===============
    createProyect: (context, data) => {
      return new Promise((resolve, reject) => {
        proyecto
          .create(data)
          .then((res) => resolve(res.data))
          .catch((e) => reject(e.response.data.Message));
      });
    },
    getProyectosUsuario: (context, id) => {
      return new Promise((resolve, reject) => {
        proyecto
          .allFromUser(id)
          .then((res) => resolve(res.data))
          .catch((e) => reject(e.response.data.Message));
      });
    },
    getAllProyectos: () => {
      return new Promise((resolve, reject) => {
        proyecto
          .getAll()
          .then((res) => resolve(res.data))
          .catch((e) => reject(e.response.data.Message));
      });
    },
    // SEGUIMIENTO ===============
    seguir: (context, data) => {
      return new Promise((resolve, reject) => {
        user
          .seguir(data)
          .then(() => resolve(true))
          .catch((e) => reject(e.response.data.Message));
      });
    },
    dejarDeSeguir: (context, data) => {
      return new Promise((resolve, reject) => {
        user
          .dejarDeSeguir(data)
          .then(() => resolve(true))
          .catch((e) => reject(e.response.data.Message));
      });
    },
    getAllSiguiendo: (context, id) => {
      return new Promise((resolve, reject) => {
        user
          .getAllSiguiendo(id)
          .then((res) => resolve(res.data))
          .catch((e) => reject(e.response.data.Message));
      });
    },
  },
});
