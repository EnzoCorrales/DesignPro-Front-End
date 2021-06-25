<template>
  <div class="flex grid col-rows-5 justify-between w-full">
    <div
      class="border mx-1 mt-1"
      v-for="(proyecto, index) in Proyectos"
      :key="index"
    >
      <div class="flex align-center">
        <img
          class="h-10 w-10"
          src="https://pbs.twimg.com/profile_images/947786051434766336/P2XB90Pb_400x400.jpg"
        >
      </div>
      <br />
      <div class="justify-between flex px-3">
        <p class="title text-black" @click="mostrarOverlay(proyecto.Id)">
          <button>{{ proyecto.Titulo }}</button>
        </p>
        <div class="flex align-center px-2 btn-profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
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
          <span class="title">Likes</span>
        </div>
      </div>
      <div class="justify-between flex px-3">
        <p class="title text-black">{{ proyecto.Descripcion }}</p>
        <div class="flex align-center px-2 btn-profile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            style="color: #5499c7"
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
          <span class="title">{{ proyecto.Visitas }}</span>
        </div>
      </div>
    </div>
    <div class="overlay " v-show="mostraroverlay">
      <!-- Todo lo que se relaccion con mostrar el proyecto seleccionado -->
      <button class="btn btn-red" @click="mostrarOverlay()">x</button>
      <!-- Boton de salida del overlay -->
      <div class="proyect title text-center justify-center">
        <!-- Contenido del proyecto -->
        <h1>{{ proyect.Titulo }}</h1>
        <div class="w-full">
          <iframe
            class="justify-center"
            scrolling="no"
            src="https://pbs.twimg.com/profile_images/947786051434766336/P2XB90Pb_400x400.jpg"
          >
          </iframe>
        </div>
        <div id="info-proyecto">
          <!-- Datos del proyecto -->
          <p>Descripcion: {{ proyect.Descripcion }}</p>
          <div class="justify-center flex w-full">
            <p class="mx-2">Categoria: {{ proyect.Categoria }}</p>
            <p class="mx-2">Visitas: {{ proyect.Visitas }}</p>
            <p class="mx-2">Fecha Publicacion: {{ proyect.FechaPub }}</p>
          </div>
          <div id="info-propietario">
            <!-- Datos del Autor -->
            <p class="mx-2">Usuario: {{ user.Nombre }}</p>
            <p class="mx-2">Localidad: {{ user.Pais }}</p>
          </div>
          <!-- Agregar Comentario -->
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
          <!-- Seccion Comentarios -->
          <br />
          <div class="w-full">
            <textarea rows="10" cols="100">
Aqui pondria mis comentarios... Si tuviera algunos!!!!</textarea
            >
          </div>
          <!-- Tags del proyecto -->
          <br />
          <div class="w-full">
            <textarea rows="10" cols="100">
Aqui pondria mis tags... Si tuviera algunas!!!!</textarea
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import response from "@/api/proyecto";
import usr from "@/api/user";
export default {
  data() {
    return {
      Proyectos: {},
      mostraroverlay: false,
      idProyecto: null,
      proyect: {},
      form: {
        comentario: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.getall();

  },

  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ path: "/login" });
    },
    getall() {
      response
        .GetAll()
        .then((res) => {
          console.log(res.data);
          this.Proyectos = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    mostrarOverlay(id) {
      console.log("estado mostraroverlay entra siendo " + this.mostraroverlay);
      this.mostraroverlay = !this.mostraroverlay;
      this.idProyecto = id;
      this.getProyectId();
    },
    getProyectId() {
      response
        .Get(this.idProyecto)
        .then((res) => {
          console.log(res.data);
          this.proyect = res.data;
          this.userID = this.proyect.IdAutor;
          this.getUser();
        })
        .catch((e) => {
          console.log(e);
        });
    },
    getUser() {
      usr
        .find(this.userID)
        .then((res) => {
          console.log(res.data);
          this.user = res.data;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    comentar() {
      console.log(
        "El comentario fue " +
          this.form.comentario +
          " En el proyecto " +
          this.idProyecto +
          " y lo realizo el usuario " +
          this.userID
      );
    },
  },
};
</script>
<style lang="scss" scoped></style>
