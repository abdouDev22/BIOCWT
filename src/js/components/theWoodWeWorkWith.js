export function theWoodWeWorkWith (){
    const div = document.createElement("div");
    div.classList.add("theWoodWeWorkWith");

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "THE WOOD WE WORK WITH";

    const surcontent= document.createElement("div");
    surcontent.classList.add("surcontent");

    surcontent.appendChild(createContent("content1","Oak",
        ["Durability", "Beautiful texture", "Water resistance", "Expensive"],
        "./src/img/old-wood-grain-background 2.jpg",["h", "h", "h", "c"]));
    surcontent.appendChild(createContent("content2","Buk",
        ["Durability", "Hard to handle"],
        "./src/img/wood-texture-design-decoration 1.jpg",["h", "c"]));
    surcontent.appendChild(createContent("content3","Ash",
        ["Durability", "Hard to handle"],
        "./src/img/pale-oak-wood-texture-design-background 1.jpg",["h", "c"]));

    div.appendChild(title);
    div.appendChild(surcontent);
    
    return div
}
import { createImageElement } from '../components/createImageElement.js'


function createContent(classList, title, listItems, imagePath, types) {
    const content = document.createElement("div");
    content.classList.add("content", classList);

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
