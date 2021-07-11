<template>
  <div>
    <!-- Contenido del Proyecto -->
    <!-- <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving"> -->
    <h1 class="title text-center px-2">Upload Content</h1>
    <form @submit.prevent="createProyect">
      <div
        class="text-center mx-12"
        v-for="(input, k) in proyect.Portafolios"
        :key="k"
      >
        <vue-editor
          class="Proyect-Content my-3"
          :id="'content ' + k"
          v-model="input.Contenido"
          placeholder="Ingrese su texto aqui!"
        ></vue-editor>
        <span>
          <i
            @click="remove(k)"
            v-show="k || (!k && proyect.Portafolios.length > 1)"
          >
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
          <i @click="add()">
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
      <!-- Informacion del Proyecto -->
      <div class="justify-between proyect-info mb-0 mx-12">
        <div class="left-side title">
          <p>Portada del Proyecto</p>
          <div class="dropbox">
            <input
              class="input-file"
              ref="portada"
              @change="onFileChange()"
              type="file"
              required
            />
          </div>
          <div class="image-preview" v-if="proyect.Portada.length > 0">
            <img class="preview" :src="proyect.Portada" />
          </div>
        </div>
        <div class="right-side title">
          <p>Titulo del Proyecto</p>
          <input
            type="text"
            placeholder="Titulo"
            v-model="proyect.Titulo"
            required
          />
          <p>Etiquetas</p>
          <input type="text" placeholder="Etiquetas" v-model="Etiquetas" />
          <p>Descripcion</p>
          <input
            type="text"
            placeholder="Descripción"
            v-model="proyect.Descripcion"
            required
          />
          <div class="categorias">
            <br />
            <p>Categorias</p>
            <ul class="w-full">
              <li>
                <input
                  value="Fotografia"
                  type="radio"
                  v-model="proyect.Categoria"
                />Fotografía
              </li>
              <li>
                <input
                  value="Publicidad"
                  type="radio"
                  v-model="proyect.Categoria"
                />Publicidad
              </li>
              <li>
                <input
                  value="Video"
                  type="radio"
                  v-model="proyect.Categoria"
                />Video
              </li>
              <li>
                <input
                  value="Diseño Grafico"
                  type="radio"
                  v-model="proyect.Categoria"
                />Diseño Grafico
              </li>
              <li>
                <input value="3D" type="radio" v-model="proyect.Categoria" />3D
              </li>
              <li>
                <input
                  value="Pintura"
                  type="radio"
                  v-model="proyect.Categoria"
                />Pintura
              </li>
              <li>
                <input
                  value="Audio"
                  type="radio"
                  v-model="proyect.Categoria"
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
import { VueEditor } from "vue2-editor";
import moment from "moment";
export default {
  components: {
    VueEditor,
  },
  data() {
    return {
      Etiquetas: "",
      proyect: {
        Titulo: "",
        Portada: {},
        Visitas: 0,
        Categoria: "",
        Descripcion: "",
        FechaPub: null,
        Tags: [],
        Portafolios: [{}],
      },
      img: "",
    };
  },
  computed: {
    user: function() {
      return this.$store.state.user;
    },
    setFecha() {
      let fecha = moment()
        .format("L")
        .split("/");
      return fecha[2] + "-" + fecha[1] + "-" + fecha[0];
    },
  },
  methods: {
    onFileChange() {
      this.img = this.$refs.portada.files[0];
      var reader = new FileReader();
      reader.onload = (e) => {
        this.proyect.Portada = e.target.result;
      };
      reader.readAsDataURL(this.img);
    },
    createProyect() {
      let array = this.Etiquetas.split(/[,#+_" "]/);
      array.forEach((input) => {
        console.log("Contenido " + input);
        this.proyect.Tags.push({ Tag: input });
      });
      this.proyect.FechaPub = this.setFecha;
      this.proyect.IdAutor = this.user.Id;
      this.$store
        .dispatch("createProyect", this.proyect)
        .then(() => {
          this.$router.push({ path: "/crear-proyecto" });
        })
        .catch((e) => (this.error = e));
    },
    add() {
      this.proyect.Portafolios.push({});
    },
    remove(index) {
      this.proyect.Portafolios.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
@media (max-width: 768px) {
  .proyect-info {
    display: grid;
    grid-template-columns: 1fr;
    margin: auto;
    margin-left: 5%;
    outline: 2px grey;
    background: lightcyan;
    color: dimgray;
    text-align: center;
  }
}
</style>
