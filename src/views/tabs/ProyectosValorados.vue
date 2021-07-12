<template>
  <div class="max-w-xl mt-5 flex dir-col mx-auto">
    <h2 class="title text-center px-2">Tus valoraciones</h2>
    <Proyectos :liked="user.Id" />
  </div>
</template>

<script>
export default {
  components: {
    Proyectos: () => import("@/components/proyectos/Proyectos"),
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped></style>
