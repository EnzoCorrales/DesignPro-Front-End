<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <p class="my-5">hola</p>
    <div class="flex pato">
      <div>hola</div>
      <div>chau</div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss">
.pato {
  background-color: yellow;
}
</style>
