const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);
HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);

import Store from './services/store.js';
import { loadData } from "./services/menu.js";
import Router from './services/router.js';

import ProductItem from './components/product-item/product-item.js';

import MenuPage from './pages/menu-page/menu-page.js';
import DetailsPage from './pages/detail-page/detail-page.js';
import OrderPage from './pages/order-page/order-page.js';

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready");
    Router.init();
    loadData();
});


