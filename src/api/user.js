import axios from "axios";

export const RUTA_API = process.env.VUE_APP_RUTA_API + "/usuario";

/**
 *  DECLARAMOS EL ACCESO A LA API DESDE AQUI
 */
export default {
  /**
   * Elimina el usuario indicado.
   * @param {request} data
   */
  login(data) {
    return axios.post(
      RUTA_API + `/Login?correo=${data.correo}&password=${data.password}`
    );
  },
  /**
   * Elimina el usuario indicado.
   * @param {request} data
   */
  register(data) {
    return axios.post(RUTA_API + "/Register", data);
  },
  /**
   * Devuelve los datos del usuario.
   * @param {int} id
   */
  find(id) {
    return axios.get(RUTA_API + `/Get?idUsuario=${id}`);
  },
  /**
   * Elimina el usuario indicado.
   * @param {int} id
   * @param {request} data
   */
  update(data) {
    return axios.put(RUTA_API + "/Update", data);
  },
  /**
   * Elimina el usuario indicado.
   * @param {int} id
   * @param {request} data
   */
  delete(id, data) {
    return axios.delete(RUTA_API + `/${id}`, data);
  },
};
