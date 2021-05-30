<template>
  <div>
    <p>Integrantes</p>
    <ul>
      <li v-for="(nombre, index) in integrantes" :key="index">
        {{ nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      integrantes: ["Nico", "Enzo", "Ana", "Guille"],
    };
  },
};
</script>
