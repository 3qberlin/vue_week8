<template>
  <div class="container d-flex flex-column">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/home" class="navbar-brand">
        <img src="https://hackmd.io/_uploads/S1atYtYap.png" alt="logo"
         style="width:96px;">
      </router-link>
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
          <router-link to="/about" class="nav-item nav-link me-4"
            >關於我們</router-link
          >
          <router-link to="/products" class="nav-item nav-link me-4"
            >產品一覽</router-link
          >
          <router-link to="/cart" v-if="this.carts" class="nav-item nav-link">
            <i class="bi bi-cart position-absolute">
              <span
                class="position-absolute top-0 start-100
                 translate-middle badge rounded-pill bg-danger"
              >
                {{ this.carts?.length }}
                <span class="visually-hidden">unread messages</span></span
              ></i
            >
          </router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import cartPinia from '@/stores/cartPinia';

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

<style scope>
.navbar-brand:hover, .nav-item:hover{
  color:rgb(30, 30, 30) !important;
  transform: scale(1.1);
  transition: all 2s ease-out 1s;
}
</style>
