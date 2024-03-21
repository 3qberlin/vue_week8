import { defineStore } from 'pinia';

import axios from 'axios';

import Swal from 'sweetalert2';

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
        this.carts = res.data.data.carts;
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
        .then(() => {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
            didOpen: (toast) => {
              // eslint-disable-next-line no-param-reassign
              toast.onmouseenter = Swal.stopTimer;
              // eslint-disable-next-line no-param-reassign
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: 'success',
            title: '成功加入購物車',
          });
          this.getCarts();
        });
    },
  },
});
