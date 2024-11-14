export function theWoodWeWorkWith (){
    const div = document.createElement("div");
    div.classList.add("theWoodWeWorkWith");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "THE WOOD WE WORK WITH";

    div.appendChild(createImageElement("./src/img/old-wood-grain-background 2.jpg"));
    div.appendChild(createImageElement("./src/img/wood-texture-design-decoration 1.jpg"));
    div.appendChild(createImageElement("./src/img/pale-oak-wood-texture-design-background 1.jpg"));
    div.appendChild(title);
    return div
}
import { createImageElement } from '../components/createImageElement.js'