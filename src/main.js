import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getPhotos } from './js/pixabay-api';
import { createGalleryMarkup } from './js/render-functions';

const formEl = document.querySelector('.search-form');
const galleryEl = document.querySelector('.gallery');
const loaderEl = document.querySelector('.loader');

formEl.addEventListener('submit', onSearchSubmit);
const lightboxInstance = new SimpleLightbox('.gallery a', {
  /* options */
});

function onSearchSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const searchQuery = form.elements.searchField.value.trim();
  if (searchQuery === '') {
    console.log('Query cannot be empty');
    return;
  }
  galleryEl.innerHTML = '';
  loaderEl.classList.remove('is-hidden');
  getPhotos(searchQuery)
    .then(data => {
      if (data.hits.length === 0) {
        // console.log(
        //   'Sorry, there are no images matching your search query. Please try again!'
        //   );
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      }
      const markup = createGalleryMarkup(data.hits);
      galleryEl.insertAdjacentHTML('beforeend', markup);
      lightboxInstance.refresh();
    })
    .finally(() => {
      loaderEl.classList.add('is-hidden');
      form.reset();
    });
}
