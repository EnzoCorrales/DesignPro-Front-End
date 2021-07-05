<template>
  <div class="flex align-center justify-center dir-col">
    <div
      class="
        mt-5
        mb-4
        mx-auto
        max-w-sm
        px-4
        py-4
        text-center
        border
        rounded-md
        shadow-sm
      "
    >
      <h2 class="title mt-0">DesignPro</h2>
      <p class="mb-2">Un lugar para compartir tus proyectos fotograficos!</p>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mb-3 mt-2"
        style="color: #5499c7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mb-3 mt-2 mx-2"
        style="color: #8e44ad"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
        />
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6 mb-3 mt-2"
        style="color: #17a589"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
      <router-link to="/login" class="btn btn-green block w-full px-0">
        Iniciar sesion
      </router-link>
      <p>- o -</p>
      <router-link to="/register" class="btn btn-blue block w-full px-0">
        Registrarte
      </router-link>
    </div>
    <router-link
      to="/home"
      class="text-center text-black title flex justify-center align-center mt-3 home"
    >
      Continuar
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-4 w-4 ml-1"
        fill="none"
        style="color:#5499C7"
        viewBox="0 0 20 20"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#imgIndex {
  height: 16rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
}
.home {
  padding: 10px;
  border-radius: 10px;
  &:hover {
    box-shadow: 0px -1px 15px 0px rgba(0, 0, 0, 0.4);
  }
}
</style>
