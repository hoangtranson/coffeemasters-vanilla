export default class DetailsPage extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById("details-page-template");
        const content = template.content.cloneNode(true);
        this.appendChild(content);   
    }
}
customElements.define("details-page", DetailsPage);