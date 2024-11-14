import { Header } from '../components/Header.js'
import { theWoodWeWorkWith } from '../components/theWoodWeWorkWith.js'
import { createImageElement } from '../components/createImageElement.js'

export function Home() {
    // Create a container element to return
    const container = document.createElement('div');
    
    // Add Header to container instead of body
    container.appendChild(Header());
    container.appendChild(firstElement());
    
    container.appendChild(theWoodWeWorkWith());
    
    // Return the container node
    return container;
}



function firstElement () {
    const div = document.createElement("div");
    div.classList.add("first_element");
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Solid wood products";
    const subtitle = document.createElement("h4");
    subtitle.classList.add("subtitle");
    subtitle.textContent = "Oak, beech, ash from";
    const subtitle2 = document.createElement("h4");
    subtitle2.classList.add("subtitle");
    subtitle2.innerHTML = "<span>1700 CZK</span> per m3";
    div.appendChild(title);
    div.appendChild(subtitle);
    div.appendChild(subtitle2);

    const a = document.createElement("a");
    a.classList.add("Order");
    a.textContent = "Order";
    a.href = "#";
    div.appendChild(a);

    div.appendChild(createImageElement("./src/img/element1_img1.jpg"));
    div.appendChild(createImageElement("./src/img/element1_img2.jpg"));
    div.appendChild(createImageElement("./src/img/element1_img3.jpg"));
    return div;
}

