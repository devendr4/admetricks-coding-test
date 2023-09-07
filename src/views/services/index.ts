import axios from 'axios';

export const downloadFile = (year: number) => {
  axios.get(`http://localhost:8000/dollar/${year}`);
};
