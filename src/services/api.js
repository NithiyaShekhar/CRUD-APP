import axios from 'axios';

const externalAPIEndpoint = 'https://crudcrud.com/api/'; 

const api = axios.create({
  baseURL: externalAPIEndpoint,
});

export default api;
