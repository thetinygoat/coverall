import axios from 'axios';

export default async (query) => {
  const res = await axios.get(`https://safe-temple-77323.herokuapp.com/search?q=${query}`);
  return res.data;
};
