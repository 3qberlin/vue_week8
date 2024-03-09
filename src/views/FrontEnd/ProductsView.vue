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
                <h4 class="mb-0">產品分類</h4>
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
                    <RouterLink to="/products"
                     class="text-muted text-decoration-none">全部</RouterLink>
                  </li>
                  <li
                    v-for="item in categories"
                    :key="item"
                    class="py-2 d-block text-muted"
                  >
                    <RouterLink :to="`/products?category=${item}`"
                     class="text-muted text-decoration-none">{{
                      item
                    }}</RouterLink>
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
                class="card-img-top rounded-0 object-fit-cover"
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
                  <RouterLink :to="`/product/${item.id}`"
                   class="text-dark text-decoration-none">{{
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
        <!-- <nav class="d-flex justify-content-center">
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
              {{ vuePagination.has_next }}
            </li>
          </ul>
        </nav> -->
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li
      class="page-item"
      :class="{'disabled': vuePagination.current_page === 1}"
    >
      <a
        class="page-link"
        href="#"
        aria-label="Previous"
        @click.prevent="pagination(vuePagination.current_page - 1)"
      >
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li
      v-for="(item, index) in vuePagination.total_pages"
      :key="index"
      class="page-item"
      :class="{'active': item === vuePagination.current_page}"
    >
      <a
        class="page-link"
        href="#"
        @click.prevent="pagination(item)"
      >{{ item }}</a>
    </li>
    <li
      class="page-item"
      :class="{'disabled': vuePagination.current_page === vuePagination.total_pages}"
    >
      <a
        class="page-link"
        href="#"
        aria-label="Previous"
        @click.prevent="pagination(vuePagination.current_page + 1)"
      >
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

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFrZEJodyJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS92dWUtY291cnNlLWFwaSIsImF1ZCI6InZ1ZS1jb3Vyc2UtYXBpIiwiYXV0aF90aW1lIjoxNzA5OTY5OTc1LCJ1c2VyX2lkIjoiVklrYjA4ZHhBT2F4TzRBNE1kZlphYWZ6Q1AyMyIsInN1YiI6IlZJa2IwOGR4QU9heE80QTRNZGZaYWFmekNQMjMiLCJpYXQiOjE3MDk5Njk5NzUsImV4cCI6MTcxMDQwMTk3NSwiZW1haWwiOiIzcS5iZXJsaW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIjNxLmJlcmxpbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OsCNmHr-44a97_GiU-lGqPZh_t__I34fSYoMZt-8q9UxXzizIRsbQdtE2Hjz8j0Q9v5_zLIM0uz0m1DyiwxEF0VnNfYThd_AAnHm2xFgUg1fcznIrfuHfXpIDpXdD9kn8_FNTz5393ZRBFqZzZ1ANo_61e4r6dtji5BjEOfO0fPcWKThOtKqZ55GBy3yEhf2bpq9nuo-aZWpU_FQKvKMSG8315wVI7_-0_rogd_viibO35unqI0mjGNE9qPg2fNlOuo9fqAhKLbJrkiMHnG_oHo_ELqXPcqmXg6w7Kju76SL039xK-mG9uxNjdwLqGUt_QGIc8uQ1PmV--ING3XgFA';

console.log('token', token);

export default {
  data() {
    return {
      products: [],
      categories: ['海景', '野外', '飯店', '民宿'],
      vuePagination: {},
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
    pagination(page = 1) {
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/products?page=${page}`;
      axios.get(api)
        .then((res) => {
          const { products, pagination } = res.data;
          console.log('res.data', res.data);
          this.products = products;
          this.vuePagination = pagination;
          console.log('this.vuePagination', this.vuePagination);
        }).catch((err) => {
          alert(err.response.data.message);
        });
    },
    createToken() {
      axios.defaults.headers.common.Authorization = token;
    },
  },
  mounted() {
    this.getProducts();
    this.createToken();
    this.pagination();
  },
};
</script>
