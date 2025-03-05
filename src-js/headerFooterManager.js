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
                            <a href="./works">Work</a>
                        </li>
                        <li>
                            <a href="./about-me">About</a>
                        </li>
                        <li>
                            <a href="./contact-me">Contact</a>
                        </li>
                        <li>
                            <a href="./norton-upad">Norton Up-Ad</a>
                        </li>
                    </ul>

                    <ul class="mobile-menu">
                        <li>
                            <a href="./works">Work</a>
                        </li>
                        <li>
                            <a href="./about-me">About</a>
                        </li>
                        <li>
                            <a href="./contact-me">Call</a>
                        </li>
                        <li>
                            <a href="./norton-upad">Up-Ad</a>
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
			<div class="container">
				<div class="links">
					<a href="/" class="logo">
						<img src="./assets/icons/simbahm-logo.svg" alt="Simbah M Logo" />
					</a>
					<div class="footer-directory-column">
						<h1>Works</h1>
						<ul>
							<li>
								<a href="./logo-desgin">Logo Design</a>
							</li>
							<li>
								<a href="./ui-ux-design">UI UX Design</a>
							</li>
							<li>
								<a href="./norton-upad">Norton UpAd</a>
							</li>
						</ul>
					</div>

					<div class="footer-directory-column">
						<h1>Social Media</h1>
						<ul>
							<li>
								<a target="_blank" href="https://rb.gy/gxfh30">Facebook</a>
							</li>
							<li>
								<a
									target="_blank"
									href="https://www.instagram.com/simbah.design/"
									>Instagram</a
								>
							</li>
							<li>
								<a target="_blank" href="https://shorturl.at/E98X0">LinkedIn</a>
							</li>
						</ul>
					</div>

					<div class="footer-directory-column">
						<h1>contacts</h1>
						<ul>
							<li>
								<a target="_blank" href="tel:+263774018766">+263 77 401 8766</a>
							</li>
							<li>
								<a target="_blank" href="mailto:simba@simbahm.com"
									>simba@simbahm.com</a
								>
							</li>
						</ul>
					</div>
				</div>
				<hr />
				<div class="copyright">
					<span class="copyright">
						Copyright © 2025 Simbah M. All rights reserved.
					</span>
				</div>
			</div>
		</footer>
        `
	}
}

customElements.define("special-header", SpecialHeader)
customElements.define("special-footer", SpecialFooter)
