import meatPie from "../images/meat-pie-svgrepo-com.svg"
import sheep from "../images/sheep-svgrepo-com.svg"

export default function about(){
    const container = document.querySelector("#content");
    removeChild(container);
    const aboutUsMainContainer = document.createElement("div");
    const aboutUsContainer = document.createElement("div");
    const contactUsMainContainer = document.createElement("div")
    const contactUsContainer = document.createElement("div");

    const aboutUsHeader = document.createElement("h1");
    aboutUsHeader.textContent = "About Us"

    const aboutUsContent = document.createElement("h2");
    aboutUsContent.textContent = "Here at The Meat Parlor we pride ourselves at creating the best food for the people to eat! Everything is natural and homegrown, so there's no need to worry about pesky chemicals getting into your food."
    
    const meatPieSVG = new Image();
    meatPieSVG.src = meatPie;
    meatPieSVG.id = "meat-Pie"

    aboutUsContainer.appendChild(aboutUsHeader);
    aboutUsContainer.appendChild(aboutUsContent);
    aboutUsContainer.classList.add("about-us")

    aboutUsMainContainer.appendChild(aboutUsContainer);
    aboutUsMainContainer.appendChild(meatPieSVG);
    aboutUsMainContainer.classList.add("about-us-flex")

    const sheepSVG = new Image();
    sheepSVG.src = sheep;
    sheepSVG.id = "sheep"

    const contactUsHeader = document.createElement("h1");
    contactUsHeader.textContent = "Want To Contact Us?"
    
    const contactUsContent = document.createElement("h2");
    contactUsContent.textContent = "Email: blankName@gmail.com/ Phone Number: 976-123-4567"

    contactUsContainer.appendChild(contactUsHeader);
    contactUsContainer.appendChild(contactUsContent);
    contactUsContainer.classList.add("contact-us");

    contactUsMainContainer.appendChild(sheepSVG);
    contactUsMainContainer.appendChild(contactUsContainer);
    contactUsMainContainer.classList.add("contact-us-flex");

    container.appendChild(aboutUsMainContainer);
    container.appendChild(contactUsMainContainer);
    

    
}

function removeChild(container){
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}