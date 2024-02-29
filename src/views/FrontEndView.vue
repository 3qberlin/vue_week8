<template>
  <div class="home">
    <h1>Hello, This is Home Page.</h1>
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/about">About</RouterLink> |
    <RouterLink to="/products">Products</RouterLink> |
    <RouterLink to="/product">Product</RouterLink> |
    <hr />
    <button type="button" class="btn btn-sm btn-primary">aa</button>
    <HelloWorld />
    <RouterView />
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  components: {
    HelloWorld,
  },
};
</script>

<style scoped></style>
