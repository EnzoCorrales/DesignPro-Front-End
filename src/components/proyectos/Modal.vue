<template>
  <div class="overlay ma">
    <div class="max-w-xl mx-auto">
      <!-- CABECERA -->
      <div class="titulo-proyecto title mb-3 flex justify-between">
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
      <div class="contenido title justify-center p-5">
        <img :src="proyect.Portada" class="portada-proyecto" />
        <h2 class="text-center my-2">{{ proyect.Descripcion }}</h2>
        <div class="contenido-proyecto text-center flex dir-col ma">
          <div
            v-for="(proy, i) in proyect.Portafolios"
            :key="i"
            v-html="proy.Contenido"
          ></div>
        </div>
        <div id="info-proyecto text-center">
          <div class="data-proyecto ma text-center">
            <h2 class="mb-2 mt-1">{{ proyect.Titulo }}</h2>
            <div class="justify-center flex align-center w-full mb-1">
              <div class="flex align-center pointer" @click="valoracion()">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  :class="{ 'text-blue': valorado }"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                <p class="m-0">
                  {{ likes }}
                </p>
              </div>
              <div class="flex align-center mx-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
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
                <p class="m-0">
                  {{ proyect.Visitas + 1 }}
                </p>
              </div>
              <div class="flex align-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5 mr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
                <p class="m-0">{{ proyect.CantComentarios }}</p>
              </div>
            </div>
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
        <div v-if="auth" class="flex">
          <div class="mr-3 img-user">
            <img
              v-if="user.ImgPerfil"
              class="rounded-circle h-8 w-8"
              :src="'data:image/jpg;base64,' + user.ImgPerfil"
            />
            <img v-else class="rounded-circle h-8 w-8" src="/user.svg" />
          </div>
          <form @submit.prevent="comentar" class="flex dir-col w-fill">
            <textarea
              v-model="formComentario.Contenido"
              class="p-2"
              type="text"
              rows="8"
              name="contenido"
              placeholder="Agrega un comentario..."
            />
            <div class="flex justify-end">
              <button type="submit" class="btn btn-green mt-2">
                Comentar
              </button>
            </div>
          </form>
        </div>
        <div class="text-center" v-else>
          <router-link
            class="text-blue text-lg btn-login-comentario"
            to="/login"
            >Inicia sesión para comentar!</router-link
          >
        </div>
        <hr class="my-4" v-if="comentarios.length" />
        <div
          v-for="(com, i) in comentarios"
          :key="i"
          class="flex align-center justify-between p-2 caja-comentario"
        >
          <div class="flex align-center">
            <div class="mr-3">
              <img
                v-if="com.ImgAutor"
                class="rounded-circle h-7 w-7"
                :src="'data:image/jpg;base64,' + com.ImgAutor"
              />
              <img v-else class="rounded-circle h-7 w-7" src="/user.svg" />
            </div>
            <div class="comentario-text">
              <span>
                <strong>{{ com.Nombre }}</strong> -
                {{ fechaComentario(com.Fecha) }}
              </span>
              <p class="mb-0">{{ com.Contenido }}</p>
            </div>
          </div>
          <div
            v-if="user && com.IdUsuario == user.Id"
            class="btn-eliminar"
            @click="eliminarComentario(com.Id)"
          >
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
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- TAGS -->
      <div class="tags">
        <strong>Tags:</strong>
        <div class="tag ma">
          <p v-for="(t, e) in proyect.Tags" :key="e">
            #<b>{{ t.Tag }}</b>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      formComentario: {
        Contenido: "",
        Fecha: "",
        IdProyecto: this.proyect.Id,
        IdUsuario: this.user.Id ? this.user.Id : null,
      },
      formValoracion: {
        IdUsuario: null,
        IdProyecto: null,
      },
      likes: 0,
      comentarios: {},
      valorado: false,
      valoradoDesdeAntes: false,
    };
  },
  props: {
    proyect: { type: Object },
    user: { type: Object },
  },
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
    setFecha() {
      return moment().format("L");
    },
  },
  mounted() {
    this.getComentarios();
    this.setVisita();
    if (this.auth) this.getProyectosValorados();
  },
  methods: {
    setVisita() {
      this.$store
        .dispatch("verProyecto", this.proyect.Id)
        .catch((e) => console.log(e));
    },
    getComentarios() {
      this.$store
        .dispatch("getComentariosProyecto", this.proyect.Id)
        .then((res) => {
          this.comentarios = res.reverse();
        })
        .catch((e) => console.log(e));
    },
    comentar() {
      this.formComentario.Fecha = this.setFecha;
      this.$store
        .dispatch("comentar", this.formComentario)
        .then(() => {
          this.formComentario.Contenido = "";
          this.getComentarios();
        })
        .catch((e) => console.log(e));
    },
    eliminarComentario(id) {
      this.$store
        .dispatch("eliminarComentario", id)
        .then(() => this.getComentarios())
        .catch((e) => console.log(e));
    },
    fechaComentario(f) {
      let fecha = f.split("T");
      return fecha[0];
    },
    getProyectosValorados() {
      this.likes = this.proyect.Likes;
      this.$store
        .dispatch("getProyectosValorados", this.user.Id)
        .then((res) => {
          if (res.length) {
            res.forEach((p) => {
              if (p.Id == this.proyect.Id)
                this.valorado = this.valoradoDesdeAntes = true;
            });
          }
        })
        .catch((e) => console.log(e));
    },
    valoracion() {
      if (!this.auth) this.$router.push({ path: "/login" });
      else {
        this.formValoracion.IdUsuario = this.user.Id;
        this.formValoracion.IdProyecto = this.proyect.Id;
        !this.valorado ? this.like() : this.dislike();
      }
    },
    like() {
      this.$store
        .dispatch("likeProyecto", this.formValoracion)
        .then(() => {
          this.valorado = true;
          this.likeCounter(1);
        })
        .catch((e) => console.log(e));
    },
    dislike() {
      this.$store
        .dispatch("dislikeProyecto", { data: this.formValoracion })
        .then(() => {
          this.valorado = false;
          this.likeCounter(0);
        })
        .catch((e) => console.log(e));
    },
    likeCounter(nro) {
      if (nro == 0) nro = this.valoradoDesdeAntes ? -1 : 0;
      if (nro == 1) nro = this.valoradoDesdeAntes ? 0 : 1;
      this.likes = this.proyect.Likes + nro;
    },
    close() {
      this.$emit("close");
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
  background-color: rgba(0, 0, 0, 0.7); /* Black background with opacity */
  z-index: 100; /* Specify a stack order in case you're using a different order for other elements */
  overflow-x: hidden;
  overflow-y: overlay;
  .titulo-proyecto {
    padding: 20px 15px 0 15px;
    @media (max-width: 640px) {
      width: 95%;
      margin: auto;
      padding: 10px 0;
    }
  }
  .close-button-container {
    display: flex;
    justify-items: flex-start;
    align-items: center;
    svg:hover {
      color: red;
      cursor: pointer;
    }
  }
  .contenido {
    background-color: white;
    margin: auto;
    margin-bottom: 1.5rem;
    height: auto;
    font-family: "Poppins", sans-serif;
    overflow: hidden;
    padding: 20px;
    @media (max-width: 640px) {
      margin-bottom: 1rem;
      padding: 10px;
    }
    .contenido-proyecto {
      padding: 10px;
    }
    .portada-proyecto {
      width: 100%;
      max-height: 600px;
      margin-bottom: 1rem;
    }
    .data-proyecto {
      margin-top: 10px;
      border: 1px solid black;
      padding: 10px;
    }
  }
  .comentarios {
    margin-top: 1.5rem;
    background-color: white;
    padding: 2rem;
    overflow: hidden;
    margin: auto;
    @media (max-width: 640px) {
      padding: 1rem;
      .img-user {
        margin-right: 0.5rem;
      }
    }
    .comentario-text {
      @media (max-width: 640px) {
        span,
        strong,
        p {
          font-size: 14px;
        }
      }
    }
    .caja-comentario {
      .btn-eliminar {
        display: none;
        cursor: pointer;
        padding: 7px;
        background-color: rgb(243, 243, 243);
        color: rgb(54, 54, 54);
        border-radius: 8px;
        &:hover {
          background-color: rgb(216, 216, 216);
          color: black;
        }
      }
      &:hover .btn-eliminar {
        display: flex;
        align-items: center;
      }
    }
    .btn-login-comentario {
      padding: 5px 10px;
      border-radius: 8px;
      &:hover {
        background-color: rgb(216, 216, 216);
      }
    }
  }
  .tags {
    margin-top: 1.5rem;
    background-color: white;
    text-align: left;
    margin-bottom: 3rem;
    padding: 1rem 2rem;
    @media (max-width: 640px) {
      padding: 10px;
    }
    .tag {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      p {
        background-color: whitesmoke;
        border-radius: 10px;
        border: solid 0.5px black;
        padding: 5px 10px;
      }
    }
  }
}
</style>
