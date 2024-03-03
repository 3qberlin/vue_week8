<template>
  <div class="container d-flex flex-column">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/home" class="navbar-brand">Home</router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav">
          <router-link to="/about" class="nav-item nav-link me-4 active"
            >About</router-link
          >
          <router-link to="/products" class="nav-item nav-link me-4 active"
            >Products</router-link
          >
          <router-link to="/product" class="nav-item nav-link me-4 active"
            >Product</router-link
          >
          <a v-if="this.carts" class="nav-item nav-link"
            ><i class="bi bi-cart position-absolute"><span
               class="position-absolute
             top-0 start-100 translate-middle badge rounded-pill bg-danger">
             {{ this.carts?.length }}
             <span class="visually-hidden">unread messages</span></span></i></a>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>

// import axios from 'axios';

import { mapActions, mapState } from 'pinia';

import cartPinia from '@/stores/cartPinia';

// const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default {
  computed: {
    ...mapState(cartPinia, ['carts', 'final_total', 'total']),
  },
  methods: {
    ...mapActions(cartPinia, ['getCarts', 'pinia_carts', 'carts']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
