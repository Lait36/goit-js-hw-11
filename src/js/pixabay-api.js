// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

// Function to make HTTP request to Pixabay API
export const fetchImages = searchQuery => {
  const options = new URLSearchParams({
    key: '43292440-b0b2b94cbd69ec3f0dfdb5c21',
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  });
  const loader = document.querySelector('.loader');
  const url = `https://pixabay.com/api/?${options}`;
loader.classList.remove('is-hidden');
  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to fetch images');
      }
      return response.json();
    })
    .then(res => {
      const images = res.hits;
      if (images.length === 0) {
        iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topCenter',
        });
      }
      loader.classList.add('is-hidden');
      return images;
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      return null;
    })
};
