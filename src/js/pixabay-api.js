import axios from 'axios';


axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const API_KEY = '56406455-6dc399abae623877bee600229'; 
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return axios.get(`?${searchParams}`)
    .then(response => {
      
      return response.data;
    });

    
}
