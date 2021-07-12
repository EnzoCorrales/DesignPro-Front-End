<template>
  <div class="proyect-container max-w-xl title">
    <div v-if="proyectos.length" class="grid col-rows-3 gap-3 mx-2">
      <Proyecto
        v-for="(proy, i) in proyectos"
        :key="i"
        :proy="proy"
        :user="user"
        @showOverlay="ShowOverlay"
      />
    </div>
    <div
      v-else
      class="max-w-lg flex dir-col mx-auto justify-center align-center mt-5"
    >
      <h3 class="title m-0">No hay ningún proyecto publicado!</h3>
      <router-link v-if="auth" class="link mt-4" to="/crear-proyecto">
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
    liked: { type: Number, default: null },
  },
  data() {
    return {
      proyectos: {},
      proyecto: {},
      showProyectoModal: false,
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
    this.id != null
      ? this.getProyectosUsuario()
      : this.liked
      ? this.getProyectosValorados()
      : this.getAllProyectos();
  },
  methods: {
    getProyectosUsuario() {
      this.$store
        .dispatch("getProyectosUsuario", this.id)
        .then((res) => (this.proyectos = res))
        .catch((e) => console.log(e));
    },
    getAllProyectos() {
      this.$store
        .dispatch("getAllProyectos")
        .then((res) => (this.proyectos = res))
        .catch((e) => console.log(e));
    },
    getProyectosValorados() {
      this.$store
        .dispatch("getProyectosValorados", this.liked)
        .then((res) => (this.proyectos = res))
        .catch((e) => console.log(e));
    },
    ShowOverlay(proy) {
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