const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);
HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);

import Store from './services/store.js';
import { loadData } from "./services/menu.js";
import Router from './services/router.js';

window.app = {}
app.store = Store;

window.addEventListener("DOMContentLoaded", () => {
    console.log("DOM is ready");
    Router.init();
    loadData();
});

window.addEventListener('popstate',  event => {
    Router.go(event.state.route, false);
});

