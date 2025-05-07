import meatResizable from "../images/meat-svgrepo-com.svg";

export default function home(){
    const contentContainer = document.querySelector("#content");

    const homeContainer = document.createElement("div");
    homeContainer.classList.add("home-container");

    const meatContainer = document.createElement("div");
    const meatSVG = new Image();
    meatSVG.src = meatResizable
    meatSVG.id = "meat-resize"

    meatContainer.appendChild(meatSVG);

    const welcomeHeader = document.createElement("h1");
    welcomeHeader.textContent = "Welcome To The Meat Parlor!"
    const tagLine = document.createElement("h2");
    tagLine.textContent = "Feel Free To Puruse Our Meat Selection!"

    removeChild(contentContainer)
    homeContainer.appendChild(meatContainer);
    
    const welcomeTag = document.createElement("div");
    welcomeTag.classList.add("welcome-Tag");
    welcomeTag.appendChild(welcomeHeader);
    welcomeTag.appendChild(tagLine);
    
    homeContainer.appendChild(welcomeTag);

    contentContainer.appendChild(homeContainer);
   
}

function removeChild(container){
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}