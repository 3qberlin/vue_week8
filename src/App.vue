<template>
  <RouterView />
</template>

<script>
export default {
  mounted() {
    this.$router.push({ name: 'home' });
  },
};
</script>

<style lang="scss">

</style>
