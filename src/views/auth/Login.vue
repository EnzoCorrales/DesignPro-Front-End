<template>
  <div class="flex align-center justify-center dir-col px-3">
    <div
      class="
        mt-5
        mx-auto
        max-w-sm
        px-4
        py-4
        text-center
        border
        rounded-md
        shadow-sm
      "
    >
      <h2 class="title my-0">DesignPro</h2>
      <p class="mt-1 mb-3">Accede a tus proyectos</p>
      <form>
        <input
          v-model="form.email"
          type="text"
          name="email"
          class="input mt-2 max-w-sm"
          placeholder="Correo electrónico"
        />
        <input
          v-model="form.password"
          type="password"
          name="password"
          class="input mt-2"
          placeholder="Contraseña"
        />
        <button
          type="submit"
          class="btn btn-green w-full mt-3"
          @click.prevent="login"
        >
          Iniciar sesion
        </button>
      </form>
    </div>
    <router-link to="/register" class="text-green mt-3 fw-bold"
      >No tienes cuenta? Accede aquí.</router-link
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped></style>
