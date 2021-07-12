<template>
  <div class="main-content justify-between flex title">
    <div class="side-bar p-2">
      <div class="ordenar">
        <li>
          <button v-on:click="SetOrden('fecha')" class="btn-filter">
            Ordenar por Fecha
          </button>
        </li>
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
            <button v-on:click="SetCondicion('Fotografia')" class="btn-filter">
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
            <button v-on:click="SetCondicion('Publicidad')" class="btn-filter">
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
              v-on:click="SetCondicion(null), SetOrden(null)"
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
</template>

<script>
export default {
  data() {
    return {
      condicion: null,
    };
  },
  components: {
    Proyectos: () => import("@/components/proyectos/Proyectos"),
  },
  methods: {
    SetCondicion(cond) {
      this.condicion = cond;
      this.$refs.proyectos.filtrarProyectos(cond);
    },
    SetOrden(orden) {
      this.$refs.proyectos.ordenarProyectos(orden);
    },
  },
};
</script>
