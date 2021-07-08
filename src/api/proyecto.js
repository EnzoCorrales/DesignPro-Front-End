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
};
