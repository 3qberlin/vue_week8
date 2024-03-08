<template>
  <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          <h3 class="fw-bold mb-4 pt-3">結帳</h3>
        </div>
      </div>
      <div class="row flex-row-reverse justify-content-center pb-5">
        <div class="col-md-4">
          <div class="border p-4 mb-4">
            <div class="d-flex"  v-for="item in carts" :key="item">
              <img :src="item.product.imagesUrl" alt="" class="me-2"
               style="width: 48px; height: 48px; object-fit: cover">
              <div class="w-100">
                <div class="d-flex justify-content-between">
                  <p class="mb-0 fw-bold">{{ item.product.title }}</p>
                  <p class="mb-0">NT${{ item.product.price }}</p>
                </div>
                <p class="mb-0 fw-bold">{{ item.product.num }} 組</p>
              </div>
            </div>
            <table class="table mt-4 border-top border-bottom text-muted">
              <tbody>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-4
                   font-weight-normal">小計</th>
                  <td class="text-end border-0 px-0 pt-4">NT${{ this.final_total}}</td>
                </tr>
                <tr>
                  <th scope="row" class="border-0 px-0 pt-0 pb-4
                   font-weight-normal">付款方式</th>
                  <td class="text-end border-0 px-0 pt-0 pb-4">LinePay</td>
                </tr>
              </tbody>
            </table>
            <div class="d-flex justify-content-between mt-4">
              <p class="mb-0 h4 fw-bold">總計</p>
              <p class="mb-0 h4 fw-bold">NT${{ this.final_total}}</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <form>
            <p>聯絡資訊</p>
            <div class="mb-0">
              <label for="ContactMail" class="text-muted mb-0">Email</label>
              <input type="email" class="form-control"
               id="ContactMail" aria-describedby="emailHelp"
                placeholder="example@gmail.com">
            </div>
            <p class="mt-4">帳單寄送地址</p>
            <div class="mb-2">
              <label for="ContactName" class="text-muted mb-0">姓名</label>
              <input type="text" class="form-control"
               id="ContactName" placeholder="王 小明">
            </div>
            <div class="mb-2">
              <label for="ContactPhone" class="text-muted mb-0">電話</label>
              <input type="number" class="form-control"
               id="ContactPhone" placeholder="0912345678">
            </div>
            <div class="mb-2">
              <label for="ContactMessage" class="text-muted mb-0">備註</label>
              <textarea class="form-control" rows="3"
               id="ContactMessage" placeholder="其他留言"></textarea>
            </div>
          </form>
          <div class="d-flex flex-column-reverse flex-md-row
           mt-4 justify-content-between align-items-md-center
            align-items-end w-100">
            <RouterLink to="/cart" class="text-dark mt-md-0 mt-3 d-flex">
             <i class="bi bi-arrow-left"></i>
            <a class="ms-3 text-decoration-none text-muted">回 購物車</a></RouterLink>
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
      console.log('cart', cart);
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/cart/${item.id}`;
      axios.put(api, { data: cart }).then(() => {
        this.carts.qty = cart.qty;
        console.log('this.carts.addProduct', this.carts.qty);
        this.getCarts();
      });
    },
    reduceProduct(item) {
      const cart = {
        product_id: item.product_id,
        qty: item.qty - 1,
      };
      console.log('cart', cart);
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/cart/${item.id}`;
      axios.put(api, { data: cart }).then(() => {
        this.carts.qty = cart.qty;
        console.log('this.carts.reduceProduct', this.carts.qty);
        this.getCarts();
      });
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
        this.final_total = res.data.data.final_total;
        this.getCarts();
      });
    },
  },
  mounted() {
    this.getCarts();
  },
  data() {
    return {
      couponContent: '',
    };
  },
};
</script>
