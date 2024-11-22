import { Header } from '../components/Header.js'
import { theWoodWeWorkWith } from '../components/theWoodWeWorkWith.js'
import { createImageElement } from '../components/createImageElement.js'
import {ourWork} from "../components/ourWork.js";

export function Home() {
    const container = document.createElement('div');

    container.appendChild(Header());
    //container.appendChild(imgBackground())
    container.appendChild(firstElement());
    
    /*container.appendChild(theWoodWeWorkWith());
    container.appendChild(ourWork());*/
    

    return container;
}

/*function imgBackground(){
    const div = document.createElement('div');
    div.classList.add('img_background_content');
    div.appendChild(createImageElement("./src/img/background_home.svg"));
    return div;
}*/


function firstElement () {
    const parent = document.createElement('div');
    parent.classList.add('parent');
    const div = document.createElement("div");
    div.classList.add("first_element");

    const flex1 = document.createElement('div');
    flex1.classList.add('flex1');

    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "Solid wood products";
    const subtitle = document.createElement("h4");
    subtitle.classList.add("subtitle");
    subtitle.textContent = "Oak, beech, ash from";
    const subtitle2 = document.createElement("h4");
    subtitle2.classList.add("subtitle");
    subtitle2.innerHTML = "<span>1700 CZK</span> per m3";
    flex1.appendChild(title);
    flex1.appendChild(subtitle);
    flex1.appendChild(subtitle2);
    div.appendChild(flex1);

    const a = document.createElement("a");
    a.classList.add("Order");
    a.textContent = "Order";
    a.href = "#";
    flex1.appendChild(a);

    const flex2 = document.createElement('div');
    flex2.classList.add('flex2');
    flex2.appendChild(createImageElement("./src/img/element1_img1.jpg"));
    flex2.appendChild(createImageElement("./src/img/element1_img2.jpg"));
    flex2.appendChild(createImageElement("./src/img/element1_img3.jpg"));
    div.appendChild(flex2);
    parent.appendChild(div);
    return parent;
}