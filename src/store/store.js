import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
   // Evita modificar datos fuera de las mutaciones
   strict: true,
   // Variables globales
   state: {
      // Este usuario de debe obtener de la BD
      user: {
         id: 1,
         nombre: 'Guillermo',
         apellido: 'De León',
         fNac: '31/12/1998',
         correo: 'guilledll20@gmail.com',
      },
      // Los proyectos del usuario autenticado
      proyectos: {},
   },
   // Obtiene los datos y devuelve procesados
   getters: {
      auth: (state) => { // Verifica si el usuario inicio sesion
         return Object.keys(state.user).length === 0 && state.user.constructor === Object
            ? false
            : true;
      },
   },
   // Permiten modificar los datos del store
   mutations: {
      modificarStateUsuario: (state, data) => {
         state.user.nombre = data.nombre;
         state.user.apellido = data.apellido;
         state.user.correo = data.correo;
         state.user.fNac = data.fNac;
         state.user.pais = data.pais;
         state.user.profesion = data.profesion;
         state.user.empresa = data.empresa;
         state.user.imgPerfil = data.imgPerfil;
         state.user.urlWeb = data.urlWeb;
         state.user.descripcion = data.descripcion;
         state.user.password = data.password;
      }
   },
   // Donde se conecta a la BD y se realizan las mutaciones de los state
   actions: {
      modificarUsuario: (context, data) => {
         // Aqui se hace el llamado a la API y se ejecuta todo
         context.commit("modificarStateUsuario", data);
      }
   },
});