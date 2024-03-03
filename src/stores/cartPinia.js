import { defineStore } from 'pinia';

import axios from 'axios';

const { VITE_API_URL, VITE_API_NAME } = import.meta.env;

export default defineStore('cartPinia', {
  state: () => ({
    carts: [],
    final_total: 0,
    total: 0,
  }),
  actions: {
    getCarts() {
      axios.get(`${VITE_API_URL}/api/${VITE_API_NAME}/cart`).then((res) => {
        console.log('piniaRes', res);
        this.carts = res.data.data.carts;
        console.log('piniaCarts', this.carts);
        this.final_total = res.data.data.final_total;
        this.total = res.data.data.total;
      });
    },
    addToCart(id) {
      const order = {
        product_id: id,
        qty: 1,
      };
      axios.post(`${VITE_API_URL}api/${VITE_API_NAME}/cart`, { data: order })
        .then((res) => {
          console.log(res);
          this.getCarts();
        });
    },
  },
});
