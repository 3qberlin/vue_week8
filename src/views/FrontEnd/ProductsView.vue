<template>
  <div class="container mt-md-5 mt-3 mb-7">
    <div class="row">
      <div class="col-md-4">
        <div
          class="accordion border border-bottom border-top-0 border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white
               border border-bottom-0 border-top border-start-0
                border-end-0 rounded-0"
              id="headingOne"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">Lorem ipsum?</h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseOne"
              class="collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li
                    class="py-2 d-block text-muted"
                  >
                    <RouterLink to="/products">全部</RouterLink>
                  </li>
                  <li
                    v-for="item in categories"
                    :key="item"
                    class="py-2 d-block text-muted"
                  >
                    <RouterLink :to="`/products?category=${item}`">{{
                      item
                    }}</RouterLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border
               border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingTwo"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">Lorem ipsum</h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseTwo"
              class="collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum?</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border
               border-bottom-0 border-top border-start-0 border-end-0 rounded-0"
              id="headingThree"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              <div
                class="d-flex justify-content-between align-items-center pe-1"
              >
                <h4 class="mb-0">Lorem ipsum</h4>
                <i class="fas fa-chevron-down"></i>
              </div>
            </div>
            <div
              id="collapseThree"
              class="collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="card-body py-0">
                <ul class="list-unstyled">
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                  <li>
                    <a href="#" class="py-2 d-block text-muted">Lorem ipsum</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-8">
        <div class="row">
          <div class="col-md-6" v-for="item in products" :key="item.id">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img
                :src="item.imagesUrl"
                style="max-height: 350px; min-height: 300px"
                class="card-img-top rounded-0 object-fit-fill"
                alt="..."
              />
              <a href="#" class="text-dark">
                <i
                  class="far fa-heart position-absolute"
                  style="right: 16px; top: 16px"
                ></i>
              </a>
              <div class="card-body p-0">
                <h4 class="mb-0 mt-3">
                  <RouterLink :to="`/product/${item.id}`">{{
                    item.title
                  }}</RouterLink>
                </h4>
                <p class="card-text mb-0">
                  NT${{ item.price }}
                  <span class="text-muted"
                    ><del> NT${{ item.origin_price }}</del></span
                  >
                </p>
                <p class="text-muted mt-3"></p>
              </div>
            </div>
          </div>
        </div>
        <nav class="d-flex justify-content-center">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item active">
              <a class="page-link" href="#">1</a>
            </li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item">
              <a class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default {
  data() {
    return {
      products: [],
      categories: ['海景', '野外', '飯店', '民宿'],
    };
  },
  watch: {
    '$route.query': {
      handler() {
        this.getProducts();
      },
    },
    deep: true,
  },
  methods: {
    getProducts() {
      const { category = '' } = this.$route.query;
      console.log('category', category);
      const api = `${VITE_API_URL}api/${VITE_API_NAME}/products?category=${category}`;
      axios.get(api).then((res) => {
        this.products = res.data.products;
        console.log(res);
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
