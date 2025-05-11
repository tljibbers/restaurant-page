import wings from "../images/chicken-drumsticks-svgrepo-com.svg"
import meatballs from "../images/meatballs-svgrepo-com.svg"
import sausage from "../images/sausage-barbecue-svgrepo-com.svg"
import milkshake from "../images/milkshake-svgrepo-com.svg"
import water from "../images/water-drink-svgrepo-com.svg"
import coffee from "../images/coffee-svgrepo-com.svg"
import pork from "../images/pork-svgrepo-com.svg"
import chicken from "../images/chicken-svgrepo-com.svg"
import steak from "../images/steak-svgrepo-com.svg" 

export default function menu(){
    const content = document.querySelector("#content");
    removeChild(content);
    const menuContainer = document.createElement("div");
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "MENU"


    const menuPopulation = [{
        menuTitle: "Appetizers",
        class: "appetizer",
        items: [{image: wings, name: "Golden Chicken Wings", id: "chicken-wings", price: "$5.99"},
            {image: meatballs, name: "Meaty Meatballs", id: "meatballs", price: "$3.99"},
            {image: sausage, name: "Mighty Sausage Links", id: "sausage", price: "$6.99"}]
    },
    {
        menuTitle: "Main Course",
        class: "main-course",
        items: [{image: pork, name: "The Finest Pork", id: "pork", price: "$12.99"},
            {image: chicken, name: "The Crispiest Chicken", id: "chicken", price: "$12.99"},
            {image: steak, name: "The Juciest Steak", id: "steak", price: "$12.99"}]

    },
    {
        menuTitle: "Beverages",
        class: "beverages",
        items: [{image: milkshake, name: "Milkshake", id: "milkshake", price: "$2.99"},
            {image: water, name: "Water", id: "water", price: "$Free.99!"},
            {image: coffee, name: "Coffee", id: "coffee", price: "$2.99"}]

    }]

    menuPopulation.forEach((element, index) => {
        const partContainer = document.createElement("div");
        console.log(index);
        partContainer.classList.add(element.class);
        
        const title = document.createElement("h3");
        title.textContent = element.menuTitle;
        title.classList.add("food-title");

        partContainer.appendChild(title);

        const partHolder = document.createElement("div");
        partHolder.id = "part-holder"
        
        element.items.forEach((itemsPart) => {
            const itemContainer = document.createElement("div");

            const foodPic = new Image();
            foodPic.src = itemsPart.image;
            foodPic.id = itemsPart.id

            const nameAndPriceContainer = document.createElement("div");

            const nameOfItem = document.createElement("div");
            nameOfItem.innerHTML = itemsPart.name;

            const priceText = document.createElement("div");
            priceText.innerHTML = itemsPart.price;

            nameAndPriceContainer.appendChild(nameOfItem);
            nameAndPriceContainer.appendChild(priceText);
            nameAndPriceContainer.classList.add("name-and-price")

            itemContainer.appendChild(foodPic);
            itemContainer.appendChild(nameAndPriceContainer);
            itemContainer.classList.add("item-container")

            partHolder.appendChild(itemContainer);
        })

        partContainer.appendChild(partHolder);
        menuContainer.appendChild(partContainer);
    })
    content.appendChild(menuContainer);  
}

function removeChild(container){
    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }
}

