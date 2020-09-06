import axios from 'axios';

export default async () => {
  const res = await axios.get('https://safe-temple-77323.herokuapp.com/top');
  return res.data;
};
