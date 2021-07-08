<template>
  <div
    class="msg"
    :class="{
      pendiente: msg.Visto == 0 && !setVistoClass,
      visto: setVistoClass || msg.Visto == 1,
    }"
    @click="
      emitMensaje(msg);
      setVisto(msg);
    "
  >
    <div class="icon-container">
      <!-- VISTO -->
      <svg
        v-if="msg.Visto == 1 || setVistoClass"
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
        />
      </svg>
      <!-- NO VISTO -->
      <svg
        v-else-if="msg.Visto == 0 && !setVistoClass"
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    </div>
    <div class="text-container ml-1">
      <p class="m-0">- {{ auxMsg.Fecha }}</p>
      <span>{{ auxMsg.Asunto }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    msg: { type: Object },
  },
  data() {
    return {
      setVistoClass: false,
      auxMsg: {},
    };
  },
  mounted() {
    this.auxMsg = this.msg;
    //this.auxMsg.Fecha = this.formatFecha(this.msg.Fecha);
  },
  methods: {
    formatFecha(f) {
      let fecha = f.split("/");
      return fecha[2] + "-" + fecha[1] + "-" + fecha[0];
    },
    emitMensaje(message) {
      this.$emit("setMensaje", message);
    },
    async setVisto(msg) {
      if (msg.Visto == 0) {
        await this.$store
          .dispatch("setVisto", this.auxMsg)
          .then(() => (this.setVistoClass = true))
          .catch((e) => console.log(e));
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.msg {
  padding: 10px;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
  &:hover {
    cursor: pointer;
  }
  &.pendiente {
    border-left: 3px solid rgb(107, 184, 255);
    background-color: #dbe8ff;
    &:hover {
      background-color: rgb(214, 229, 255);
    }
  }
  &.visto {
    border-left: 3px solid rgb(204, 204, 204);
    background-color: #f6f6f6;
    &:hover {
      background-color: rgb(221, 221, 221);
    }
  }
  .icon-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text-container {
    display: flex;
    flex-direction: column;
    align-self: center;
    white-space: nowrap;
    overflow: hidden;
    //text-overflow: ellipsis;
    width: 10rem;
    p {
      font-size: 12px;
      text-overflow: ellipsis;
    }
    span {
      text-overflow: ellipsis;
    }
  }
}
</style>
