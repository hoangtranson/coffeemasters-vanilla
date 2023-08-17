export default class OrderPage extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({ mode: "open" });

        const styles = document.createElement("style");
        this.root.appendChild(styles);


        async function loadCSS() {
            const request = await fetch("./pages/order-page/order-page.css");
            styles.textContent = await request.text();
        }

        loadCSS();
    }
}
customElements.define("order-page", OrderPage);