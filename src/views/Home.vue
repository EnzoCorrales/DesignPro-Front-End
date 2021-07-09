<template>
  <div>
    <Proyectos></Proyectos>
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
            <textarea
              rows="10"
              cols="100"
              placeholder="Aqui pondria mis comentarios... Si tuviera algunos!!!!"
            ></textarea>
          </div>
          <!-- Tags del proyecto -->
          <br />
          <div class="w-full">
            <textarea
              rows="10"
              cols="100"
              placeholder="Aqui pondria mis tags... Si tuviera algunas!!!!"
            ></textarea>
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
  components: {
    Proyectos: () => import("@/components/proyectos/Proyectos"),
  },

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
