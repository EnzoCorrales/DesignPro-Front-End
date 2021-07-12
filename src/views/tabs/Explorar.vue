<template>
  <div class="main-content justify-between flex title">
    <div class="side-bar p-2">
      <div class="ordenar">
        <li><button class="btn-filter">Ordenar por Fecha</button></li>
        <li><button class="btn-filter">Ordenar por Valoracion</button></li>
      </div>
      <hr />
      <div>
        <div class="categorias">
          <li><button class="btn-filter">Fotografía</button></li>
          <li><button class="btn-filter">Diseño Grafico</button></li>
          <li><button class="btn-filter">Audio</button></li>
          <li><button class="btn-filter">Publicidad</button></li>
          <li><button class="btn-filter">3D</button></li>
          <li><button class="btn-filter">Video</button></li>
          <li><button class="btn-filter">Pintura</button></li>
        </div>
      </div>
    </div>
    <div class="proyectos-filtrados">
      <Proyectos></Proyectos>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Proyectos: () => import("@/components/proyectos/Proyectos"),
  },
};
</script>
