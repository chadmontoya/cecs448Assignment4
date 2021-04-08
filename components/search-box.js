class searchBox extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <div class="search-box">
            <input class="search-txt" type="text" placeholder="ITEM SEARCH">
            <a class="search-btn" href="#"><img src="images/search.png" alt=""></a>
        </div>
        `;

    }
}

customElements.define('search-box', searchBox);