<template>
  <div>
    <div class="profile-container max-w-xl p-5 align-center justify-between">
      <div class="flex">
        <div class="inline-flex">
          <div class="rounded-circle h-10 w-10 bg-black"></div>
        </div>
        <div class="inline-flex align-center ml-3">
          <div>
            <h2 class="mt-0 mb-2">{{ perfil.Nombre }}</h2>
            <p v-if="perfil.Profesion" class="mb-2">{{ perfil.Profesion }}</p>
            <p class="mb-0">
              {{ perfil.Pais }}
              <span v-if="perfil.Ciudad">, {{ perfil.Ciudad }}.</span>
            </p>
          </div>
        </div>
      </div>
      <div v-if="!itsMe" class="flex btn-container">
        <button class="btn btn-msg flex align-center" @click="enviarMensaje">
          <span class="sm-none mr-2">Enviar mensaje</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
        <button
          class="btn btn-blue btn-follow ml-2 flex align-center"
          @click="seguir"
        >
          <span class="sm-none mr-2">Seguir</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
        </button>
      </div>
      <div v-else class="flex btn-container">
        <router-link
          class="btn btn-blue flex align-center"
          :to="'/usuario/' + perfil.Id + '/modificar'"
        >
          <span class="sm-none mr-2">Gestionar datos</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </router-link>
        <button class="btn btn-logout flex align-center" @click="logout">
          <span class="sm-none mr-2">Cerrar sesión</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
            />
          </svg>
        </button>
      </div>
    </div>
    <router-link :to="'/usuario/' + user.Id + '/mensajes'">
      Mensajes
    </router-link>
    <div class="sub-profile align-center max-w-xl border px-5 py-3 ma">
      <span v-if="perfil.Seguidores" class="mr-2 pill"
        >Seguidores: {{ perfil.Seguidores.length }}</span
      >
      <span class="mr-2 pill">Cantidad de visitas: N</span>
      <span class="mr-2 pill">Valoraciones: K</span>
      <a
        v-if="perfil.UrlWeb"
        class="pill text-black url-web"
        href="perfil.UrlWeb"
        target="_blank"
      >
        Sitio:{{ perfil.UrlWeb }}
      </a>
    </div>
    <MensajeTab
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
    MensajeTab: () => import("@/components/Mensajes/EnviarMensaje"),
  },
  data() {
    return {
      perfil: {},
      showMensajeModal: false,
    };
  },
  computed: {
    auth() {
      return this.$store.getters.isAuth;
    },
    user() {
      return this.$store.state.user;
    },
    itsMe() {
      return this.user.Id == this.$route.params.id ? true : false;
    },
  },
  async mounted() {
    await this.getperfil();
  },
  methods: {
    async getperfil() {
      await this.$store
        .dispatch("getUser", this.$route.params.id)
        .then((res) => (this.perfil = res))
        .catch(() => this.$router.push({ path: "/home" }));
    },
    seguir() {
      if (!this.auth) this.$router.push({ path: "/login" });
      else {
        return this.auth;
      }
    },
    enviarMensaje() {
      if (!this.auth) this.$router.push({ path: "/login" });

      this.showMensajeModal = true;
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ path: "/login" });
    },
  },
};
</script>

<style lang="scss" scoped>
.profile-container {
  display: flex;
  margin: auto;
  margin-top: 3rem;
  background-color: #dae8fc;
}
.btn-msg {
  background-color: rgb(122, 151, 238);
}
.btn-logout {
  background-color: rgb(219, 0, 0);
  margin-left: 10px;
}
@media (max-width: 640px) {
  .profile-container {
    padding: 2rem 10px;
  }
  .btn-logout,
  .btn-follow {
    margin-top: 5px;
    margin-left: 0;
  }
  .btn-container {
    display: block;
  }
  .sub-profile {
    padding: 1rem 10px;
    justify-content: flex-start;
  }
}
.sub-profile {
  border-top: none;
}
.pill {
  padding-top: 3px;
  padding-bottom: 3px;
}
.url-web {
  &:hover {
    color: blue;
  }
}
</style>
