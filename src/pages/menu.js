export default function menu(){
    const content = document.querySelector("#content");
    const menuContainer = document.createElement("div");
    const menuTitle = document.createElement("h1");
    menuTitle.textContent = "MENU"


    const menuPopulation = ({
        menuTitle: "Appetizers",
        class: "appetizer",
        items: [{image: "", name: "", id: "", price: ""},
            {image: "", name: "", id: "", price: ""},
            {image: "", name: "", id: "", price: ""}]
    },
    {
        menuTitle: "Main Course",
        class: "main-course",
        items: [{image: "", name: "", id: "", price: ""},
            {image: "", name: "", id: "", price: ""},
            {image: "", name: "", id: "", price: ""}]

    },
    {
        menuTitle: "Beverages",
        class: "beverages",
        items: [{image: "", name: "", id: "", price: ""},
            {image: "", name: "", id: "", price: ""},
            {image: "", name: "", id: "", price: ""}]

    })

    menuPopulation.forEach((element, index) => {
        const partContainer = document.createElement("div");
        console.log(index)
        
        const title = document.createElement("h3");
        title.textContent = element.menuTitle;

        partContainer.appendChild(title);

        const partHolder = document.createElement("div");
        
        element.items.forEach((itemsPart) => {
            const itemContainer = document.createElement("div");
            itemContainer.id = itemsPart.id

            const foodPic = new Image();
            foodPic.src = itemsPart.image;

            const nameAndPriceContainer = document.createElement("div");

            const nameOfItem = document.createElement("div");
            nameOfItem.innerHTML = itemsPart.name;

            const priceText = document.createElement("div");
            priceText.innerHTML = itemsPart.price;

            nameAndPriceContainer.appendChild(nameOfItem);
            nameAndPriceContainer.appendChild(priceText);

            itemContainer.appendChild(foodPic);
            itemContainer.appendChild(nameAndPriceContainer);

            partHolder.appendChild(itemContainer);
        })

        partContainer.appendChild(partHolder);
        menuContainer.appendChild(partContainer);
    })
    content.appendChild(menuContainer);  
}

