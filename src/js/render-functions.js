import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const gallery = document.querySelector(".gallery");
const loader = document.querySelector(".loader");

let lightbox = new SimpleLightbox(".gallery a");

export function showLoader() {
    loader.style.display = "block";
}

export function hideLoader() {
    loader.style.display = "none";
}

export function clearGallery() {
    gallery.innerHTML = "";
}

export function renderImages(images) {
    if (images.length === 0) {
        iziToast.error({
            title: "Oops!",
            message: "Sorry, no images found. Try again!",
            position: "topRight",
        });
        return;
    }

    const markup = images
        .map(
            (img) => `
        <a href="${img.largeImageURL}" class="gallery-item">
            <img src="${img.webformatURL}" alt="${img.tags}" />
            <div class="info">
                <p>Likes: ${img.likes}</p>
                <p>Views: ${img.views}</p>
                <p>Comments: ${img.comments}</p>
                <p>Downloads: ${img.downloads}</p>
            </div>
        </a>
    `
        )
        .join("");

    gallery.insertAdjacentHTML("beforeend", markup);
    lightbox.refresh();
}
