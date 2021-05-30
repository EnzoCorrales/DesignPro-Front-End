<template>
  <div>
    <p class="text-red">Estas en el perfil</p>
    <VentanaPerfil />
  </div>
</template>

<script>
import VentanaPerfil from "@/components/VentanaPerfil.vue";
export default {
  components: {
    VentanaPerfil,
  },
};
</script>

<style lang="scss" scoped>
.text-red {
  color: red;
  font-weight: bold;
}
</style>
