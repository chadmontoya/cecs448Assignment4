class navBar extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header>
        <a href="index.html" id="logo"><img src="../images/pondon.png" alt="logo"></a>
        <nav>
            <ul class="nav__links">
                <li><a href="discount.html">DISCOUNT</a></li>
                <li><a href="pre-order.html">PRE-ORDER</a></li>
                <li><a href="inquiry.html">INQUIRY</a></li>
                <li><a href="link.html">LINK</a></li>
            </ul>
        </nav>
        <div class="social">
            <a href="https://www.ebay.com"><img src="..//images//ebay-icon.png" alt="ebay"></a>
            <a href="https://www.facebook.com"><img src="..//images//social//facebook.png" alt="facebook"></a>
            <a href="https://www.instagram.com"><img src="..//images//social//instagram.png" alt="instagram"></a>
            <a href="https://www.twitter.com"><img src="..//images//social//twitter.png" alt="twitter"></a>
        </div>
        </header>

        <div class="filters">
            <div class="placeholder"></div>

            <!-- DROPDOWN MENU -->

            <div class="container">
                <div class="dropdown">
                    <button class="dropbtn">MEN'S</button>
                    <div class="dropdown-content">
                        <a href="#" class="category">CATEGORY</a>
                        <a href="#">MEN'S SYNTHETIC</a>
                        <a href="#">SHIRTS</a>
                        <a href="#">PANTS</a>
                        <a href="#">CREWNECK/HOODIE</a>
                        <a href="#">JACKETS</a>
                        <a href="#">LEATHER SNEAKER</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">WOMEN'S</button>
                    <div class="dropdown-content">
                        <a href="#" class="category">CATEGORY</a>
                        <a href="#">GLASSES</a>
                        <a href="#">SHIRTS</a>
                        <a href="#">PANTS</a>
                        <a href="#">SHOES</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">KIDS</button>
                    <div class="dropdown-content">
                        <a href="#" class="category">CATEGORY</a>
                        <a href="#">GLASSES</a>
                        <a href="#">SHIRTS</a>
                        <a href="#">PANTS</a>
                        <a href="#">SHOES</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">ACCESSORIES</button>
                    <div class="dropdown-content">
                        <a href="#" class="category">CATEGORY</a>
                        <a href="#">CAPS</a>
                        <a href="#">WALLETS</a>
                        <a href="#">BACKPACKS</a>
                        <a href="#">BAGS</a>
                        <a href="#">MASKS</a>
                        <a href="#">BELTS</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">TOYS</button>
                    <div class="dropdown-content">
                        <a href="#" class="category">CATEGORY</a>
                        <a href="#">GLASSES</a>
                        <a href="#">SHIRTS</a>
                        <a href="#">PANTS</a>
                        <a href="#">SHOES</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">BRAND</button>
                    <div class="dropdown-content">
                        <a href="#" class="category">CATEGORY</a>
                        <a href="#">GLASSES</a>
                        <a href="#">SHIRTS</a>
                        <a href="#">PANTS</a>
                        <a href="#">SHOES</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="dropbtn">SALE</button>
                    <div class="dropdown-content">
                        <a href="#" class="category">CATEGORY</a>
                        <a href="#">GLASSES</a>
                        <a href="#">SHIRTS</a>
                        <a href="#">PANTS</a>
                        <a href="#">SHOES</a>
                    </div>
                </div>
            </div>

            <!-- DROPDOWN MENU -->

            <div class="cart">
                <a href="#"><img src="../images/bag.png" alt="bag"></a>
                <span>$0</span>
            </div>
        </div>

        `;
    }
}

customElements.define('nav-bar', navBar);