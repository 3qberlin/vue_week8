<template>
  <div class="container d-flex flex-column">
    <nav class="navbar navbar-expand-lg navbar-light position-relative">
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
        class="collapse navbar-collapse justify-content-end "
        id="navbarNavAltMarkup"
      >
        <div class="navbar-nav text-center"
         >
          <router-link to="/about" class="nav-item nav-link my-3 mx-1"
            >關於我們</router-link
          >
          <router-link to="/products" class="nav-item nav-link my-3 mx-1"
          @click="closeMenu()"
            >產品一覽</router-link
          >
          <router-link to="/cart" v-if="this.carts" class="nav-item nav-link d-flex
          justify-content-center my-3 mx-2">
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
    closeMenu() {
      const navbarToggler = document.querySelector('.navbar-toggler');
      const navItem = document.querySelectorAll('.nav-item');
      navItem.forEach((el) => {
        el.addEventListener('click', () => {
          navbarToggler.click();
        });
      });
    },
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
  transition: all 0.6s ease-in-out;
}

@include media-breakpoint-down(lg){
  .navbar {
  z-index:5;
  position:absolute;
  left:0;
  top:0;
  /* style="height:calc(100vh - 130px)" */
  height:calc(100vh - 130px);
  background-color:gray;
}
}

</style>
