<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="collapse" id="collapseExample">
        <div class="card card-body">
          Some placeholder content for the collapse component. This panel is
          hidden by default but revealed when the user activates the relevant
          trigger.
        </div>
      </div>
      <div class="col-md-7">
        <div id="carouselExample" class="carousel slide w-100 border">
          <div class="carousel-inner" style="max-height: 500px">
            <div
              class="carousel-item"
              v-for="(pic, index) in product.imagesUrl"
              :key="index"
              :class="{ active: index === 0 }"
            >
              <img
                :src="pic"
                class="d-block w-100 object-fit-cover"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div class="col-md-5">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb bg-white px-0 mb-0 py-3">
            <li class="breadcrumb-item">
              <RouterLink to="/" class="text-secondary">Home</RouterLink>
            </li>
            <li class="breadcrumb-item">
              <RouterLink to="/product" class="text-secondary"
                >Product</RouterLink
              >
            </li>
            <li class="breadcrumb-item active" aria-current="page">Detail</li>
          </ol>
        </nav>
        <h2 class="fw-bold h1 mb-1">{{ product.title }}</h2>
        <p class="mb-0 text-muted text-end">
          <del>NT${{ product.origin_price }}</del>
        </p>
        <p class="h4 fw-bold text-end">NT${{ product.price }}</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon1"
                >
                  <i class="bi bi-dash"></i>
                </button>
              </div>
              <input
                type="text"
                class="form-control border-0 text-center my-auto shadow-none bg-light"
                placeholder=""
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
                value="1"
              />
              <div class="input-group-append">
                <button
                  class="btn btn-outline-dark border-0 py-2"
                  type="button"
                  id="button-addon2"
                >
                  <i class="bi bi-plus-lg"></i>
                </button>
              </div>
            </div>
          </div>
          <div class="col-6">
            <a
              class="text-nowrap btn btn-dark w-100 py-2"
              @click.prevent="addToCart(product.id)"
              >加入購物車</a
            >
          </div>
        </div>
      </div>
    </div>
    <h5 class="fw-bold mt-5">{{ product.description }}</h5>
    <div class="swiper-container mt-4 mb-5">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <div class="card border-0 mb-4 position-relative position-relative">
            <img
              :src="product.imageUrl"
              class="card-img-top rounded-0"
              alt="..."
            />
            <a href="#" class="text-dark"> </a>
            <div class="card-body p-0">
              <h4 class="mb-0 mt-3">
                <a href="#"></a>
              </h4>
              <p class="card-text mb-0 fs-5">
                介紹 <span class="text-muted"></span>
              </p>
              <p>{{ product.content }}</p>
              <p class="text-muted mt-3"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'pinia';

import cartPinia from '@/stores/cartPinia';

import axios from 'axios';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default {
  data() {
    return {
      product: [],
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      axios
        .get(`${VITE_API_URL}/api/${VITE_API_NAME}/product/${id}`)
        .then((res) => {
          console.log(res);
          this.product = res.data.product;
          console.log(this.product);
        });
    },
    ...mapActions(cartPinia, ['addToCart']),
  },
  mounted() {
    this.getProduct();
  },
};
</script>
