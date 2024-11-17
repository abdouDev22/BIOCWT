export function theWoodWeWorkWith (){
    const div = document.createElement("div");
    div.classList.add("theWoodWeWorkWith");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "THE WOOD WE WORK WITH";


    div.appendChild(title);
    div.appendChild(createContent("Oak",
        ["Durability", "Beautiful texture", "Water resistance", "Expensive"],
        "./src/img/old-wood-grain-background 2.jpg",["h", "h", "h", "c"]));


    return div
}
import { createImageElement } from '../components/createImageElement.js'


function createContent(title, listItems, imagePath, types) {
    const content = document.createElement("div");
    content.classList.add("content");

    const titleh4 = document.createElement("h4");
    titleh4.classList.add("titleh4");
    titleh4.textContent = title;

    const ul = document.createElement("ul");
    listItems.forEach((itemText, index) => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.classList.add(types[index]); // Use the type from the array at current index
        li.appendChild(span);
        li.appendChild(document.createTextNode(itemText));
        ul.appendChild(li);
    });

    content.appendChild(createImageElement(imagePath));
    content.appendChild(titleh4);
    content.appendChild(ul);

    return content;
}
