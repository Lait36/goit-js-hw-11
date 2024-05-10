// Описаний у документації
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const currentTModal = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  disableRightClick: true,
});

import { fetchImages } from './js/pixabay-api.js';
import { renderImages } from './js/render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchInput = document.querySelector('input');
  const searchQuery = searchInput.value.trim();

  if (searchQuery === '') {
    iziToast.warning({
      title: '',
      message: 'Please enter a search query',
      position: 'topCenter',
    });
    return;
  }

  // Display loader

  fetchImages(searchQuery)
    .then(data => {
      if (data) {
        const container = document.querySelector('.gallery');
        container.innerHTML = ''; // Очищення контейнера
        container.innerHTML = renderImages(data); // Вставка нового HTML зображень
        currentTModal.refresh();
      }
    });
});
