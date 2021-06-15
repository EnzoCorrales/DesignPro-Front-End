<template>
  <div class="flex align-center justify-center dir-col">
    <div class="max-w-2xl mx-auto px-3">
      <form @click.prevent="modificarUsuario">
        <input
          v-model="form.nombre"
          class="input mt-2"
          type="text"
          name="nombre"
        />
        <input
          v-model="form.apellido"
          class="input mt-2"
          type="text"
          name="apellido"
        />
        <input
          v-model="form.correo"
          class="input mt-2"
          type="text"
          name="correo"
        />
        <input
          v-model="form.descripcion"
          class="input mt-2"
          type="text"
          name="descripcion"
        />
        <input v-model="form.fNac" class="input mt-2" type="text" name="fNac" />
        <input
          v-model="form.profesion"
          class="input mt-2"
          type="text"
          name="profesion"
        />
        <input
          v-model="form.empresa"
          class="input mt-2"
          type="text"
          name="empresa"
        />
        <input
          v-model="form.urlWeb"
          class="input mt-2"
          type="text"
          name="urlWeb"
        />
        <input
          v-model="form.imgPerfil"
          class="input mt-2"
          type="text"
          name="imgPerfil"
        />
        <input v-model="form.pais" class="input mt-2" type="text" name="pais" />
        <input
          v-model="form.password"
          class="input mt-2"
          type="text"
          name="password"
        />
        <button type="submit" class="btn btn-blue">Actualizar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        correo: "",
        fNac: "",
        pais: "",
        profesion: "",
        empresa: "",
        imgPerfil: "",
        urlWeb: "",
        descripcion: "",
        password: "",
      },
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    modificarUsuario() {
      this.$store.dispatch("actualizarUsuario", this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>