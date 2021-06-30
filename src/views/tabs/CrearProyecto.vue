<template>
  <div>
    <!-- Contenido del Proyecto -->
    <!-- <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving"> -->
    <h1 class="title text-center px-2">Upload Content</h1>
    <div>
    </div>
    <form name="CrearProyecto ">
      <div
        class="text-center mx-12"
        v-for="(input, k) in proyect.inputs"
        :key="k"
      >
        <vue-editor
          class="Proyect-Content my-3"
          :id="'textarea ' + k"
          v-model="input.name"
          placeholder="Ingrese su texto aqui!"
        ></vue-editor>
        <span>
          <i @click="remove(k)" v-show="k || (!k && proyect.inputs.length > 1)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M18 12H6"
              />
            </svg>
          </i>
          <i @click="add(k)" v-show="k == proyect.inputs.length - 1"> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
          </i>
        </span>
      </div>
      <!-- esta parte se puede eliminar hay que testear si el vue editor maneja bien las imagenes, asi usamos el mismo input para texto y imagenes -->
      <!-- <div class="dropbox title mx-12">
        <p>
          Drag your file(s) here to begin<br />
          or click to browse
        </p>
        <input
          class="input-file"
          ref="contenido"
          @change="uploadContenido()"
          type="file"
          multiple
        />
      </div> -->  
      <!-- </form> -->
      <!-- Informacion del Proyecto -->
      <div class="justify-between proyect-info mb-0">
        <div class="left-side title">
          <p>Portada del Proyecto</p>
          <div class="dropbox">
            <input
              class="input-file"
              ref="portada"
              @change="onFileChange()"
              type="file"
            />
          </div>
          <div class="image-preview" v-if="urlIMG.length > 0">
            <img class="preview" :src="urlIMG" />
          </div>
        </div>
        <div class="right-side title">
          <p>Titulo del Proyecto</p>
          <input
            type="text"
            placeholder="Titulo"
            v-model="proyect.tituloProyecto"
          />

          <p>Etiquetas</p>
          <input
            type="text"
            placeholder="Etiquetas"
            v-model="proyect.etiquetasProyecto"
          />

          <p>Descripcion</p>
          <input
            type="text"
            placeholder="Descripción"
            v-model="proyect.descripcionProyecto"
          />
          <div class="categorias">
            <br />
            <p>Categorias</p>
            <ul class="w-full">
              <li>
                <input
                  value="Fotografia"
                  type="checkbox"
                  v-model="proyect.categoriasProyecto"
                />Fotografía
              </li>
              <li>
                <input
                  value="Publicidad"
                  type="checkbox"
                  v-model="proyect.categoriasProyecto"
                />Publicidad
              </li>
              <li>
                <input
                  value="Video"
                  type="checkbox"
                  v-model="proyect.categoriasProyecto"
                />Video
              </li>
              <li>
                <input
                  value="Diseño Grafico"
                  type="checkbox"
                  v-model="proyect.categoriasProyecto"
                />Diseño Grafico
              </li>
              <li>
                <input
                  value="3D"
                  type="checkbox"
                  v-model="proyect.categoriasProyecto"
                />3D
              </li>
              <li>
                <input
                  value="Pintura"
                  type="checkbox"
                  v-model="proyect.categoriasProyecto"
                />Pintura
              </li>
              <li>
                <input
                  value="Audio"
                  type="checkbox"
                  v-model="proyect.categoriasProyecto"
                />Audio
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="Opciones mr-12 pr-3">
        <button id="btn-1" class="mx-1 h-6">
          <router-link class="a text-black" to="./Home"> Cancelar </router-link>
        </button>
        <button class="mx-1 h-6" id="btn-2" type="submit">Publicar</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";

import { VueEditor } from "vue2-editor";

export default {
  components: {
    VueEditor
  },
  data() {
    return {
      proyect: {
        tituloProyecto: "",
        portadaProyecto: "",
        idAutorProyecto: null,
        visitasProyecto: null,
        categoriasProyecto: [],
        descripcionProyecto: "",
        fechaProyecto: null,
        comentariosProyecto: [],
        etiquetasProyecto: "",
        inputs: [{ name: "" }],
        imagenesProyecto: [{}],
        videosProyecto: [{}],
        contenidoProyecto: [],
      },
      urlIMG: "",
      file: "",
      content: {
        ops: [],
      },
    };
  },

  methods: {
    uploadContenido() {
      const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
      const validVideoTypes= ['video/mp4', 'video/mkv'];
      console.log("Contenido del proyecto es");
      for(let i=0;i < this.$refs.contenido.files.length;i++){
        console.log( this.$refs.contenido.files[i]);
        this.proyect.contenidoProyecto.push(this.$refs.contenido.files[i]);
      }
      for(let i=0;i < this.proyect.contenidoProyecto.length ;i++){
          const  fileType = this.proyect.contenidoProyecto[i]['type'];
          if (validImageTypes.includes(fileType)) {
              console.log("Contenido del IMAGENES es");
              console.log(this.$refs.contenido.files[i]);
              this.proyect.imagenesProyecto.push(this.proyect.contenidoProyecto[i]);
          }
          if (validVideoTypes.includes(fileType)) {
              console.log("Contenido de VIDEOS es");
              console.log(this.$refs.contenido.files[i]);
              this.proyect.videosProyecto.push(this.proyect.contenidoProyecto[i]);
          }
      }

    },

    onFileChange() {
      this.proyect.portadaProyecto = this.$refs.portada.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        this.urlIMG = e.target.result;
      };
      reader.readAsDataURL(this.proyect.portadaProyecto);
      console.log(this.proyect.portadaProyecto);
    },

    createProyect() {
      const current = new Date();
      this.proyect.fechaProyecto = `${current.getDate()}/${
        current.getMonth() + 1
      }/${current.getFullYear()}`;
    },
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
      this.proyect.inputs.push({ name: "" });
    },
    remove(index) {
      this.proyect.inputs.splice(index, 1);
    },
  },
};
</script>
<style lang="scss">
</style>