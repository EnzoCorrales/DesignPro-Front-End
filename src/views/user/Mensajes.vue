<template>
  <div>
    <!-- HAY MENSAJES -->
    <div
      v-if="mensajes.length"
      class="max-w-lg flex dir-row mx-auto justify-between border mt-5 container"
    >
      <div class="list" @click="scrollToBottom">
        <MensajeBandeja
          v-for="(msg, i) in mensajes"
          :key="i"
          :msg="msg"
          @setMensaje="setMensajeContent"
        ></MensajeBandeja>
      </div>
      <div v-if="mensaje.Id" class="message w-full">
        <div class="content">
          <h4 class="title mb-3">{{ mensaje.Asunto }}</h4>
          <p class="m-0">{{ mensaje.Contenido }}</p>
        </div>
        <div class="response">
          <button
            @click="showMensajeModal = !showMensajeModal"
            class="btn btn-responder"
          >
            Responder
          </button>
        </div>
      </div>
      <div v-else class="message w-full">
        <h4 class="text-center">Selecciona un mensaje para leerlo</h4>
      </div>
    </div>
    <!-- NO HAY MENSAJES -->
    <div
      v-else
      class="max-w-lg flex dir-col mx-auto justify-center align-center mt-10"
    >
      <h3 class="title m-0 pill">Tu bandeja de mensajes está vacia!</h3>
      <router-link class="link mt-4" to="/home">
        Volver al inicio
      </router-link>
    </div>
    <EnviarMensje
      v-if="showMensajeModal"
      :perfil="perfil"
      :user="user"
      @close="showMensajeModal = !showMensajeModal"
    />
  </div>
</template>

<script>
export default {
  components: {
    MensajeBandeja: () => import("@/components/Mensajes/MensajeBandeja"),
    EnviarMensje: () => import("@/components/Mensajes/EnviarMensaje"),
  },
  data() {
    return {
      mensajes: {},
      mensaje: {},
      perfil: {},
      showMensajeModal: false,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  mounted() {
    this.obtenerMensajes();
  },
  methods: {
    setMensajeContent(data) {
      this.mensaje = data;
      this.perfil.Id = data.IdUsuarioR;
    },
    async obtenerMensajes() {
      await this.$store
        .dispatch("obtenerMensajes", this.user.Id)
        .then((res) => {
          this.mensajes = res;
        })
        .catch((e) => console.log(e));
    },
    scrollToBottom() {
      if (window.screen.width <= 500) {
        window.scrollTo(
          0,
          Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
          )
        );
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  @media (max-width: 500px) {
    display: block;
  }
  .list {
    border-right: 1px solid lightgray;
    display: flex;
    flex-direction: column;
    min-width: 12rem;
  }
  .message {
    display: flex;
    //align-items: center;
    text-align: start;
    justify-content: center;
    flex-direction: column;
    height: 28rem;
    @media (max-width: 500px) {
      min-height: 8rem;
      max-height: 20rem;
    }
    .content {
      padding: 10px;
      height: 100%;
      overflow: auto;
      p {
        word-break: break-all;
      }
    }
    .response {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding: 10px;
      border-top: 1px solid lightgray;
      .btn-responder {
        background: rgb(99, 179, 255);
      }
    }
  }
}
.pill {
  padding: 10px;
  background: rgb(211, 245, 255);
  border-radius: 10px;
}
.link {
  color: black;
  font-size: 18px;
  &:hover {
    color: lightseagreen;
    text-decoration: underline;
  }
}
</style>
