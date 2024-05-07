

class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navigation-bar">
                <div class="logo">
                    <a href="./index.html">
                        <img src="./assets/icons/simbahm-logo-white.png" alt="Simbah M Logo">
                        <img class="mobile-logo" src="./assets/icons/simbahm-logo-mark.svg" alt="Simbah M Logo Icon">
                    </a>
                </div>
                <div class="nav-items">
                    <ul class="desktop-menu">
                        <li>
                            <a href="./work.html">Work</a>
                        </li>
                        <li>
                        <li>
                            <a href="./about-me.html">About</a>
                        </li>
                        <li>
                            <a href="./contact-me.html">Contact</a>
                        </li>
                    </ul>

                    <ul class="mobile-menu">
                        <li>
                            <a href="./work.html">Work</a>
                        </li>
                        <li>
                            <a href="./about-me.html">About</a>
                        </li>
                        <li>
                            <a href="./contact-me.html">Contact</a>
                        </li>
                    </ul>
                </div>
                <div class="social-media">
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/in/simbarashe-madungwe-5b454ab6/" target="_blank">
                                <img src="./assets/icons/linkedin.svg" alt="LinkedIn icon - Simbah M">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.behance.net/simbah_design" target="_blank">
                                <img src="./assets/icons/behance.svg" alt="Behance icon - Simbah M">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/simbah.design/" target="_blank">
                                <img src="./assets/icons/instagram.svg" alt="Instagram icon - Simbah M">
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="hamburger-menu">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </nav>
        </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <a href="./about-me.html">Simbah M @ 2024</a>
            <a href="./work.html">Work</a>
            <a href="./about-me.html">About Me</a>
            <a href="./contact-me.html">Contact Me</a>
        </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)
customElements.define('special-thank-you-footer', SpecialThankYouFooter)