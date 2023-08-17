export default class DetailsPage extends HTMLElement {
    constructor() {
        super();
        this.root = this.attachShadow({ mode: "open" });
        
        const styles = document.createElement("style");
        this.root.appendChild(styles);


        async function loadCSS() {
            const request = await fetch("./pages/detail-page/detail-page.css");
            styles.textContent = await request.text();
        }

        loadCSS();
    }
}
customElements.define("details-page", DetailsPage);