<template>
  <div class="flex align-center justify-center dir-col">
    <div class="max-w-lg mx-auto py-3 px-4 mb-4 border border-blue rounded-md">
      <h2 class="mt-0 title text-center">Información personal</h2>
      <form @submit.prevent="modificarUsuario">
        <div class="mt-2 mb-3 flex justify-center align-center">
          <div class="h-8 w-8 mr-2 rounded-circle bg-black"></div>
          <label for="img" class="my-0">Cambiar imagen</label>
        </div>
        <div class="grid col-rows-2 gap-3 mb-2">
          <div>
            <label for="nombre">Nombre</label>
            <input
              v-model="form.nombre"
              class="input mt-2"
              type="text"
              name="nombre"
              maxlength="30"
              required
            />
          </div>
          <div>
            <label for="apellido">Apellido</label>
            <input
              v-model="form.apellido"
              class="input mt-2"
              type="text"
              name="apellido"
              maxlength="30"
              required
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="correo">Correo Electrónico</label>
          <input
            v-model="form.correo"
            class="input mt-2 block"
            type="text"
            name="correo"
            maxlength="100"
            required
          />
        </div>
        <div class="mb-2">
          <label for="descripcion">Describe tu perfil</label>
          <textarea
            v-model="form.descripcion"
            class="input mt-2 block"
            name="descripcion"
            rows="2"
            maxlength="100"
          ></textarea>
        </div>
        <div class="grid col-rows-2 gap-3 mb-2">
          <div>
            <label for="profesion">Profesión</label>
            <input
              v-model="form.profesion"
              class="input mt-2"
              type="text"
              name="profesion"
              maxlength="50"
            />
          </div>
          <div>
            <label for="empresa">Empresa</label>
            <input
              v-model="form.empresa"
              class="input mt-2"
              type="text"
              name="empresa"
              maxlength="50"
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="fNac">Fecha de nacimiento</label>
          <input
            v-model="form.fNac"
            class="input mt-2"
            type="text"
            pattern="\d{1,2}/\d{1,2}/\d{4}"
            name="fNac"
            required
          />
        </div>
        <div class="mb-2">
          <label for="url">URL</label>
          <input
            v-model="form.url"
            class="input mt-2"
            type="url"
            name="url"
            maxlength="100"
          />
        </div>
        <div class="grid col-rows-2 gap-3 mb-2">
          <div>
            <label for="pais">País</label>
            <select v-model="form.pais" class="input mt-2" name="pais" required>
              <option value="Andorra">Andorra</option>
              <option value="Angola">Angola</option>
              <option value="Argentina">Argentina</option>
              <option value="Armenia">Armenia</option>
              <option value="Benin">Benin</option>
              <option value="Brazil">Brazil</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Croatia">Croatia</option>
              <option value="Germany">Germany</option>
              <option value="Great Britain">Great Britain</option>
              <option value="Guatemala">Guatemala</option>
              <option value="Haiti">Haiti</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Jamaica">Jamaica</option>
              <option value="Malaysia">Malaysia</option>
              <option value="Malta">Malta</option>
              <option value="Monaco">Monaco</option>
              <option value="Mongolia">Mongolia</option>
              <option value="New Zealand">New Zealand</option>
              <option value="Nicaragua">Nicaragua</option>
              <option value="Niger">Niger</option>
              <option value="Nigeria">Nigeria</option>
              <option value="Norway">Norway</option>
              <option value="Paraguay">Paraguay</option>
              <option value="Peru">Peru</option>
              <option value="Portugal">Portugal</option>
              <option value="Puerto Rico">Puerto Rico</option>
              <option value="Russia">Russia</option>
              <option value="Singapore">Singapore</option>
              <option value="South Africa">South Africa</option>
              <option value="Spain">Spain</option>
              <option value="Swaziland">Swaziland</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Turkey">Turkey</option>
              <option value="Uganda">Uganda</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Ukraine">Ukraine</option>
              <option value="Uruguay">Uruguay</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Vietnam">Vietnam</option>
            </select>
          </div>
          <div>
            <label for="ciudad">Ciudad</label>
            <input
              v-model="form.ciudad"
              class="input mt-2"
              type="text"
              name="ciudad"
              maxlength="50"
            />
          </div>
        </div>
        <div class="mb-2">
          <label for="password">Contraseña</label>
          <input
            v-model="form.password"
            class="input mt-2"
            type="password"
            name="password"
            minlength="6"
          />
        </div>
        <div class="flex justify-end mt-3">
          <button type="submit" class="btn btn-blue">Actualizar</button>
        </div>
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
        url: "",
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
  mounted() {
    this.form.nombre = this.user.nombre;
    this.form.apellido = this.user.apellido;
    this.form.correo = this.user.correo;
    this.form.descripcion = this.user.descripcion;
    this.form.empresa = this.user.empresa;
    this.form.profesion = this.user.profesion;
    this.form.url = this.user.url;
    this.form.pais = this.user.pais ? this.user.pais : "Uruguay";
    this.form.ciudad = this.user.ciudad;
    this.form.fNac = this.user.fNac;
  },
  methods: {
    modificarUsuario() {
      this.$store.dispatch("modificarUsuario", this.form);
    },
  },
};
</script>

<style lang="scss" scoped></style>
