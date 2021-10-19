import axios from 'axios';

export const instance = axios.create( {
  baseURL: 'http://localhost:5001/challenge-4b2b2/us-central1/api'
} );
