<template>
  <div class="overlay pt-4">
    <div class="max-w-xl mx-auto">
      <!-- CABECERA -->
      <div class="title mb-3 flex justify-between">
        <div class="flex justify-between">
          <div class="inline-flex mr-3">
            <img
              v-if="proyect.ImgAutor"
              class="rounded-circle h-8 w-8"
              :src="'data:image/jpg;base64,' + proyect.ImgAutor"
            />
            <img v-else class="rounded-circle h-8 w-8" src="/user.svg" />
          </div>
          <div class="inline-flex text-white">
            <div>
              <h3 class="m-0">
                {{ proyect.Titulo }}
              </h3>
              <h4 class="m-0">
                {{ proyect.NombreAutor }}
              </h4>
            </div>
          </div>
        </div>
        <div class="close-button-container" @click="$emit('close')">
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
      <!-- CONTENIDO -->
      <div class="proyect title justify-center p-5">
        <div class="contenido-proyecto text-center flex dir-col ma">
          <div v-for="(proy, i) in proyect.Portafolios" :key="i">
            <div class="contenido" v-html="proy.Contenido"></div>
          </div>
        </div>
        <div id="info-proyecto text-center">
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
          <!-- AUTOR -->
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
      </div>
      <!-- COMENTARIOS Y PROPIETARIO -->
      <div class="comentarios">
        <p class="mt-0 mb-4">
          <b>Fecha Publicacion:</b> {{ proyect.FechaPub }}
        </p>
        <!-- DATA AUTOR -->
        <div class="flex">
          <div class="inline-flex">
            <img
              v-if="proyect.ImgAutor"
              class="rounded-circle h-10 w-10"
              :src="'data:image/jpg;base64,' + proyect.ImgAutor"
            />
            <img v-else class="rounded-circle h-10 w-10" src="/user.svg" />
          </div>
          <div class="inline-flex align-center ml-3">
            <div>
              <h2 class="mt-0 mb-2">{{ proyect.NombreAutor }}</h2>
              <p class="mb-0">
                {{ proyect.UbicacionAutor }}
              </p>
            </div>
          </div>
        </div>
        <hr class="my-4" />
        <!-- SECCION COMENTARIOS -->
        <div class="flex">
          <div class="mr-3">
            <img
              v-if="proyect.ImgAutor"
              class="rounded-circle h-8 w-8"
              :src="'data:image/jpg;base64,' + proyect.ImgAutor"
            />
            <img v-else class="rounded-circle h-8 w-8" src="/user.svg" />
          </div>
          <form @submit.prevent="comentar">
            <textarea
              v-model="form.comentario"
              class="p-2"
              type="text"
              name="contenido"
              placeholder="Agrega un comentario..."
              rows="10"
              cols="100"
            />
            <div class="flex justify-end">
              <button type="submit" class="btn btn-green mt-2">
                Comentar
              </button>
            </div>
          </form>
        </div>
        <hr class="my-4" v-if="proyect.Comentarios.length" />
        <div
          v-for="(com, c) in proyect.Comentarios"
          :key="c"
          class="comentario"
        >
          <p>{{ com.Contenido }}</p>
        </div>
      </div>
      <!-- TAGS -->
      <div class="tags">
        <div class="tag">
          <p v-for="(Eti, e) in proyect.Tags" :key="e">
            #<b>{{ Eti.Tag }}</b>
          </p>
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
  },
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed; /* Sit on top of the page content */
  width: 100%; /* Full width (cover the whole page) */
  height: 100%; /* Full height (cover the whole page) */
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Black background with opacity */
  z-index: 3; /* Specify a stack order in case you're using a different order for other elements */
  cursor: pointer; /* Add a pointer on hover */
  overflow-x: hidden;
  overflow-y: overlay;
  .close-button-container {
    display: flex;
    justify-items: flex-start;
    align-items: center;
    svg:hover {
      color: red;
      cursor: pointer;
    }
  }
  .contenido-proyecto {
    height: auto;
    &::v-deep.contenido {
      p {
        img {
          width: 200px;
          max-width: 200px;
          min-width: 200px;
          height: auto;
        }
      }
    }
  }
  .comentarios {
    margin-top: 3rem;
    background-color: white;
    padding: 2rem 3rem;
  }
  .tags {
    margin-top: 3rem;
    background-color: white;
    text-align: left;
    margin-bottom: 3rem;
    padding: 5px;
  }
  .tag {
    display: flex;
    margin-left: 5px;
    p {
      background-color: whitesmoke;
      border-radius: 10px;
      border: solid 0.5px black;
      padding-right: 5px;
      margin-right: 10px;
    }
  }
}
</style>
