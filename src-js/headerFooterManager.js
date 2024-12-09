

class SpecialHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
            <nav class="navigation-bar">
                <div class="logo">
                    <a href="./">
                        <img src="./assets/icons/simbahm-logo-white.svg" alt="Simbah M Logo">
                        <img class="mobile-logo" src="./assets/icons/simbahm-logo-mark.svg" alt="Simbah M Logo Icon">
                    </a>
                </div>
                <div class="nav-items">
                    <ul class="desktop-menu">
                        <li>
                            <a href="./ui-ux-design">UI / UX Design</a>
                        </li>
                        <li>
                            <a href="./logo-desgin">Logo Design</a>
                        </li>
                        <li>
                        <li>
                            <a href="./about-me">About</a>
                        </li>
                        <li>
                            <a href="./contact-me">Contact</a>
                        </li>
                    </ul>

                    <ul class="mobile-menu">
                        <li>
                            <a href="./ui-ux-design">UI</a>
                        </li>
                        <li>
                            <a href="./logo-desgin">Logo</a>
                        </li>
                        <li>
                            <a href="./about-me">About</a>
                        </li>
                        <li>
                            <a href="./contact-me">Call</a>
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
            </nav>
        </header>
        `
    }
}

class SpecialFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="website-tag">
                <img src="./assets/icons/simbahm-logo.svg" alt="Simbah M Logo">
            </div>
            <div class="copyright">
                <p>
                    © 2020 - 2024 Simbah M. All Rights Reserved.
                </p>
            </div>
        </footer>
        `
    }
}

customElements.define('special-header', SpecialHeader)
customElements.define('special-footer', SpecialFooter)