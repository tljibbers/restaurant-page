import home from "./pages/home";
import about from "./pages/about";

const homeButton = document.querySelector("#home")
const aboutButton = document.querySelector("#about")

homeButton.addEventListener("click", home)
aboutButton.addEventListener("click", about)