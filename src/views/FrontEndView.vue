<template>
  <div class="container d-flex flex-column">
    <nav class="navbar navbar-expand-lg navbar-light">
      <router-link to="/home" class="navbar-brand">Home?</router-link>
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
          <a class="nav-item nav-link" href="./cart.html"
            ><i class="fas fa-shopping-cart"></i
          ></a>
        </div>
      </div>
    </nav>
  </div>
  <router-view></router-view>
  <footer>
    <div class="bg-dark py-5">
      <div class="container">
        <div
          class="d-flex align-items-center justify-content-between text-white mb-md-7 mb-4"
        >
          <a class="text-white h4" href="./index.html">LOGO</a>
          <ul class="d-flex list-unstyled mb-0 h4">
            <li>
              <a href="#" class="text-white mx-3"
                ><i class="fab fa-facebook"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-white mx-3"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
            <li>
              <a href="#" class="text-white ms-3"
                ><i class="fab fa-line"></i
              ></a>
            </li>
          </ul>
        </div>
        <div
          class="d-flex flex-column flex-md-row
           justify-content-between align-items-md-end
            align-items-start text-white"
        >
          <div class="mb-md-0 mb-1">
            <p class="mb-0">02-3456-7890</p>
            <p class="mb-0">service@mail.com</p>
          </div>
          <p class="mb-0">© 2020 LOGO All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped></style>
