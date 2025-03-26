class SpecialHeader extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
        <section class="nav-container">
			<nav>
				<div class="desktop-nav">
					<a href="/">
						<img
							class="simbahm-logo"
							src="./assets/icons/simbahm-logo-white.svg"
							alt="Simbah M Logo"
						/>
					</a>

					<ul class="nav-items">
						<li>
							<a href="./logo-design">Logo Design</a>
						</li>
						<li>
							<a href="./ui-ux-design">UI UX Design</a>
						</li>
						<li>
							<a href="./about-me">About Me</a>
						</li>
						<li>
							<a href="./contact-me">Contact Me</a>
						</li>
					</ul>

					<a class="norton-upad" href="./norton-upad">
						<img
							src="./assets/images/home-page/norton-up-ad/norton-up-ad-logo.svg"
							alt="Norton UpAd Logo"
						/>
						<hr />
						<span>Download</span>
					</a>
				</div>

				<!-- mobile nav TODO: -->

				<div class="mobile-nav">
					<div class="mobile-nav-menu">
						<a class="simbahm-logo" href="/">
							<img
								class="simbahm-logo"
								src="./assets/icons/simbahm-logo-white.svg"
								alt="Simbah M Logo"
							/>
						</a>
						<div class="menu-icon-container">
							<div class="menu-icon">
								<span class="line-1"></span>
								<span class="line-2"></span>
							</div>
						</div>
					</div>

					<ul class="mobile-nav-items">
						<a class="norton-upad" href="./norton-upad">
							<img
								src="./assets/images/home-page/norton-up-ad/norton-up-ad-logo.svg"
								alt="Norton UpAd Logo"
							/>
							<hr class="divider" />
							<span>Download</span>
						</a>

						<hr />

						<div class="list-items">
							<li>
								<a href="./logo-design">Logo Design</a>
							</li>
							<li>
								<a href="./ui-ux-design">UI UX Design</a>
							</li>
							<li>
								<a href="about-me">About Me</a>
							</li>
							<li>
								<a href="./contact-me">Contact Me</a>
							</li>
						</div>

						<hr />

						<div class="social-media">
							<a
								target="_blank"
								href="https://www.instagram.com/simbah.design/"
							>
								<img
									src="./assets/icons/instagram.svg"
									alt="Instagram Icon"
									class="instagram"
								/>
							</a>
							<a
								target="_blank"
								href="https://www.facebook.com/profile.php?id=100083174294829"
							>
								<img
									src="./assets/icons/facebook.svg"
									alt="Facebook Icon"
									class="facebook"
								/>
							</a>
							<a
								target="_blank"
								href="https://www.behance.net/simbah_design"
							>
								<img
									src="./assets/icons/behance.svg"
									alt="Behance Icon"
									class="behance"
								/>
							</a>
						</div>
					</ul>
				</div>
			</nav>
		</section>
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
								<a target="_blank" href="https://www.behance.net/simbah_design">Behance</a>
							</li>
						</ul>
					</div>

					<div class="footer-directory-column">
						<h1>Contacts</h1>
						<ul>
							<li>
								<a target="_blank" href="tel:+263774018766">+263 77 401 8766</a>
							</li>
							<li>
								<a target="_blank" href="mailto:simadungwe@icloud.com"
									>simadungwe@icloud.com</a
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

// mobile menu TODO:

const menuIconContainer = document.querySelector("nav .menu-icon-container")
const navContainer = document.querySelector(".nav-container")

menuIconContainer.addEventListener("click", () => {
	navContainer.classList.toggle("active")
})
