import axios from 'axios';
import ENV from '../../environments';

const request = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
});

export default request;
