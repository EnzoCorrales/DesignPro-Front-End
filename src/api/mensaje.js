import axios from "axios";

export const RUTA_API = process.env.VUE_APP_RUTA_API + "/mensaje";

export default {
  /**
   * Envía el mensaje
   * @param {request} data
   */
  send(data) {
    return axios.post(RUTA_API + "/Create", data);
  },
  /**
   * Actualiza el visto
   * @param {request} data
   */
  visto(data) {
    return axios.put(RUTA_API + "/Visto", data);
  },
  /**
   * Obtiene todos los mensajes del usuario
   * @param {request} id
   */
  getAll(id) {
    return axios.get(RUTA_API + `/GetAllByReceptor?id=${id}`);
  },
};
