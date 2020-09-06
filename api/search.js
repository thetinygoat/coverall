import axios from 'axios';

export default async (query) => {
  const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sources=the-hindu&sortBy=popularity&apiKey=52aa34328e3e432e95a560f02a4e0770`);
  return res.data;
};
