const menuIconContainer = document.querySelector("nav .menu-icon-container")
const navContainer = document.querySelector(".nav-container")

menuIconContainer.addEventListener("click", () => {
	navContainer.classList.toggle("active")
})

function openNav() {
	document.getElementById("myNav").style.display = "block"
	document.body.classList.add("hide")
}

function closeNav() {
	document.getElementById("myNav").style.display = "none"
	document.body.classList.remove("hide")
}
