import { fetchImages } from "./pixabay-api.js";
import { renderImages, clearGallery, showLoader, hideLoader } from "./render-functions.js";

const form = document.querySelector(".form");
const searchInput = form.querySelector("input[name='search-text']");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const query = searchInput.value.trim();
    if (query === "") {
        return;
    }

    clearGallery(); 
    showLoader();

    try {
        const images = await fetchImages(query);
        renderImages(images);
    } catch (error) {
        console.error("Search error:", error);
    } finally {
        hideLoader(); 
    }

    form.reset();
});
