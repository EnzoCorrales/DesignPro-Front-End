import axios from "axios";

export const RUTA_API = process.env.VUE_APP_RUTA_API + "/busqueda";

export default {    
    Busqueda(buscar) {
        return axios.get(RUTA_API + `/Busqueda?busqueda=${buscar}`);
    }
};