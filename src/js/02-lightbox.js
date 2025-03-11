import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);
console.log(galleryMarkup);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);

function createGalleryMarkup(items) {
    const markup = items.map(({preview,original,description}) => {
        return `
         <li class="gallery__item">
        <a class="gallery__link" href="${original}">
           <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
     </li>
         `
     }).join("");
     return markup;
};

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    
    const isGalleryImageEl = evt.target.classList.contains("gallery__image");

    if(!isGalleryImageEl) {
    return;
    }
    console.log(evt.target);

    openModal();
};

function openModal() {
    let gallery = new SimpleLightbox('.gallery a', { 
        overlayOpacity: 0.7,
        captionsData: "alt",
        captionDelay: 250,
        navText: ['←','→'],
    });
    console.log(gallery);
}