<template>
  <div class="max-w-xl mx-auto mt-5">
    <!-- Contenido del Proyecto -->
    <!-- <form enctype="multipart/form-data" novalidate v-if="isInitial || isSaving"> -->
    <h1 class="title text-center px-2">Upload Content</h1>
    <form
      @submit.prevent="createProyect"
      class="align-center flex m-auto dir-col"
    >
      <div
        class="flex align-center justify-center dir-col text-center mx-auto"
        v-for="(input, k) in proyect.Portafolios"
        :key="k"
      >
        <vue-editor
          class="editor-content my-3"
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
      <div class="proyect-info justify-between mx-auto mb-5">
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
          <img
            v-if="proyect.Portada.length > 0"
            class="image-preview"
            :src="proyect.Portada"
          />
        </div>
        <div class="right-side title">
          <div class="mb-2">
            <label>Titulo del Proyecto</label>
            <input
              type="text"
              class="mt-1"
              maxlength="100"
              placeholder="Titulo"
              v-model="proyect.Titulo"
              required
            />
          </div>
          <div class="mb-2">
            <label>Etiquetas</label>
            <input
              type="text"
              placeholder="Etiquetas (separadas por coma , )"
              class="mt-1"
              v-model="Etiquetas"
              maxlength="300"
            />
          </div>
          <div class="mb-2">
            <label>Descripcion</label>
            <input
              type="text"
              class="mt-1"
              placeholder="Descripción"
              maxlength="200"
              v-model="proyect.Descripcion"
              required
            />
          </div>
          <div class="categorias">
            <label>Categorias</label>
            <ul class="w-full mt-2 mb-0">
              <li>
                <input
                  value="Fotografia"
                  id="foto"
                  type="radio"
                  v-model="proyect.Categoria"
                /><label for="foto">Fotografía</label>
              </li>
              <li>
                <input
                  value="Publicidad"
                  id="pub"
                  type="radio"
                  v-model="proyect.Categoria"
                /><label for="pub">Publicidad</label>
              </li>
              <li>
                <input
                  value="Video"
                  id="vid"
                  type="radio"
                  v-model="proyect.Categoria"
                /><label for="vid">Video</label>
              </li>
              <li>
                <input
                  value="Diseño Grafico"
                  id="graf"
                  type="radio"
                  v-model="proyect.Categoria"
                /><label for="graf">Diseño Grafico</label>
              </li>
              <li>
                <input
                  value="3D"
                  id="3d"
                  type="radio"
                  v-model="proyect.Categoria"
                /><label for="3d">3D</label>
              </li>
              <li>
                <input
                  value="Pintura"
                  id="pint"
                  type="radio"
                  v-model="proyect.Categoria"
                />
                <label for="pint">Pintura</label>
              </li>
              <li>
                <input
                  value="Audio"
                  id="audio"
                  type="radio"
                  v-model="proyect.Categoria"
                />
                <label for="audio">Audio</label>
              </li>
            </ul>
            <div class="mt-3" v-if="error">
              <small class="val-error">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                {{ error }}
              </small>
            </div>
          </div>
          <!-- BOTONES -->
          <div class="btns-container w-full">
            <button class="btn-cancel">
              <router-link to="/Home">
                Cancelar
              </router-link>
            </button>
            <button class="btn-submit" type="submit">Publicar</button>
          </div>
        </div>
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
        Categoria: "Fotografia",
        Descripcion: "",
        FechaPub: null,
        Tags: [],
        Portafolios: [{}],
      },
      img: "",
      error: "",
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
      if (!this.verifyTags()) return;
      let array = this.Etiquetas.split(/[,#+_" "]/);
      array.forEach((input) => {
        this.proyect.Tags.push({ Tag: input });
      });
      this.proyect.FechaPub = this.setFecha;
      this.proyect.IdAutor = this.user.Id;
      this.$store
        .dispatch("createProyect", this.proyect)
        .then(() => {
          this.$router.push({ path: "/Home" });
        })
        .catch((e) => (this.error = e));
    },
    verifyTags() {
      if (this.Etiquetas && this.Etiquetas.includes(" ")) {
        this.error = "Las etiquetas no pueden contener espacios!";
        return false;
      }
      return true;
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
.editor-content {
  background: lightcyan;
  border: 1px solid black;
  color: dimgray;
}
.proyect-info {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  outline: 2px grey;
  background: lightcyan;
  color: dimgray;
  padding: 1rem 1rem 0.5rem 1rem;
  text-align: center;
  @media (max-width: 900px) {
    grid-template-columns: repeat(1, 1fr);
  }
  .left-side {
    border: 1px solid black;
    padding: 1rem;
    .dropbox {
      outline: 2px dashed grey; /* the dash box */
      outline-offset: -10px;
      background: lightcyan;
      color: dimgray;
      padding: 1rem;
      text-align: center;
      &:hover {
        cursor: pointer;
        background: lightblue; /* when mouse over to the drop zone, change color */
      }
      .input-file {
        cursor: pointer;
        padding: 1rem 2rem;
        @media (max-width: 640px) {
          padding: 0.5rem;
          width: 12rem;
        }
      }
    }
    .image-preview {
      max-height: 470px;
      max-width: 420px;
      margin-top: 0.7rem;
      @media (max-width: 640px) {
        max-height: 270px;
        max-width: 345px;
      }
    }
    p {
      margin: 0;
      font-size: 1.2rem;
      text-align: center;
    }
  }
  .right-side {
    text-align: left;
    border: 1px solid black;
    padding: 1rem;
    input[type="text"] {
      height: 2.3rem;
      width: 100%;
      box-sizing: border-box;
      border: 2px lightgray solid;
      border-radius: 4px;
      padding: 2px 5px;
    }
    ul {
      display: grid;
      padding: 0;
      gap: 10px;
      grid-template-columns: repeat(3, 1fr);
      list-style-type: none;
      height: auto;
    }
    .btns-container {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 14px;
      .btn-cancel {
        height: 2rem;
        display: flex;
        align-items: center;
        padding: 6px 10px;
        margin-right: 10px;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: none;
        box-sizing: border-box;
        color: black;
        border: 1px solid black;
      }
      .btn-submit {
        height: 2rem;
        display: flex;
        align-items: center;
        padding: 6px 10px;
        cursor: pointer;
        border-radius: 5px;
        box-shadow: none;
        box-sizing: border-box;
        color: white;
        background: rgb(26, 115, 232);
        border: 1px solid rgb(26, 115, 232);
      }
    }
  }
}
</style>
