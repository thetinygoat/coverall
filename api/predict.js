import axios from 'axios';

export default async (url) => {
  const res = await axios.post('https://evening-escarpment-33232.herokuapp.com/predict', {
    url,
  });
  return res.data;
};
