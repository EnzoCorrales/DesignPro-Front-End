<template>
  <div class="container">
    <div class="max-w-lg">
      <div class="close-button-container max-w-lg mx-auto mt-4 mb-3">
        <svg
          @click="$emit('close')"
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div class="msg-content max-w-lg bg-white ma p-4">
        <form @submit.prevent="enviarMensaje">
          <div class="flex justify-between align-center mt-2">
            <label for="mensaje">Redacta tu mensaje</label>
            <small class="text-black fw-bold">
              {{ setFecha }}
            </small>
          </div>
          <input
            v-model="form.Asunto"
            class="input mt-3"
            type="text"
            name="Asunto"
            id="Asunto"
            placeholder="Asunto"
            maxlength="100"
            required
            :readonly="send"
          />
          <textarea
            v-model="form.Contenido"
            class="input"
            name="mensaje"
            id="mensaje"
            cols="30"
            rows="10"
            :placeholder="'Redáctale algo hermoso a ' + perfil.Nombre + '...'"
            required
            maxlength="5000"
            :readonly="send"
          ></textarea>
          <div class="flex justify-end mt-1" v-if="!send">
            <button class="btn btn-blue" type="submit">
              Enviar mensaje
            </button>
          </div>
          <div v-else class="alert mt-1 rounded p-2 text-center">
            <p class="m-0 fw-bold">Enviaste un mensaje a {{ perfil.Nombre }}</p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  data() {
    return {
      form: {
        IdUsuarioE: "",
        IdUsuarioR: "",
        Asunto: "",
        Contenido: "",
        Fecha: "",
        Visto: 0,
      },
      send: false,
    };
  },
  props: {
    user: { Object },
    perfil: { Object },
    showModal: { Boolean, default: false },
  },
  computed: {
    setFecha() {
      let fecha = moment()
        .format("L")
        .split("/");
      return fecha[2] + "-" + fecha[1] + "-" + fecha[0];
    },
  },
  mounted() {
    this.form.Fecha = this.setFecha;
    this.form.IdUsuarioE = this.user.Id;
    this.form.IdUsuarioR = this.perfil.Id;
  },
  methods: {
    async enviarMensaje() {
      await this.$store
        .dispatch("enviarMensaje", this.form)
        .then(() => (this.send = true))
        .catch((e) => console.log(e));
    },
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  top: 0;
}
.close-button-container {
  display: flex;
  justify-items: flex-start;
  svg:hover {
    color: red;
    cursor: pointer;
  }
}
.msg-content {
  label {
    font-size: 18px;
    font-weight: bold;
  }
  textarea {
    margin-top: 1rem;
  }
}
.alert {
  background: rgb(183, 255, 183);
  border: 1px solid green;
  color: green;
}
</style>
