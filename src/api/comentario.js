import axios from "axios";

export const RUTA_API = process.env.VUE_APP_RUTA_API + "/comentario";

export default {
  /**
   * Obtiene todo los comentarios de un proyecto
   */
  getAll(id) {
    return axios.get(RUTA_API + `/GetAllByProyecto?idProyecto=${id}`);
  },
  /**
   * Crea un nuevo comentario
   * @param {request} data
   */
  create(data) {
    return axios.post(RUTA_API + "/Create", data);
  },
  /**
   * Elimina el comentario indicado.
   * @param {int} id
   */
  delete(id) {
    return axios.delete(RUTA_API + `/Remove?id=${id}`);
  },
};
