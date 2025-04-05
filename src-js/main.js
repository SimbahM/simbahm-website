const menuIcon = document.querySelector("nav .menu-icon")
const mobileNavItems = document.querySelector("nav .mobile-nav-items")
const mobileMegaMenu = document.querySelector("nav .mobile-mega-menu")
const mobileMegaMenuController = document.querySelector(
	"nav .mobile-nav-items ul li .mobile-mega-menu-controller"
)
const backIcon = document.querySelector(
	"nav .mobile-mega-menu .items .back-icon"
)

menuIcon.addEventListener("click", () => {
	mobileNavItems.classList.toggle("active")
	menuIcon.classList.toggle("active")
})

mobileMegaMenuController.addEventListener("click", () => {
	mobileMegaMenu.classList.add("active")
})

backIcon.addEventListener("click", () => {
	mobileMegaMenu.classList.remove("active")
})
