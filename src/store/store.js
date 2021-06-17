import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  // Evita modificar datos fuera de las mutaciones
  strict: true,
  // Variables globales
  state: {
    // Este usuario de debe obtener de la BD
    user: {
       id: 1,
       nombre: "Guillermo",
       apellido: "De León",
       fNac: "31/12/1998",
       correo: "guilledll20@gmail.com",
       pais: "Uruguay",
       ciudad: "Maldonado",
       url: "https://mishorasweb.com",
       profesion: "Programador",
       empresa: "MisHoras",
       descripcion: "Un pibe que hace de todo, Front, Back, Medio y coso pum",
    },
    // Los proyectos del usuario autenticado
    proyectos: {},
  },
  // Obtiene los datos y devuelve procesados
  getters: {
    auth: (state) => {
      // Verifica si el usuario inicio sesion
      return Object.keys(state.user).length !== 0 &&
        state.user.constructor === Object
        ? true
        : false;
    },
  },
  // Permiten modificar los datos del store
  mutations: {
    registrarStateUsuario: (state, data) => {
      state.user.nombre = data.Nombre;
      state.user.apellido = data.Apellido;
      state.user.correo = data.Correo;
      state.user.fNac = data.FNac;
      state.user.pais = data.Pais;
      console.log(state.user);
    },
    modificarStateUsuario: (state, data) => {
      state.user.nombre = data.nombre;
      state.user.apellido = data.apellido;
      state.user.correo = data.correo;
      state.user.fNac = data.fNac;
      state.user.pais = data.pais;
      state.user.ciudad = data.ciudad;
      state.user.profesion = data.profesion;
      state.user.empresa = data.empresa;
      state.user.img = data.img;
      state.user.url = data.url;
      state.user.descripcion = data.descripcion;
      console.log(state.user);
    },
  },
  // Donde se conecta a la BD y se realizan las mutaciones de los state
  actions: {
    registrarUsuario: (context, data) => {
      context.commit("registrarStateUsuario", data);
    },
    modificarUsuario: (context, data) => {
      // Aqui se hace el llamado a la API y se ejecuta todo
      context.commit("modificarStateUsuario", data);
    },
  },
});
