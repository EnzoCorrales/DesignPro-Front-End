<template>
  <div>
    <div class="SearchBar inline-block">
      <form class="flex" v-show="!mostrarsb" @submit.prevent="buscador">
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
    <div class="main-content justify-between flex title">
      <div class="side-bar p-2">
        <div class="ordenar">
          <h2>Ordenar por Fecha</h2>
          <li>
            <button v-on:click="SetOrden('fecha')" class="btn-filter">
              Mayor a menor
            </button>
          </li>
          <li>
            <button v-on:click="SetOrden('fecha2')" class="btn-filter">
              Menor a mayor
            </button>
          </li>
          <hr />
          <li>
            <button v-on:click="SetOrden('valor')" class="btn-filter">
              Ordenar por Valoracion
            </button>
          </li>
        </div>
        <hr />
        <div>
          <div class="categorias">
            <li>
              <button
                v-on:click="SetCondicion('Fotografia')"
                class="btn-filter"
              >
                Fotografía
              </button>
            </li>
            <li>
              <button
                v-on:click="SetCondicion('Diseño Grafico')"
                class="btn-filter"
              >
                Diseño Grafico
              </button>
            </li>
            <li>
              <button v-on:click="SetCondicion('Audio')" class="btn-filter">
                Audio
              </button>
            </li>
            <li>
              <button
                v-on:click="SetCondicion('Publicidad')"
                class="btn-filter"
              >
                Publicidad
              </button>
            </li>
            <li>
              <button v-on:click="SetCondicion('3D')" class="btn-filter">
                3D
              </button>
            </li>
            <li>
              <button v-on:click="SetCondicion('Video')" class="btn-filter">
                Video
              </button>
            </li>
            <li>
              <button v-on:click="SetCondicion('Pintura')" class="btn-filter">
                Pintura
              </button>
            </li>
            <li>
              <button
                v-on:click="SetCondicion(null); SetOrden(null); form.buscar=''"
                class="btn-filter"
              >
                Limpiar Filtros
              </button>
            </li>
          </div>
        </div>
      </div>
      <div class="proyectos-filtrados">
        <Proyectos :condicion="condicion" ref="proyectos"></Proyectos>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      condicion: null,
      mostrarsb: false,
      form: {
        buscar: "",
      },
    };
  },
  components: {
    Proyectos: () => import("@/components/proyectos/ProyectosExplorar"),
  },
  methods: {
    SetCondicion(cond) {
      this.condicion = cond;
      this.$refs.proyectos.filtrarProyectos(cond);
    },
    SetOrden(orden) {
      console.log(orden);
      this.$refs.proyectos.ordenarProyectos(orden);
    },
    buscador(){
      var buscar = this.form.buscar;
      this.$refs.proyectos.buscarProyectos(buscar);
    }
  },
};
</script>
