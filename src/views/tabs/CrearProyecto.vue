<template>
    <div>
        <!-- Contenido del Proyecto -->
        <!-- <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving"> -->
        <h1 class="title text-center px-2">Upload Content</h1>

        <div class="text-center mx-12" v-for="(input,k) in inputs" :key="k">
          <textarea class="text-input title w-full h-8"  :id="'textarea '+k" type="text" v-model="input.name" placeholder="Ingrese su texto aqui!"></textarea>
          <span>
              <i @click="remove(k)" v-show="k || ( !k && inputs.length > 1)">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                </svg>
              </i>
              <i @click="add(k)" v-show="k == inputs.length-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </i>
          </span>
        </div>
        <div class="dropbox title mx-12">
        <p>
            Drag your file(s) here to begin<br />
            or click to browse
        </p>
        <input class="input-file" type="file" multiple />
        </div>
        <!-- </form> -->
        <!-- Informacion del Proyecto -->
        <div class=" justify-between proyect-info mb-0 ">
            <div class="left-side title">
                <p>Portada del Proyecto</p>
                <div class="dropbox">
                    <input class="input-file" type="file" multiple/>
                </div>
            </div>
            <div class="right-side title">
                <p>Titulo del Proyecto</p>
                <input type="text" placeholder="Titulo" />

                <p>Etiquetas</p>
                <input type="text" placeholder="Etiquetas" />

                <p>Herramientas Utilizadas</p>
                <input type="text" placeholder="Herramientas" />
                <div class="categorias">
                    <br />
                    <p>Categorias</p>
                    <ul class="w-full">
                        <li><input type="checkbox">Fotografía</li>
                        <li><input type="checkbox">Publicidad</li>
                        <li><input type="checkbox">Video</li>
                        <li><input type="checkbox">Diseño Grafico</li>
                        <li><input type="checkbox">3D</li>
                        <li><input type="checkbox">Pintura</li>
                        <li><input type="checkbox">Audio</li>                              
                    </ul>
                </div>
            </div>
        </div>
        <div class="Opciones mr-12 pr-3">
            <button id="btn-1" class="mx-1 h-6">
                <router-link class="a text-black" to="./Home">
                    Cancelar
                </router-link>
            </button>
            <button class="mx-1 h-6" id="btn-2" type="submit">Publicar</button>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
        inputs: [
            {
                name: ''
            }
        ],
        form: {
            tituloProyecto:"",
            etiquetasProyecto:"",
            herramientasProyecto:"",
            cateogirasProyecto: [],
            portadaProyecto: null,
            contenidoProyecto: [],
        },
      file: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.file = this.$refs.file.files[0];
    },
    submitFile() {
      let formData = new formData();
      formData.append("file", this.file);
      axios
        .post("/single-file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(function () {
          console.log("SUCCESS!!");
        })
        .catch(function () {
          console.log("FAILURE!!");
        });
    },
    add() {
            this.inputs.push({ name: '' });
    },
    remove(index) {
            this.inputs.splice(index, 1);
    },
  },
};
</script>
<style lang="scss">
  div{
    overflow: hidden;
  }
</style>