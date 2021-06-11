<template>
  <div id="app">
    <nav class="px-4 py-3 shadow-sm w-full">
      <div class="flex justify-between int w-full">
        <div class="flex" id="leftside">
          <router-link
            to="/"
            class="mt-2 title text-black fw-bold"
            style="font-size:1.2rem"
            >DesignPro</router-link
          >
          <div class="flex align-center px-2 mx-3 ">
            <router-link to="/explorar" class="mx-2 title text-black "> Explorar </router-link>
            <router-link to="/crear-proyecto" class="mx-2 title text-black "> Crear Proyecto </router-link>
            <router-link to="/mis-proyectos" class="mx-2 title text-black "> Mis Proyectos </router-link>
            <router-link to="/proyectos-valorados" class="mx-2 title text-black"> Proyectos Valorados </router-link>
          </div>
        </div>
        <div class="flex justify-between w-9" id="rightside">
          <div class="flex justify-between">
            <form class="flex justify-between">
              <input
                v-model="form.buscar"
                type="text"
                name="buscar"
                class="input mt-2"
                placeholder="Search"
              />
              <button
                type="submit"
                class="btn btn-red mt-2"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="h-4 w-4" fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor">
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
          
          <div class="flex align-center px-2 btn-profile">
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
            Guille
          </div>
        </div>
      </div>
    </nav>
    <nav >

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
    };
  },
  methods: {
    login() {
      console.log(this.form);
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  border-bottom: 1px lightgray solid;
  & .int {
    margin: auto;
  }
}
@media (min-width: 768px) {
  nav div {
    max-width: 80%;
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
