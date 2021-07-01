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
      <form @submit.prevent="login" class="text-center">
        <small v-if="error" class="val-error">
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
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
          {{ error }}
        </small>
        <input
          v-model="form.correo"
          type="email"
          name="correo"
          class="input"
          placeholder="Correo electrónico"
          required
        />
        <input
          v-model="form.password"
          type="password"
          name="password"
          class="input mt-2"
          placeholder="Contraseña"
          required
        />
        <button type="submit" class="btn btn-green w-full mt-3">
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
        correo: "",
        password: "",
      },
      error: "",
    };
  },
  methods: {
    wipe(){
      this.$store.state.user=null;
    },
    login() {
      this.$store
        .dispatch("login", this.form)
        .then(() => {
          console.log(this.$store.state.user);
          this.$router.push({ path: "/home" });
        })
        .catch((e) => (this.error = e));
    },

  },
};
</script>

<style lang="scss" scoped></style>
