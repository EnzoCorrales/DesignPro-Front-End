<template>
  <div class="proyect-container ">
    <div
      v-if="proyectos.length && this.condicion == null"
      class="grid col-rows-4 gap-3 mx-2"
    >
      <Proyecto
        v-for="(proy, i) in proyectos"
        :key="i"
        :proy="proy"
        @showOverlay="ShowOverlay"
      />
    </div>
    <div
      v-if="proyectosFiltrados.length && this.condicion != null"
      class="grid col-rows-4 gap-3 mx-2"
    >
      <Proyecto
        v-for="(proy, i) in proyectosFiltrados"
        :key="i"
        :proy="proy"
        @showOverlay="ShowOverlay"
      />
    </div>
    <div
      v-if="
        !proyectos.length ||
          (!proyectosFiltrados.length && this.condicion != null)
      "
      class="max-w-lg flex dir-col mx-auto justify-center align-center mt-5"
    >
      <h3 class="title m-0">No hay ningún proyecto publicado!</h3>
      <router-link v-if="auth && itsMe" class="link mt-4" to="/crear-proyecto">
        Agrega un proyecto nuevo
      </router-link>
    </div>
    <Modal
      v-if="showProyectoModal"
      :proyect="proyecto"
      :user="user"
      @close="close"
    />
  </div>
</template>

<script>
export default {
  components: {
    Proyecto: () => import("@/components/proyectos/Proyecto"),
    Modal: () => import("@/components/proyectos/Modal"),
  },
  props: {
    id: { type: String, default: null },
    condicion: { type: String, default: null },
  },
  data() {
    return {
      proyectos: {},
      showProyectoModal: false,
      proyecto: {},
      proyectosFiltrados: [],
    };
  },
  watch: {
    id(nuevo, viejo) {
      if (viejo != nuevo) {
        this.getProyectosUsuario();
      }
    },
  },
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
    user() {
      return this.$store.state.user;
    },
    itsMe() {
      return this.user.Id == this.$route.params.id ? true : false;
    },
  },
  mounted() {
    // Si esta viendo el perfil de alguien, carga sus proyectos
    if (this.id != null) this.getProyectosUsuario();
    else this.getAllProyectos();
  },
  methods: {
    // Carga los proyectos de un usuario
    getProyectosUsuario() {
      this.$store
        .dispatch("getProyectosUsuario", this.id)
        .then((res) => (this.proyectos = res))
        .catch((e) => console.log(e));
    },
    // Filtra los proyectos
    filtrarProyectos(cond) {
      var pfiltrados = [];
      this.proyectos.forEach(function(proy) {
        if (proy.Categoria == cond) {
          pfiltrados.push(proy);
        }
      });
      this.proyectosFiltrados = pfiltrados;
    },
    // Ordena los proyectos
    ordenarProyectos(orden) {
      if (orden == "fecha") {
        if (this.proyectosFiltrados.length) {
          this.proyectosFiltrados.sort((a, b) => {
            return parseFloat(a.FechaPub) - parseFloat(b.FechaPub);
          });
        } else {
          this.proyectos.sort(function(a, b) {
            return parseFloat(a.FechaPub) - parseFloat(b.FechaPub);
          });
        }
      }
      if (orden == "valor") {
        if (this.proyectosFiltrados.length) {
          this.proyectosFiltrados.sort((a, b) => {
            return parseFloat(a.Likes) - parseFloat(b.Likes);
          });
        } else {
          this.proyectos.sort(function(a, b) {
            return parseFloat(a.Likes) - parseFloat(b.Likes);
          });
        }
      }
      if (orden == null) {
        this.getAllProyectos();
      }
    },
    // Carga todos los proyectos
    getAllProyectos() {
      this.$store
        .dispatch("getAllProyectos")
        .then((res) => (this.proyectos = res))
        .catch((e) => console.log(e));
    },
    ShowOverlay(proy) {
      console.log(proy);
      this.showProyectoModal = !this.showProyectoModal;
      this.proyecto = proy;
    },
    close() {
      this.showProyectoModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.proyect-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  .link:hover {
    font-weight: bold;
    color: blue;
  }
}
@media (max-width: 640px) {
  .proyect-container {
    margin: 2rem 0;
  }
}
</style>
