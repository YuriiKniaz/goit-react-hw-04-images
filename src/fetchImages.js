import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const API_KEY = '38945980-5028cf3f1e63b0c7bd529d7ec';


export const fetchImages = async (value, page) => {
    const params = new URLSearchParams({
       key: API_KEY,
       q: value,
       image_type: 'photo;',
       orientation: 'horizontal',
       page: page,
       per_page: 12,
       
});
  const response = await axios.get(
      `${URL}?${params}`
      
  );
  return response.data;
};

