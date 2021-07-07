<template>
  <div>
    <div class="border rounded shadow-sm card">
      <div class="img-container"></div>
      <div class="body-container"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    proy: { type: Object },
  },
};
</script>

<style lang="scss" scoped>
.card {
  .img-container {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  .body-container {
    p {
      margin: 0;
      margin-bottom: 1rem;
    }
    span {
      margin: 0;
    }
  }
}
</style>
