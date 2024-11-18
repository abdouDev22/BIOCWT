export function createImageElement(src) {
    const img = document.createElement("img");
    img.classList.add("img");
    img.src = src;
    return img;
}