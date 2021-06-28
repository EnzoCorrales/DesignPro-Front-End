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
   * Obtiene todos los mensajes del usuario
   * @param {request} data
   */
  // getAll(data) {
  //   return axios.post(RUTA_API + "/Register", data);
  // },
};
