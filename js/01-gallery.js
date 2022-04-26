import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const imgMarkup = createItemsMarkup(galleryItems);

galleryEl.insertAdjacentHTML("beforeend", imgMarkup);
galleryEl.addEventListener('click', onImagesContainerClick);

function createItemsMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
      <a class="gallery__link" href="${original.value}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>`;
    })
    .join("");
}

function onImagesContainerClick(e) {
    const GalleryItemEl = e.target.classList.contains('gallery__image');
    const imageSrc = e.target.dataset.source;
    e.preventDefault();
    if (!GalleryItemEl) {
        return;
    }

    const instance = basicLightbox.create(`
    <img src="${imageSrc}" width="800" height="600">`, {
        onShow: () => {
            window.addEventListener("keydown", closeByEscButton)
        },
        onClose: () => {
            window.removeEventListener("keydown", closeByEscButton)
        },
    });
   
function closeByEscButton(e) {
        if (e.code === 'Escape') {
            instance.close();
        };
    };
    instance.show();
} 


