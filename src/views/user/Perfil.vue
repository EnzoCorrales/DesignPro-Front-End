<template>
  <div>
    <router-link :to="'/usuario/' + user.Id + '/modificar'"
      >Modificar</router-link
    >
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style lang="scss" scoped></style>
