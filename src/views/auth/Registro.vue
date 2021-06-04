<template>
  <div class="flex align-center justify-center dir-col">
    <div
      class="mt-5 mx-auto max-w-sm px-4 py-4 text-center border rounded-md shadow-sm"
    >
      <h2 class="title my-0">DesignPro</h2>
      <p class="mt-1 mb-3">Completa el formulario para ingresar</p>
      <form>
        <input
          v-model="form.email"
          type="text"
          name="email"
          class="input mt-2"
          placeholder="Correo"
        />
        <input
          v-model="form.nick"
          type="text"
          name="email"
          class="input mt-2"
          placeholder="Nombre único de usuario"
        />
        <input
          v-model="form.nombre"
          type="text"
          name="nombre"
          class="input mt-2"
          placeholder="Nombre"
        />
        <input
          v-model="form.apellido"
          type="text"
          name="apellido"
          class="input mt-2"
          placeholder="Apellido"
        />
        <input
          v-model="form.password"
          type="password"
          name="password"
          class="input mt-2"
          placeholder="Contraseña"
        />
        <input
          v-model="form.password_confirm"
          type="password"
          name="password"
          class="input mt-2"
          placeholder="Repetir contraseña"
        />
        <input
          v-model="form.fechaNacimiento"
          type="date"
          name="fecha"
          class="input mt-2"
          placeholder="Fecha de Nacimiento"
        />
        <button
          type="submit"
          class="btn btn-blue w-full mt-3"
          @click.prevent="login"
        >
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
export default {
  data() {
    return {
      form: {
        email: "",
        password: "",
        password_confirm: "",
        nick: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
        pais: "",
      },
    };
  },
  methods: {
    register() {
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped></style>
