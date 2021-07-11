import axios from "axios";

export const RUTA_API = process.env.VUE_APP_RUTA_API + "/proyecto";

export default {
  /**
   * Obtiene todo los proyectos publicados
   */
  getAll() {
    return axios.get(RUTA_API + `/GetAll`);
  },
  /**
   * Obtiene un proyecto especifico por id
   * @param {request} id
   */
  get(id) {
    return axios.get(RUTA_API + `/Get?id=${id}`);
  },
  /**
   * Obtiene todos los proyectos de un usaurio
   * @param {request} id
   */
  allFromUser(id) {
    return axios.get(RUTA_API + `/GetAllFromUser?idUsuario=${id}`);
  },
  /**
   * Crea un nuevo proyecto
   * @param {request} data
   */
  create(data) {
    return axios.post(RUTA_API + "/Create", data);
  },
  /**
   * Suma una vista al proyecto
   * @param {request} id
   */
  view(id) {
    return axios.put(RUTA_API + `/VisitarProyecto?idProyecto=${id}`);
  },
  /**
   * Obtiene una lista de los proyectos valorados
   * @param {request} id
   */
  getProyectosValorados(id) {
    return axios.get(RUTA_API + `/GetProyectosValorados?idUsuario=${id}`);
  },
  /**
   * Da like a un proyecto
   * @param {request} data
   */
  like(data) {
    return axios.post(RUTA_API + "/ValorarProyecto", data);
  },
  /**
   * Quita el like
   * @param {request} data
   */
  dislike(data) {
    return axios.delete(RUTA_API + "/QuitarValoracion", data);
  },
  /**
   * Elimina el proyecto
   * @param {request} id
   */
  delete(id) {
    return axios.delete(RUTA_API + `/Remove?id=${id}`);
  },
};
