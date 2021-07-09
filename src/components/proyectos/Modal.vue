<template>
  <div>
    <div class="overlay pt-4">
      <!-- Todo lo que se relaccion con mostrar el proyecto seleccionado -->
      <!-- Boton de salida del overlay -->
      <div class="title ml-8 mr-8 text-white flex justify-between">
        <div>
          <h1>
            {{ proyect.Titulo }}
          </h1>
          <h4>
            {{ proyect.NombreAutor }}
          </h4>
        </div>
        <div class="close-button-container mt-3" @click="$emit('close')">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
      <div class="proyect title justify-center p-5 ">
        <!-- Contenido del proyecto -->
        <div class="contenido-proyecto text-center flex dir-col ma">
          <div v-for="(proy, i) in proyect.Portafolios" :key="i">
            <div class="contenido" v-html="proy.Contenido"></div>
          </div>
        </div>

        <!-- Info sobre el Proyecto -->
        <div id="info-proyecto text-center">
          <!-- Datos del proyecto -->
          <div class="data-proyecto ma text-center">
            <h3>{{ proyect.Titulo }}</h3>
            <div class="justify-center flex w-full">
              <p class="mx-4"><b>Categoria:</b> {{ proyect.Categoria }}</p>
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
              <p class="flex mx-2">
                {{ proyect.Visitas }}
              </p>
            </div>
          </div>
          <p class="ml-8"><b>Fecha Publicacion:</b> {{ proyect.FechaPub }}</p>
          <div id="info-propietario">
            <!-- Datos del Autor -->
            <div class="autor-info ma text-center">
              <p class="mx-2">
                Usuario:
                <router-link :to="'/usuario/' + proyect.IdAutor">{{
                  proyect.NombreAutor
                }}</router-link
                ><br />
                Localidad {{ proyect.UbicacionAutor }}
              </p>
            </div>
          </div>
          <!-- Agregar Comentario -->
          <div class="flex ml-8 mt-4">
          <img :src="'data:image/jpg;base64,' + userLog.ImgPerfil" />
          <div id="agregar-comentario">
            <form>
              <textarea
                v-model="form.comentario"
                type="text"
                name="contenido"
                class="p-1"
                placeholder="Agrega aqui tu comentario!"
                rows="10"
                cols="100"
              />
              <br />
              <button
                type="submit"
                class="btn btn-green mt-3"
                @click.prevent="comentar"
              >
                Enviar Comentario!
              </button>
            </form>
          </div>
          </div>
          <!-- Seccion Comentarios -->
          <br />
          <div v-for="(com, c) in proyect.Comentarios" :key="c">
            <div class="comentario">
              <p>{{ com.Contenido }}</p>
            </div>
          </div>
          <!-- Tags del proyecto -->
          <br />
          <div class="text-center pb-4">
            <h1>Tags</h1>
            <div v-for="(Eti, e) in proyect.Tags" :key="e">
              <div class="etiqueta">
                <p>{{ Eti.Tag }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        comentario: "",
      },
    };
  },
  props: {
    proyect: { type: Object },
    user: { type: Object },
  },
  methods: {
    close() {
      console.log(this.proyect + "HOLA");
      this.$emit("close");
    },
    comentar() {},
  },
  computed: {
    userLog() {
      return this.$store.state.user;
    },
  }
};
</script>

<style lang="scss" scoped>
.contenido-proyecto {
  width: 80%;
  height: auto;
}
::v-deep .contenido {
  p {
    img {
      width: auto;
      max-width: 400px;
      min-width: 200px;
      height: auto;
    }
  }
}
</style>
