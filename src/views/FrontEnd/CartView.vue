<template>
  <div class="container">
    <div class="mt-3">
      <h3 class="mt-3 mb-4">購物車</h3>
      <div class="row">
        <div class="col-md-8 table-responsive">
          <table class="table table-hover">
            <thead v-if="this.carts.length >= 1">
              <tr class="text-nowrap">
                <th scope="col" class="border-0 ps-0">品項</th>
                <th scope="col" class="border-0">數量</th>
                <th scope="col" class="border-0">單價</th>
                <th scope="col" class="border-0">刪除</th>
                <th scope="col" class="border-0 text-danger">
                  <div
                    class="badge bg-danger fw-normal"
                    @click="delCarts"
                    style="cursor: pointer"
                  >
                    全刪
                  </div>
                </th>
              </tr>
            </thead>
            <tbody v-if="this.carts.length >= 1">
              <tr
                class="border-bottom border-top"
                v-for="item in carts"
                :key="item"
              >
                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                  <img
                    :src="item.product.imagesUrl"
                    alt="images"
                    style="width: 72px; height: 72px; object-fit: cover"
                  />
                  <p class="mb-0 fw-bold ms-3 d-inline-block">
                    {{ item.product.title }}
                  </p>
                </th>
                <td class="border-0 align-middle" style="max-width: 160px">
                  <div class="input-group pe-5">
                    <div class="input-group-prepend">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon1" @click="reduceProduct(item)"
                      >
                        <i class="bi bi-dash"></i>
                      </button>
                    </div>
                    <input
                      type="text"
                      class="form-control border-0 text-center my-auto shadow-none"
                      placeholder=""
                      aria-label="Example text with button addon"
                      aria-describedby="button-addon1"
                      :value="item.qty"
                      :id="item.id"
                      :qty = item.qty
                      @change="updateQty($event, item)"
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon2" @click="addProduct(item)"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto">
                    {{ item.qty * item.product.price }}
                  </p>
                </td>
                <td class="border-0 align-middle text-center">
                  <i
                    class="bi bi-trash3 text-danger"
                    style="cursor: pointer"
                    @click="delCartItem(item.id)"
                  ></i>
                </td>
                <td></td>
              </tr>
            </tbody>
            <tbody v-else>
              <p class="fs-5 text-center">
                沒有任何商品，去<router-link
                  to="/products"
                  class="fw-normal text-decoration-none
                   btn btn-sm bg-dark mx-3 text-white"
                  >產品一覽</router-link
                >挑一個吧！
              </p>
            </tbody>
          </table>
          <div class="input-group w-50 mb-3" v-if="this.carts.length >= 1">
            <input
              type="text"
              class="form-control rounded-0 border-bottom border-top-0
               border-start-0 border-end-0 shadow-none"
              placeholder="Coupon Code"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="couponContent"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-dark border-bottom border-top-0
                 border-start-0 border-end-0 rounded-0"
                type="button"
                id="button-addon2"
              >
                <i class="bi bi-ticket-perforated" @click="couponTicket"></i>
              </button>
              <span v-if="this.noneCoupon">{{ this.noneCoupon }}</span>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <h4 class="fw-bold mb-4">訂單資料</h4>
            <table class="table text-muted border-bottom">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                    小計
                  </th>
                  <td class="text-end border-0 px-0 pt-4">
                    NT${{ this.total }}
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    class="border-0 px-0 pt-0 pb-4 font-weight-normal"
                  >
                    付款方式
                  </th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">LinePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總計</p>
              <p class="mb-0 h4 fw-bold" v-if="couponStatus">
                NT${{ this.final_total }}
              </p>
              <p class="mb-0 h4 fw-bold" v-else>NT${{ this.total }}</p>
            </div>
              <RouterLink
              to="/checkout">
            <button v-if="this.carts.length <= 0"
               class="btn btn-dark w-100 mt-4" disabled tabindex="-1">先選購商品吧</button>
            <button v-else class="btn btn-dark w-100 mt-4">送出訂單</button>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    :is-full-page="fullPage"/>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import cartPinia from '@/stores/cartPinia';

import axios from 'axios';

import Loading from 'vue-loading-overlay';

import Swal from 'sweetalert2';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default {
  computed: {
    ...mapState(cartPinia, ['carts', 'final_total', 'total']),
  },
  methods: {
    ...mapActions(cartPinia, ['getCarts', 'pinia_carts', 'carts']),
    addProduct(item) {
      const cart = {
        product_id: item.product_id,
        qty: item.qty + 1,
      };
      this.showLoading();
      setTimeout(() => {
        const api = `${VITE_API_URL}/api/${VITE_API_NAME}/cart/${item.id}`;
        axios.put(api, { data: cart }).then(() => {
          this.carts.qty = cart.qty;
          this.getCarts();
        });
      }, 500);
    },
    showLoading() {
      this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
      }, 900);
    },
    reduceProduct(item) {
      const condition = item.qty;
      if (condition === 1) {
        Swal.fire({
          title: '最低數量為1筆',
          showClass: {
            popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    `,
          },
          hideClass: {
            popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    `,
          },
        });
      } else {
        const cart = {
          product_id: item.product_id,
          qty: item.qty - 1,
        };
        this.showLoading();
        const api = `${VITE_API_URL}/api/${VITE_API_NAME}/cart/${item.id}`;
        axios.put(api, { data: cart }).then(() => {
          this.carts.qty = cart.qty;
          this.getCarts();
        });
      }
    },
    delCartItem(item) {
      this.showLoading();
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/cart/${item}`;
      axios
        .delete(api)
        .then(() => {
          this.getCarts();
        })
        .catch(() => {
        });
    },
    couponTicket() {
      const textContent = {
        code: this.couponContent,
      };
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/coupon`;
      this.showLoading();
      axios
        .post(api, { data: textContent })
        .then((res) => {
          this.final_total = res.data.data.final_total;
          this.noneCoupon = '已套用優惠券';
          this.couponStatus = true;
          this.getCarts();
        })
        .catch((err) => {
          this.noneCoupon = err.response.data.message;
          this.final_total = this.total;
          this.couponStatus = false;
          this.getCarts();
        });
    },
    delCarts() {
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/carts`;
      Swal.fire({
        title: '刪除確認',
        text: '確定刪除全部商品？',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '確認刪除',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          axios
            .delete(api)
            .then(() => {
              this.getCarts();
              Swal.fire({
                title: '購物車已清空',
                text: '商品清空',
                icon: 'success',
              });
            })
            .catch(() => {});
        }
      });
    },
    updateQty(event, item) {
      const newValue = parseInt(event.target.value, 10);
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: newValue,
      };
      if (newValue >= 1 && newValue <= 20) {
        axios.put(api, { data: cart }).then(() => {
          this.carts.qty = cart.qty;
          this.getCarts();
        });
      } else {
        Swal.fire('請輸入1以上，20以內的數量');
      }
    },
  },
  mounted() {
    this.getCarts();
  },
  data() {
    return {
      couponContent: '',
      noneCoupon: '',
      countTotal: 0,
      couponStatus: false,
      isLoading: false,
      fullPage: true,
      qty: 0,
    };
  },
  components: {
    Loading,
  },
};
</script>
