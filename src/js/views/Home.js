import { Header } from '../components/Header.js'

export function Home() {
    // Create a container element to return
    const container = document.createElement('div');
    
    // Add Header to container instead of body
    container.appendChild(Header());


   
    container.appendChild(firstElement());

    
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

    const img = document.createElement("img");
    img.classList.add("img");
    img.src = "./src/img/element1_img1.jpg";
    div.appendChild(img);

    const img2 = document.createElement("img");
    img2.classList.add("img");
    img2.src = "./src/img/element1_img2.jpg";
    div.appendChild(img2);
    return div;
}