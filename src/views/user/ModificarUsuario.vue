<template>
  <div class="flex align-center justify-center dir-col mt-4">
    <div class="max-w-xl mx-auto p-3 mb-4 form-cont">
      <div class="internal p-4">
        <h2 class="mt-0 title text-center">Información personal</h2>
        <form @submit.prevent="modificarUsuario" enctype="multipart/form-data">
          <div class="mt-2 mb-3 flex justify-center align-center">
            <img
              v-if="form.ImgPerfil"
              :src="'data:image/jpg;base64,' + form.ImgPerfil"
              class="h-8 w-8 mr-2 rounded-circle bg-white img-input"
            />
            <input
              type="file"
              accept="image/*"
              name="img"
              id="img"
              ref="img"
              @change="imgUploaded($event)"
            />
            <label
              for="img"
              class="my-0 pointer fw-bold"
              :class="{ 'p-2 border': !form.ImgPerfil }"
              >Cambiar imagen</label
            >
          </div>
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
          <div class="grid col-rows-2 gap-3 mb-2">
            <div>
              <label for="nombre">Nombre</label>
              <input
                v-model="form.Nombre"
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
                v-model="form.Apellido"
                class="input mt-2"
                type="text"
                name="apellido"
                maxlength="30"
                required
              />
            </div>
          </div>
          <div class="mb-2">
            <label for="descripcion">Describe tu perfil</label>
            <textarea
              v-model="form.Descripcion"
              class="input mt-2 block"
              name="descripcion"
              rows="3"
              maxlength="150"
              placeholder="Una breve descripción sobre ti..."
            ></textarea>
          </div>
          <div class="grid col-rows-2 gap-3 mb-2">
            <div>
              <label for="profesion">Profesión</label>
              <input
                v-model="form.Profesion"
                class="input mt-2"
                type="text"
                name="profesion"
                maxlength="50"
                placeholder="A que te didicas?"
              />
            </div>
            <div>
              <label for="empresa">Empresa</label>
              <input
                v-model="form.Empresa"
                class="input mt-2"
                type="text"
                name="empresa"
                maxlength="50"
                placeholder="En donde trabajas?"
              />
            </div>
          </div>
          <div class="mb-2">
            <label for="url">URL</label>
            <input
              v-model="form.UrlWeb"
              class="input mt-2"
              type="url"
              name="url"
              maxlength="100"
              placeholder="Tu sitio web personal"
            />
          </div>
          <div class="grid col-rows-2 gap-3 mb-2">
            <div>
              <label for="pais">País</label>
              <select
                v-model="form.Pais"
                class="input mt-2"
                name="pais"
                required
              >
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
                v-model="form.Ciudad"
                class="input mt-2"
                type="text"
                name="ciudad"
                maxlength="50"
                placeholder="Donde vives"
              />
            </div>
          </div>
          <div class="mb-2">
            <label for="password">Contraseña</label>
            <input
              v-model="form.Password"
              class="input mt-2"
              type="password"
              name="password"
              minlength="6"
              placeholder="*******"
            />
          </div>
          <div class="flex justify-end mt-3">
            <button type="submit" class="btn btn-blue">Actualizar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import imageToBase64 from "image-to-base64/browser";
export default {
  data() {
    return {
      form: {
        Id: "",
        Nombre: "",
        Apellido: "",
        Correo: "",
        FNac: "",
        Pais: "",
        Profesion: "",
        Empresa: "",
        ImgPerfil: "",
        UrlWeb: "",
        Descripcion: "",
        Password: "",
      },
      error: "",
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.form.Id = this.user.Id;
    this.form.Nombre = this.user.Nombre;
    this.form.Apellido = this.user.Apellido;
    this.form.Descripcion = this.user.Descripcion;
    this.form.Empresa = this.user.Empresa;
    this.form.Profesion = this.user.Profesion;
    this.form.UrlWeb = this.user.UrlWeb;
    this.form.Pais = this.user.Pais;
    this.form.Ciudad = this.user.Ciudad;
    this.form.FNac = this.user.FNac;
    if (this.user.ImgPerfil != null && this.user.ImgPerfil != "")
      this.form.ImgPerfil = this.user.ImgPerfil;
  },
  methods: {
    imgUploaded(e) {
      let img = URL.createObjectURL(e.target.files[0]); // ACTIVA LA PREVIEW DE LA IMAGEN SUBIDA
      imageToBase64(img) // CONVIERTE A BASE 64
        .then((res) => (this.form.ImgPerfil = res))
        .catch((error) => console.log(error));
    },
    async modificarUsuario() {
      if (this.form.Password == "") this.form.Password = this.user.Password;
      if (this.form.Correo == "") this.form.Correo = this.user.Correo;
      await this.$store
        .dispatch("updateUser", this.form)
        .then(() => {
          this.$router.push({ path: "/usuario/" + this.user.Id });
        })
        .catch((e) => {
          this.error = e;
          console.log(e);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.form-cont {
  background-color: lightcyan;
  .internal {
    border: 1px solid black;
  }
  .img-input {
    cursor: pointer;
  }
  #img {
    opacity: 0;
    position: absolute;
    cursor: pointer;
    width: inherit;
    height: inherit;
  }
}
</style>
