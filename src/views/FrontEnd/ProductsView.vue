<template>
  <Travel-Conditions></Travel-Conditions>
  <div class="container mt-md-3 mt-2 mb-7">
    <div class="row">
      <div class="col-md-3">
        <div
          class="accordion border border-bottom border-top-0
           border-start-0 border-end-0 mb-3"
          id="accordionExample"
        >
          <div class="card border-0">
            <div
              class="card-header px-0 py-4 bg-white border border-bottom-0
               border-top border-start-0 border-end-0 rounded-0"
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
                  <li class="py-2 d-block text-muted">
                    <RouterLink
                      to="/products"
                      class="text-muted text-decoration-none"
                      :class="{ linked: !$route.query.category }"
                      >全部</RouterLink
                    >
                  </li>
                  <li
                    v-for="item in categories"
                    :key="item"
                    class="py-2 d-block text-muted"
                  >
                    <RouterLink
                      :to="`/products?category=${item}`"
                      class="text-muted text-decoration-none"
                      :class="{ linked: $route.query.category === item }"
                      >{{ item }}</RouterLink
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h6>
              <i class="bi bi-exclamation-lg me-1 text-danger"></i>住訂房須知
            </h6>
            <p>支援所有行動支付</p>
            <p>透過 HexSponser 第三方安全支付管理您的付款資訊</p>
            <p>所有房型皆須付 30% 訂金，部份房型可免訂金訂房</p>
            <p></p>
          </div>
          <div></div>
        </div>
        <div
          class="accordion accordion-flush mt-4 border rounded-1"
          id="accordionFlushExample"
        >
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                有哪些行動支付？信用卡類型？
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>行動支付</p>
                <ul>
                  <li>Apple Pay</li>
                  <li>Line Pay</li>
                  <li>SomSung Pay</li>
                </ul>
                <hr />
                <p>信用卡</p>
                <ul>
                  <li>VISA</li>
                  <li>Master</li>
                  <li>Unio</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                飯店或民宿提供哪些設施？
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <ul>
                  <li>游泳池、桑拿室、熱水浴缸和按摩浴缸</li>
                  <li>健身房和健身中心</li>
                  <li>餐廳和酒吧</li>
                  <li>花園和露台</li>
                  <li>接待櫃台、接駁車和接待櫃台服務</li>
                  <li>兒童俱樂部和家庭娛樂</li>
                  <li>安全、保安、清潔度和清潔服務</li>
                  <li>商務設施</li>
                  <li>租車服務</li>
                </ul>
                <p class="text-primary ms-3">實際設備依個別訂房資訊所載</p>
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                常見問答
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>Q：遺失入住證明怎麼辦？</p>
                <p>
                  A：請撥打國際免付費專線 0809-777889 ，將有專人協助處理。或使用
                  <code> serviceTravel@gmail.com </code> 通知我們，我們將於 2
                  個小時內回覆並提供必須協助
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-9 mt-4 mt-md-0">
        <div class="row">
          <div class="col-md-6" v-for="item in products" :key="item.id">
            <div class="card border-0 mb-4 position-relative position-relative">
              <RouterLink
                :to="`/product/${item.id}`"
                class="text-dark text-decoration-none"
              >
                <img
                  :src="item.imagesUrl"
                  style="max-height: 350px; min-height: 300px"
                  class="card-img-top rounded-0 object-fit-cover imgCusHover"
                  alt="productImages"
                />
                <div class="card-body p-0">
                  <h4 class="mb-0 mt-3">
                    {{ item.title }}
                  </h4>
                  <p class="card-text mb-0">
                    NT$ {{ item.price }}
                    <span class="text-muted"
                      ><del> NT$ {{ item.origin_price }}</del></span
                    >
                  </p>
                  <p class="text-muted mt-3"></p>
                </div>
              </RouterLink>
            </div>
          </div>
        </div>
        <nav
          aria-label="Page navigation example"
          class="d-flex justify-content-center"
        >
          <ul class="pagination">
            <li
              class="page-item"
              :class="{ disabled: vuePagination.current_page === 1 }"
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
              :class="{ active: item === vuePagination.current_page }"
            >
              <a class="page-link" href="#" @click.prevent="pagination(item)">{{
                item
              }}</a>
            </li>
            <li
              class="page-item"
              :class="{
                disabled:
                  vuePagination.current_page === vuePagination.total_pages,
              }"
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

import TravelConditions from '@/components/TravelConditions.vue';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkFrZEJodyJ9.eyJpc3MiOiJodHRwczovL3Nlc3Npb24uZmlyZWJhc2UuZ29vZ2xlLmNvbS92dWUtY291cnNlLWFwaSIsImF1ZCI6InZ1ZS1jb3Vyc2UtYXBpIiwiYXV0aF90aW1lIjoxNzA5OTY5OTc1LCJ1c2VyX2lkIjoiVklrYjA4ZHhBT2F4TzRBNE1kZlphYWZ6Q1AyMyIsInN1YiI6IlZJa2IwOGR4QU9heE80QTRNZGZaYWFmekNQMjMiLCJpYXQiOjE3MDk5Njk5NzUsImV4cCI6MTcxMDQwMTk3NSwiZW1haWwiOiIzcS5iZXJsaW5AZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbIjNxLmJlcmxpbkBnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.OsCNmHr-44a97_GiU-lGqPZh_t__I34fSYoMZt-8q9UxXzizIRsbQdtE2Hjz8j0Q9v5_zLIM0uz0m1DyiwxEF0VnNfYThd_AAnHm2xFgUg1fcznIrfuHfXpIDpXdD9kn8_FNTz5393ZRBFqZzZ1ANo_61e4r6dtji5BjEOfO0fPcWKThOtKqZ55GBy3yEhf2bpq9nuo-aZWpU_FQKvKMSG8315wVI7_-0_rogd_viibO35unqI0mjGNE9qPg2fNlOuo9fqAhKLbJrkiMHnG_oHo_ELqXPcqmXg6w7Kju76SL039xK-mG9uxNjdwLqGUt_QGIc8uQ1PmV--ING3XgFA';

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
      const api = `${VITE_API_URL}api/${VITE_API_NAME}/products?category=${category}`;
      axios.get(api).then((res) => {
        this.products = res.data.products;
        this.pagination();
      });
    },
    pagination(page = 1) {
      const { category = '' } = this.$route.query;
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/products?page=${page}&category=${category}`;
      axios
        .get(api)
        .then((res) => {
          const { products, pagination } = res.data;
          this.products = products;
          this.vuePagination = pagination;
        })
        .catch(() => {
          // alert(err.response.data.message);
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
  components: {
    TravelConditions,
  },
};
</script>

<style scoped>
.imgCusHover:hover {
  transform: scale(1.1);
  transition:
    transform 1s ease,
    rotate 1s ease;
  rotate: 2deg;
}

.imgCusHover {
  transition:
    transform 1s ease,
    rotate 1s ease;
}

.linked {
  color: red !important;
  font-weight: bold;
}
</style>
