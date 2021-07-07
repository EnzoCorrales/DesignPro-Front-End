import axios from "axios";

export const RUTA_API = process.env.VUE_APP_RUTA_API + "/proyecto";

export default {
    /**
     * Elimina el usuario indicado.
     * @param {request} data
     */
    GetAll() {
        return axios.get(RUTA_API + `/GetAll`);
    },

    Get(id){
        return axios.get(RUTA_API + `/Get?id=${id}`);
    },

    Create(data){
        return axios.post(RUTA_API + '/Create',data) ;
    },
}