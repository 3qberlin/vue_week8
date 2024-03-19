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
                  <div class="badge bg-danger fw-normal"
                   @click="delCarts" style="cursor:pointer">全刪</div></th>
              </tr>
            </thead>
            <tbody v-if="this.carts.length >= 1">
              <tr class="border-bottom border-top" v-for="item in carts" :key="item">
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
                        id="button-addon1"
                      >
                      <i class="bi bi-dash" @click="reduceProduct(item)"></i>
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
                    />
                    <div class="input-group-append">
                      <button
                        class="btn btn-outline-dark border-0 py-2"
                        type="button"
                        id="button-addon2"
                      >
                      <i class="bi bi-plus-lg" @click="addProduct(item)"></i>
                      </button>
                    </div>
                  </div>
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto">{{ item.qty * item.product.price }}</p>
                </td>
                <td class="border-0 align-middle text-center">
                  <i class="bi bi-trash3 text-danger" style="cursor:pointer;"
                   @click="delCartItem(item.id)"></i>
                </td>
                <td>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
              <p class="fs-5 text-center">沒有任何商品，去<router-link
                 to="/products" class="text-dark fw-bold mx-1 text-muted
                  text-decoration-none">產品一覽</router-link
          >挑一個吧！</p>
            </tbody>
          </table>
          <div class="input-group w-50 mb-3" v-if="this.carts.length >= 1">
            <input
              type="text"
              class="form-control rounded-0 border-bottom
               border-top-0 border-start-0 border-end-0 shadow-none"
              placeholder="Coupon Code"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              v-model="couponContent"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-dark border-bottom
                 border-top-0 border-start-0 border-end-0 rounded-0"
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
                  <td class="text-end border-0 px-0 pt-4">NT${{ this.total }}
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
              <p class="mb-0 h4 fw-bold" v-if="countTotal >= 1">NT${{ this.countTotal }}</p>
              <p class="mb-0 h4 fw-bold" v-else>NT${{ this.total }}</p>
            </div>
            <RouterLink to="/checkout" class="btn btn-dark w-100 mt-4"
            :class="{ 'disabled': this.carts.length <= 0 }" tabindex="-1"
              >送出訂單</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import cartPinia from '@/stores/cartPinia';

import axios from 'axios';

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
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/cart/${item.id}`;
      axios.put(api, { data: cart }).then(() => {
        this.carts.qty = cart.qty;
        this.getCarts();
      });
    },
    reduceProduct(item) {
      const condition = item.qty;
      if (condition === 1) {
        alert('訂房數量最低為1間，欲刪除整筆請點擊紅色按鈕');
      } else {
        const cart = {
          product_id: item.product_id,
          qty: item.qty - 1,
        };
        const api = `${VITE_API_URL}/api/${VITE_API_NAME}/cart/${item.id}`;
        axios.put(api, { data: cart }).then(() => {
          this.carts.qty = cart.qty;
          this.getCarts();
        });
      }
    },
    delCartItem(item) {
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/cart/${item}`;
      axios.delete(api).then(() => {
        this.getCarts();
      }).catch((err) => {
        alert(err.response.data.message);
      });
    },
    couponTicket() {
      const textContent = {
        code: this.couponContent,
      };
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/coupon`;
      axios.post(api, { data: textContent }).then((res) => {
        this.countTotal = res.data.data.final_total;
        this.noneCoupon = '已套用優惠券';
        this.getCarts();
      }).catch((err) => {
        this.noneCoupon = err.response.data.message;
        this.countTotal = this.total;
      });
    },
    delCarts() {
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/carts`;
      axios.delete(api).then(() => {
        this.getCarts();
      }).catch(() => {
      });
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
    };
  },
};
</script>
