<template>
  <div class="container">
    <TravelConditions class="d-none" />
    <div class="row justify-content-center">
      <div class="col-md-10">
        <h3 class="fw-bold mb-4 pt-3">結帳</h3>
      </div>
    </div>
    <div class="row flex-row-reverse justify-content-center pb-5">
      <div class="col-md-4">
        <div class="border p-4 mb-4">
          <div class="d-flex" v-for="item in carts" :key="item">
            <img
              :src="item.product.imagesUrl"
              alt="productImages"
              class="me-2"
              style="width: 48px; height: 48px; object-fit: cover"
            />
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
                <th scope="row" class="border-0 px-0 pt-4 font-weight-normal">
                  小計
                </th>
                <td class="text-end border-0 px-0 pt-4">
                  NT${{ this.final_total }}
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
            <p class="mb-0 h4 fw-bold">NT${{ this.final_total }}</p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <p>聯絡資訊</p>
        <v-form v-slot="{ errors }">
          <div class="mb-0">
            <label for="ContactMail" class="text-muted mb-0">
              <span class="text-danger">*</span>
              Email
            </label>
            <v-field
              name="email"
              type="email"
              rules="required|email"
              class="form-control"
              id="ContactMail"
              placeholder="example@gmail.com"
              v-model="form.user.email"
              :class="{ 'is-invalid': errors['email'] }"
            >
            </v-field>
            <ErrorMessage class="text-danger" name="email" />
          </div>
          <div class="mb-2">
            <label for="ContactName" class="text-muted mb-0 mt-2">
              <span class="text-danger">*</span> 姓名
            </label>
            <v-field
              name="姓名"
              type="text"
              rules="required"
              class="form-control"
              id="ContactName"
              placeholder="王 小明"
              v-model="form.user.name"
              :class="{ 'is-invalid': errors['姓名'] }"
            >
            </v-field>
            <ErrorMessage class="text-danger" name="姓名" />
          </div>
          <div class="mb-2">
            <label for="ContactTel" class="text-muted mb-0 mt-2">
              <span class="text-danger">*</span> 電話
            </label>
            <v-field
              name="電話"
              type="tel"
              rules="required"
              class="form-control"
              id="ContactTel"
              placeholder="0912345678"
              v-model="form.user.tel"
              :class="{ 'is-invalid': errors['電話'] }"
            >
            </v-field>
            <ErrorMessage class="text-danger" name="電話" />
          </div>
          <div class="mb-2">
            <label for="ContactAddress" class="text-muted mb-0 mt-2">
              <span class="text-danger">*</span> 地址
            </label>
            <v-field
              name="地址"
              type="text"
              rules="required"
              class="form-control"
              id="ContactAddress"
              placeholder="台灣台北市大安區羅斯福利101號"
              v-model="form.user.address"
              :class="{ 'is-invalid': errors['地址'] }"
            >
            </v-field>
            <ErrorMessage class="text-danger" name="地址" />
          </div>
          <div>
            <label for="travelDate" class="text-muted mb-0 mt-2"
              >旅遊期間</label
            >
            <input
              type="text"
              class="form-control"
              id="travelDate"
              disabled
              :value="startTime + '   到   ' + endTime"
            />
          </div>
          <div class="mb-2">
            <label for="travelPeopleNum" class="text-muted mb-0 mt-2"
              >人數</label
            >
            <input
              type="text"
              class="form-control"
              id="travelPeopleNum"
              disabled
              :value="selectedPeople"
            />
          </div>
          <div class="mb-2">
            <label for="ContactMessage" class="text-muted mb-0">備註</label>
            <textarea
              class="form-control"
              rows="3"
              id="ContactMessage"
              placeholder="其他留言"
              v-modal="form.message"
            ></textarea>
          </div>
        </v-form>
        <div
          class="d-flex flex-column-reverse flex-md-row mt-4
           justify-content-between align-items-center align-items-end w-100"
        >
          <RouterLink
            to="/cart"
            class="text-dark mt-md-0 mt-3 d-flex align-items-center"
          >
            <i class="bi bi-arrow-left"></i>
            <a class="ms-3 text-decoration-none text-muted text-nowrap h-100"
              >回 購物車</a
            ></RouterLink
          >
          <RouterLink
            to="/checkout"
            class="mx-5 btn btn-dark w-100 mt-4"
            @click="buildOrder()"
            >送出訂單</RouterLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';

import cartPinia from '@/stores/cartPinia';

import axios from 'axios';

import Swal from 'sweetalert2';

import TravelConditions from '@/components/TravelConditions.vue';

import travelConditionsPinia from '@/stores/travelConditionsPinia';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default {
  computed: {
    ...mapState(cartPinia, ['final_total', 'total']),
    ...mapState(travelConditionsPinia, [
      'selectedPeople',
      'startTime',
      'endTime',
    ]),
  },
  methods: {
    ...mapActions(cartPinia, ['getCarts', 'pinia_carts', 'carts']),
    ...mapActions(travelConditionsPinia, ['setPeople', 'getStart', 'getEnd']),
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
      const cart = {
        product_id: item.product_id,
        qty: item.qty - 1,
      };
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/cart/${item.id}`;
      axios.put(api, { data: cart }).then(() => {
        this.carts.qty = cart.qty;
        this.getCarts();
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
    buildOrder() {
      const api = `${VITE_API_URL}/api/${VITE_API_NAME}/order`;
      const order = this.form;
      axios
        .post(api, { data: order })
        .then(() => {
          this.$router.push({ name: 'checkoutSuccess' });
          this.getCarts();
        })
        .catch(() => {
          Swal.fire({
            icon: 'error',
            title: '表單未正確填寫',
            text: '請依提示填寫',
          });
        });
    },
  },
  mounted() {
    this.getCarts();
  },
  data() {
    return {
      couponContent: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  components: {
    TravelConditions,
  },
};
</script>
