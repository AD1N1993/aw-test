import axios from 'axios';

export const TodoInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
});
