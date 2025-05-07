import "./styles.css";
import home from "./pages/home";
import about from "./pages/about";
import menu from "./pages/menu";

const homeButton = document.querySelector("#home")
const menuButton = document.querySelector("#menu")
const aboutButton = document.querySelector("#about")

home()
homeButton.addEventListener("click", home)
menuButton.addEventListener("click", menu)
aboutButton.addEventListener("click", about)
