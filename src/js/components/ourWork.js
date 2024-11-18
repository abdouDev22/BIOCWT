export function ourWork() {
    const container = document.createElement("div");
    container.classList.add("ourWork");

    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    const arrows = createNavigationArrows();

    const imagePaths = [
        "./src/img/modern-wooden-kitchen-interior-steel-kitchen-faucet 2.jpg"];
    carousel.appendChild(createCarouselImages(imagePaths));
    carousel.appendChild(arrows.left);
    carousel.appendChild(arrows.right);
    carousel.appendChild(createNavigationDots());

    container.appendChild(createTitle());
    container.appendChild(carousel);

    return container;
}

import { createImageElement } from '../components/createImageElement.js'

function createTitle() {
    const title = document.createElement("h1");
    title.classList.add("title");
    title.textContent = "OUR WORK";
    return title;
}

function createCarouselImages(imagePaths) {
    const imgs = document.createElement("div");
    imgs.classList.add("images");

    imagePaths.forEach(path => {
        imgs.appendChild(createImageElement(path));
    });

    return imgs;
}

function createNavigationArrows() {
    const arrows = {
        left: document.createElement('span'),
        right: document.createElement('span')
    };
    arrows.left.classList.add('iconoir_arrow_left');
    arrows.right.classList.add('iconoir_arrow_right');
    return arrows;
}

function createNavigationDots() {
    const navigationDots = document.createElement('div');
    navigationDots.classList.add('navigation-dots');

    for (let i = 0; i < 3; i++) {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (i === 0) {
            dot.classList.add('active');
        }
        navigationDots.appendChild(dot);
    }
    return navigationDots;
}