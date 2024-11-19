import axios from 'axios';

const API_URL = 'http://localhost:5000/api/flow';

export const startFlow = (userEmail) => axios.post(`${API_URL}/start`, { userEmail });
