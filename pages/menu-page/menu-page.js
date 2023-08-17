export default class MenuPage extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({ mode: "open" });

        const styles = document.createElement("style");
        this.root.appendChild(styles);

        // const template = document.getElementById("menu-page-template");
        // const content = template.content.cloneNode(true);
        // this.root.appendChild(content);

        async function loadCSS() {
            const request = await fetch("./pages/menu-page/menu-page.css");
            styles.textContent = await request.text();
        }

        loadCSS();
    }

    
}
customElements.define("menu-page", MenuPage);