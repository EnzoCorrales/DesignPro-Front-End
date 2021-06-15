<template>
  <div class="flex align-center justify-center dir-col">
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
      <p class="mt-1 mb-3">Completa el formulario para ingresar</p>
      <form @submit.prevent="register">
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
          v-model="form.Correo"
          type="email"
          name="Correo"
          class="input mt-2"
          placeholder="Correo"
          required
        />
        <input
          v-model="form.Nombre"
          type="text"
          name="Nombre"
          class="input mt-2"
          placeholder="Nombre"
          required
        />
        <input
          v-model="form.Apellido"
          type="text"
          name="Apellido"
          class="input mt-2"
          placeholder="Apellido"
          required
        />
        <input
          v-model="form.Password"
          type="password"
          name="Password"
          class="input mt-2"
          placeholder="Contraseña"
          required
          minlength="6"
        />
        <input
          v-model="form.FNac"
          type="date"
          name="FNac"
          class="input mt-2"
          placeholder="Fecha de Nacimiento"
          required
        />
        <button type="submit" class="btn btn-blue w-full mt-3">
          Registrarme
        </button>
      </form>
    </div>
    <router-link to="/login" class="text-blue mt-3 fw-bold"
      >Ya tienes cuenta? Inicia sesion.</router-link
    >
  </div>
</template>

<script>
import auth from "@/api/user";
export default {
  data() {
    return {
      form: {
        Correo: "",
        Password: "",
        Nombre: "",
        Apellido: "",
        FNac: "",
      },
      error: "",
    };
  },
  methods: {
    register() {
      auth
        .register(this.form)
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          this.error = e.response.data.Message;
        });
    },
  },
};
</script>

<style lang="scss" scoped></style>
