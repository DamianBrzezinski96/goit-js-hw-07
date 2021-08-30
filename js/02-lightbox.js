import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);


const galleryDiv = qs(".gallery");
console.log(galleryDiv);

const images = galleryItems
    .map(item =>
        `<a class="gallery__item" href="${item.original}">
                <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
                </a>`
    
    )
    .join("");

galleryDiv.insertAdjacentHTML("afterbegin", images);
console.log(images);

let lightbox = new SimpleLightbox(`.gallery a`, {
    captionsData: "alt",
    captionsDelay: 250
});