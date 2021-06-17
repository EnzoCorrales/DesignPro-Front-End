<template>
  <div id="app">
    <nav id="main-nav" class="py-3 shadow-sm w-full">
      <div class="flex justify-between int w-full">
        <div class="flex justify-between" id="leftside">
          <!--<div class="btn btn-red mt-2" v-show="mostrarsb" @click="mostrarSB()">
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
          <nav class="px-4 py-3 mb-4 shadow-sm">
            <div class="flex justify-between int">
              <div>
                <router-link
                  :to="defineAuthRoute()"
                  class="m-0 title text-black fw-bold"

                  style="font-size: 1.2rem"
                  >
                </div>
              </div> -->
          <router-link
            id="Logo"
            to="/"
            v-show="!mostrarsb"
            class="mt-2 title text-black fw-bold"
          >
            DesignPro
          </router-link>

          <div  v-if="$store.getters.auth" class="flex align-center px-2 mp-0 x-3 nowrap m-0" id="tabs">
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
          </div>-->
        </div>

        <div class="flex max-w-xs justify-between" id="rightside">
          <div class="flex justify-between nowrap" id="tabs">
            <form class="flex" v-show="!mostrarsb">
              <input
                v-model="form.buscar"
                type="text"
                name="buscar"
                class="input mt-2"
                placeholder="Search"
              />
              <button type="submit" class="btn btn-red mt-2">
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
          <div class="flex" id="mobile-tabs">
            <form id="Buscador" class="flex" v-show="mostrarsb">
              <input
                v-model="form.buscar"
                type="text"
                name="buscar"
                class="input mt-2 w-9"
                placeholder="Search"
              />
              <button id="lupasearch" type="submit" class="btn btn-red mt-2">
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
              class="btn btn-red mt-2"
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
          <!-- <div class="flex align-center px-2 mx-3 btn-profile" @click="mostrarNav()" >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4 mr-1 "
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
            Guille
          </div> -->
          <div
            v-if="$store.getters.auth"
            v-show="!mostrarsb"
            class="flex align-center px-2 btn-profile mx-3"
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
             {{user.nombre}}
          </div>
          <div v-else class="flex mx-3">
            <router-link to="/login" class="btn btn-sm btn-green mr-2"
              >Inicia sesión</router-link
            >
            <router-link to="/register" class="btn btn-sm btn-blue"
              >Registrate</router-link
            >
          </div>
        </div>
      </div>
    </nav>
    <nav
      class="flex dir-col nowrap text-end w-full py-3 px-3"
      v-show="mostrarnav"
    >
      <div id="mobile-tabs" class="flex dir-col">
        <router-link
          to="/explorar"
          class="mx-2 title text-black"
          v-on:click.native="mostrarNav"
        >
          Explorar
        </router-link>
        <router-link
          to="/crear-proyecto"
          class="mx-2 title text-black"
          v-on:click.native="mostrarNav"
        >
          Crear Proyecto
        </router-link>
        <router-link
          to="/mis-proyectos"
          class="mx-2 title text-black"
          v-on:click.native="mostrarNav"
        >
          Mis Proyectos
        </router-link>
        <router-link
          to="/proyectos-valorados"
          class="mx-2 title text-black"
          v-on:click.native="mostrarNav"
        >
          Proyectos Valorados
        </router-link>
      </div>
      <div>
        <router-link
          to="/login"
          class="mx-2 title text-black"
          v-on:click.native="mostrarNav"
        >
          Cerrar Sesion
        </router-link>
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
    user() {
      return this.$store.state.user;
    },
  },
  methods: {
    login() {
      console.log(this.form);
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
  border-bottom: 1px lightgray solid;
  position: sticky;
  top: 0;
  background-color: white;
  & .int {
    margin: auto;
  }
}

@media (min-width: 768px) {
  nav div {
    max-width: 80%;
  }
  #mobile-tabs {
    display: none;
  }
}

@media (max-width: 768px) {
  #tabs {
    display: none;
  }
  #rightside {
    justify-content: flex-end;
    margin-right: 2rem;
    width: 11rem;
  }
  #main-nav {
    padding-right: 2rem;
    padding-left: 2rem;
  }
}

.btn-profile {
  border: 1px solid lightgray;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  border-radius: 0.25rem;
  color: darkslategray;
  &:hover {
    background-color: lightcoral;
    color: white;
    cursor: pointer;
    border: transparent;
  }
}
</style>
