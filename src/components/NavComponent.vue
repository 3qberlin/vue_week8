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
          <a class="nav-item nav-link" href="./cart.html"
            ><i class="fas fa-shopping-cart"></i
          ></a>
        </div>
      </div>
    </nav>
  </div>
</template>
