<template>
  <div class="flex align-center justify-center dir-col">
    <div
      class="mt-5 mx-auto max-w-sm px-4 py-4 text-center border rounded-md shadow-sm"
    >
      <h2 class="title my-0">DesignPro</h2>
      <p class="mt-1 mb-3">Completa el formulario para ingresar</p>
      <form @submit.prevent="register" >
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
          min="6"
        />
        <input
          v-model="form.FNac"
          type="date"
          name="FNac"
          class="input mt-2"
          placeholder="Fecha de Nacimiento"
          required
        />
        <button
          type="submit"
          class="btn btn-blue w-full mt-3"
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
import auth from '@/api/user';
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
    };
  },
  methods: {
    register() {
      auth.register(this.form).then(res => {
        console.log(res);
      }).catch(e => {
        console.log(e);
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
