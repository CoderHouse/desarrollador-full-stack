import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:4000/products'
});

export default instance;