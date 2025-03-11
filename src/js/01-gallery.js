import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener("click", onGalleryContainerClick);


function createGalleryMarkup(items) {
    const markup = items.map(({preview, original,description}) => {
    return `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </li>
    `
    }).join('');
    return markup;
};

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const isGalleryImageEl = evt.target.classList.contains("gallery__image");
    if(!isGalleryImageEl) {
        return;
    }
    console.log(evt.target);
    openModal(evt.target.dataset.source);
 
};

function openModal(arg) {
    const instance = basicLightbox.create(`
    <img src=${arg}>
    `,{
      onShow: (instance) => {
          document.addEventListener('keydown', onEscKeyPress);
      },
      onClose: (instance) => {
        document.removeEventListener('keydown', onEscKeyPress);
    }
  });
    function onEscKeyPress(event) {
      if (event.key === 'Escape') {
          instance.close();
      }
  }

  instance.show();
};
//    instance.show(() => console.log('lightbox now visible'))

