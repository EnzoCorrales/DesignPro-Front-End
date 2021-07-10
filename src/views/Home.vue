<template>
  <div>
    <Proyectos></Proyectos>
  </div>
</template>

<script>
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
};
</script>
<style lang="scss" scoped></style>
