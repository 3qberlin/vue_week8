<template>
  <div class="container">
    <div class="mt-3">
      <h3 class="mt-3 mb-4">購物車</h3>
      <div class="row">
        <div class="col-md-8">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="border-0 ps-0">品項</th>
                <th scope="col" class="border-0">數量</th>
                <th scope="col" class="border-0">單價</th>
                <th scope="col" class="border-0"></th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-bottom border-top" v-for="item in carts" :key="item">
                <th scope="row" class="border-0 px-0 font-weight-normal py-4">
                  <img
                    :src="item.product.imagesUrl"
                    alt=""
                    style="width: 72px; height: 72px; object-fit: cover"
                  />
                  <p class="mb-0 fw-bold ms-3 d-inline-block">
                    {{ item.product.title }}
                    <!-- {{ item.product.description }} -->
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
                      :id="item.product.id"
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
                </td>
                <td class="border-0 align-middle">
                  <p class="mb-0 ms-auto">{{ item.qty * item.product.price }}</p>
                </td>
                <td class="border-0 align-middle">
                  <i class="bi bi-trash3 text-danger" style="cursor:pointer;"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="input-group w-50 mb-3">
            <input
              type="text"
              class="form-control rounded-0 border-bottom
               border-top-0 border-start-0 border-end-0 shadow-none"
              placeholder="Coupon Code"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <div class="input-group-append">
              <button
                class="btn btn-outline-dark border-bottom
                 border-top-0 border-start-0 border-end-0 rounded-0"
                type="button"
                id="button-addon2"
              >
              <i class="bi bi-ticket-perforated"></i>
              </button>
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
              <p class="mb-0 h4 fw-bold">NT${{ total }}</p>
            </div>
            <a href="./checkout.html" class="btn btn-dark w-100 mt-4"
              >送出訂單</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions, mapState } from 'pinia';

import cartPinia from '@/stores/cartPinia';

export default {
  computed: {
    ...mapState(cartPinia, ['carts', 'final_total', 'total']),
  },
  methods: {
    ...mapActions(cartPinia, ['getCarts', 'pinia_carts', 'carts']),
  },
  mounted() {
    this.getCarts();
  },
};
</script>
