import axios from "axios";

export const RUTA_API = process.env.VUE_APP_RUTA_API;

/**
 *  DECLARAMOS EL ACCESO A LA API DESDE AQUI
 */
export default {
  /**
   * Elimina el usuario indicado.
   * @param {request} data
   */
  login(data) {
    return axios.post(RUTA_API + "/login", data);
  },
  /**
   * Elimina el usuario indicado.
   * @param {request} data
   */
  register(data) {
    return axios.post(RUTA_API + "/register", data);
  },
  /**
   * Devuelve los datos del usuario.
   * @param {int} id
   */
  find(id) {
    return axios.get(RUTA_API + `/users/${id}`);
  },
  /**
   * Elimina el usuario indicado.
   * @param {int} id
   * @param {request} data
   */
  update(id, data) {
    return axios.put(RUTA_API + `/users/${id}`, data);
  },
  /**
   * Elimina el usuario indicado.
   * @param {int} id
   * @param {request} data
   */
  delete(id, data) {
    return axios.delete(RUTA_API + `/users/${id}`, data);
  },
  /** Cierra la sesión */
  logout() {
    return axios.post(RUTA_API + "/logout");
  },
};
