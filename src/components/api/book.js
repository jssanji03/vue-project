import axios from 'axios';

const bookRequest = axios.create({
  baseURL: 'https://fe-interview-api.unnotech.com/'
})

export const getBookList = () => bookRequest.get('/books/')
export const getBookDetail = data => bookRequest.get(`/books/${data}`);
export const postBookList = data => bookRequest.post('/books/', data);
export const patchBookDetail = (data,msg) => bookRequest.patch(`/books/${data}`,msg);