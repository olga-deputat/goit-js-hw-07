import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");

const galleryMarkup = createGalleryItems(galleryItems);
function createGalleryItems(items) {
    return items.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img 
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`;
    }).join("");
}
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);
const lightbox = new SimpleLightbox('.gallery a', { });

