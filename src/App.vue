<template>
  <div id="app">
    <nav id="main-nav" class="py-3 shadow-sm">
      <div class="flex justify-between align-center ma">
        <div class="flex max-w-md justify-between" id="leftside">
          <div
            class="btn btn-red"
            id="flechabackmobile"
            v-show="mostrarsb"
            @click="mostrarSB()"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 20 20"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </div>
          <div class="flex justify-between ma">
            <div>
              <router-link
                id="Logo"
                to="/"
                v-show="!mostrarsb"
                class="title text-black fw-bold"
              >
                DesignPro
              </router-link>
            </div>
          </div>
          <div
            v-if="$store.getters.isAuth"
            class="flex align-center px-2 mx-3 nowrap p-0 m-0"
            id="tabs"
          >
            <router-link to="/explorar" class="mx-2 title text-black">
              Explorar
            </router-link>
            <router-link to="/crear-proyecto" class="mx-2 title text-black">
              Crear Proyecto
            </router-link>
            <router-link to="/mis-proyectos" class="mx-2 title text-black">
              Mis Proyectos
            </router-link>
            <router-link
              to="/proyectos-valorados"
              class="mx-2 title text-black"
            >
              Proyectos Valorados
            </router-link>
          </div>
        </div>
        <div class="flex w-49 justify-between" id="rightside">
          <div class="flex justify-between align-center nowrap mr-4" id="tabs">
            <form class="flex" v-show="!mostrarsb">
              <input
                v-model="form.buscar"
                type="text"
                name="buscar"
                class="input mr-2"
                placeholder="Search"
              />
              <button type="submit" class="btn btn-red">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
          </div>
          <div class="flex">
            <form id="Buscador" class="flex" v-show="mostrarsb">
              <input
                v-model="form.buscar"
                type="text"
                name="buscar"
                class="input w-9 mr-2"
                placeholder="Search"
              />
              <button id="lupasearch" type="submit" class="btn btn-red">
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
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </form>
            <div
              id="lupa-falsa"
              class="btn btn-red"
              v-show="!mostrarsb"
              @click="mostrarSB()"
            >
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          <div
            v-if="$store.getters.isAuth"
            v-show="!mostrarsb"
            class="flex align-center px-2 btn-profile ml-3"
            @click="mostrarnav = !mostrarnav"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            {{ user.Nombre }}
          </div>
          <div v-else class="flex mx-3 sesion">
            <router-link to="/login" class="block btn btn-green mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 log-svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                />
              </svg>
              <span class="log-btn">Inicia sesión</span>
            </router-link>
            <router-link to="/register" class="btn btn-blue">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 log-svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              <span class="log-btn">Registrate</span>
            </router-link>
          </div>
        </div>
      </div>
    </nav>
    <!-- NAV MOBILE -->
    <nav
      class="nowrap flex justify-end max-w-md relative ml-auto"
      v-show="mostrarnav"
    >
      <div class="absolute bg-white shadow-sm border mt-2 mr-2">
        <ul class="mx-4 p-0" @click="mostrarnav = !mostrarnav">
          <li class="mb-2">
            <router-link :to="'/usuario/' + user.Id" class="title text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Perfil
            </router-link>
          </li>
          <li class="mb-2">
            <router-link
              :to="'/usuario/' + user.Id + '/mensajes'"
              class="title text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
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
              Mensajes
            </router-link>
          </li>
          <hr />
          <li class="mb-2">
            <router-link to="/crear-proyecto" class="title text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              Crear Proyecto
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/mis-proyectos" class="title text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              Mis Proyectos
            </router-link>
          </li>
          <li class="mb-2">
            <router-link to="/proyectos-valorados" class="title text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              Proyectos Valorados
            </router-link>
          </li>
          <hr />
          <li>
            <a @click="logout" class="title text-black logout">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 mr-2"
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
              Cerrar Sesion
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        buscar: "",
      },
      mostrarsb: false,
      mostrarnav: false,
    };
  },
  computed: {
    user: function() {
      return this.$store.state.user;
    },
    isAuth() {
      return this.$store.getters.isAuth;
    },
  },
  mounted() {
    if (this.isAuth) {
      this.$store.dispatch("setTokenOnLoad");
    }
  },
  methods: {
    login() {
      console.log(this.form);
    },
    logout() {
      this.$store.dispatch("logout");
      this.$router.push({ path: "/login" });
    },
    mostrarSB() {
      this.mostrarsb = !this.mostrarsb;
      if (this.mostrarnav == true) {
        this.mostrarnav = false;
      }
    },
    mostrarNav() {
      this.mostrarnav = !this.mostrarnav;
    },
    defineAuthRoute() {
      return this.$store.getters.auth ? "/home" : "/";
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  background-color: white;
}

@media (min-width: 1000px) {
  nav div {
    max-width: 80%;
  }
  #mobile-tabs,
  .log-svg,
  #lupa-falsa {
    display: none;
  }
  .log-btn {
    display: block;
  }
}

@media (max-width: 1000px) {
  #tabs {
    display: none;
  }
  #rightside {
    justify-content: flex-end;
    //margin-right: 2rem;
    width: 11rem;
  }
  #main-nav {
    padding-right: 1rem;
    padding-left: 1rem;
  }
  .log-btn {
    display: none;
  }
  .log-svg {
    display: block;
  }
}
@media (max-width: 600px) {
  .sesion {
    display: none;
  }
  #Buscador {
    margin-right: 10px;
  }
}

ul {
  list-style: none;
  .logout:hover {
    cursor: pointer;
  }
  li {
    a {
      display: flex;
      align-items: center;
      &:hover {
        background-color: rgb(238, 238, 238);
      }
    }
  }
}

.btn-profile {
  border: 1px solid lightgray;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-radius: 0.25rem;
  color: darkslategray;
  @media (min-width: 1000px) {
    margin: 0;
  }
  &:hover {
    background-color: lightcoral;
    color: white;
    cursor: pointer;
    border: 1px solid lightcoral;
  }
}
</style>
