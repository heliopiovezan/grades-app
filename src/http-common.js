import axios from 'axios';

//Define a URL base da origem para consumo do servico
export default axios.create({
  // baseURL: 'http://localhost:3000/',
  baseURL: 'https://igti-gradesapi.herokuapp.com/',
  headers: {
    'Content-type': 'application/json',
  },
});
