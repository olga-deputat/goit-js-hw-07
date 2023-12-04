import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//1.створюємо галерею - клікаємо по елементах - бачимо велике зоображення
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
    })
        .join("");
}
galleryList.insertAdjacentHTML("beforeend", galleryMarkup);

//2.делегуємо на ul.gallery - отримуємо url великого зоображення

let instance;
function onImgClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") return;
    const dataSet = event.target.dataset.source;
    console.log(dataSet);
    instance = basicLightbox.create(
        `<img width="1400" height="900" src=" ${dataSet} ">`
    
    );
    instance.show();
}
galleryList.addEventListener("click", onImgClick);
// додаємо закриття через escape
function onEscapeClick(event) {
    if (event.code !== "Escape") return;
    instance.close();
}


