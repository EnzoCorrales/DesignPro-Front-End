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
          v-model="form.correo"
          type="email"
          name="correo"
          class="input"
          placeholder="Correo"
          required
        />
        <input
          v-model="form.nombre"
          type="text"
          name="nombre"
          class="input mt-2"
          placeholder="Nombre"
          required
        />
        <input
          v-model="form.apellido"
          type="text"
          name="apellido"
          class="input mt-2"
          placeholder="Apellido"
          required
        />
        <input
          v-model="form.password"
          type="password"
          name="password"
          class="input mt-2"
          placeholder="Contraseña"
          required
          minlength="6"
        />
        <input
          v-model="form.password_repeat"
          type="password"
          name="password_repeat"
          class="input mt-2"
          placeholder="Repetir contraseña"
          minlength="6"
          required
        />
        <input
          v-model="form.fNac"
          type="date"
          value="2000/01/01"
          name="fNac"
          class="input mt-2"
          placeholder="Fecha de Nacimiento"
          required
        />
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
        <button type="submit" class="btn btn-blue w-full mt-2">
          Registrarme
        </button>
      </form>
    </div>
    <router-link to="/login" class="text-blue mt-3 fw-bold">
      Ya tienes cuenta? Inicia sesion.
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        correo: "",
        password: "",
        password_repeat: "",
        nombre: "",
        apellido: "",
        fNac: "",
        pais: "Uruguay",
      },
      error: "",
    };
  },
  methods: {
    register() {
      if (this.form.password !== this.form.password_repeat)
        this.error = "Las contraseñas no coinciden!";
      let aux = this.form.fNac.split("-");
      this.form.fNac = aux[2] + "-" + aux[1] + "-" + aux[0];
      this.$store
        .dispatch("register", this.form)
        .then(() => {
          this.$router.push({ path: "/home" });
        })
        .catch((e) => (this.error = e));
    },
  },
};
</script>

<style lang="scss" scoped></style>
