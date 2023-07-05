import axios from 'axios';

const api = {
  login: (credentials) => {
    // Make an API request to authenticate the user
    return axios.post('/api5/loginUser', credentials);
  }
};

export default api;
