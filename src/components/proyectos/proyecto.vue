<template>
  <div class="border shadow-sm card">
    <div class="img-container" @click="ShowOverlay()">
      <img v-if="proy.Portada" class="" :src="proy.Portada" />
    </div>
    <div class="body-container">
      <div class="flex justify-start">
        <p class="title text-black">
          {{ proy.Titulo }}
        </p>
      </div>
      <div class="flex dir-col justify-end align-center">
        <div class="flex align-center px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
            />
          </svg>
          <span class="title">{{ proy.Likes }}</span>
        </div>
        <div class="flex align-center px-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            style="color: #5499c7"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
          <span class="title">{{ proy.Visitas }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    proy: { type: Object },
  },
  methods: {
    ShowOverlay() {
      this.$emit("showOverlay", this.proy);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  height: auto;
  width: auto;
  max-width: 400px;
  text-overflow: hidden;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 3px 15px 0px rgba(0, 0, 0, 0.4);
  }
  .img-container {
    img {
      height: 180px;
      max-height: 180px;
      width: 100%;
      display: block;
    }
  }
  .body-container {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    p {
      overflow: hidden;
      line-break: auto;
      //line-height: 1.2;
      margin: 0;
    }
    span {
      margin: 0;
    }
  }
}
</style>
