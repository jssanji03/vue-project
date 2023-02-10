import axios from 'axios';

const bookRequest = axios.create({
  baseURL: 'https://fe-interview-api.unnotech.com/'
})

export const getBookList = () => bookRequest.get('/books/')
// export const postUserLogout = data => userRequest.post('/signOut', data)