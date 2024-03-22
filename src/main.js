import { createApp } from 'vue';
import { createPinia } from 'pinia';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './assets/all.scss';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import 'vue-loading-overlay/dist/css/index.css';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';

import * as AllRules from '@vee-validate/rules';
// 引入 VeeValidate 的 i18n 功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 VeeValidate 的繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import { LoadingPlugin } from 'vue-loading-overlay';
import App from './App.vue';
import router from './router';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// 將當前 VeeValidate 的語系設定為繁體中文
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');

router.afterEach(() => {
  window.scrollTo(0, 0);
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(LoadingPlugin, {
  color: '#FF0000',
});

app.component('VueDatePicker', VueDatePicker);
// 掛載 Global 的 VeeValidate 元件
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
